import React, {useState} from "react";
import { FiEdit } from "react-icons/fi";
import { FaUserLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { setAdUser } from "../../../Redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Users = ({ user, notify }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLocked, setIsLocked] = useState(false);

  const toggleLock = async () => {
    try {
      const res = await fetch('http://rest.assestproxy.com/block', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email }), 
      });

      if (res.ok) {
        setIsLocked(prevState => !prevState); 
      } else {
        console.error('Failed to toggle account status');
      }
    } catch (error) {
      console.error('Error occurred while toggling account status:', error);
    }
  };


  
  const Edituser = () => {
    console.log("usersssssssssss");
    dispatch(setAdUser(user));
    navigate("/admin/edituser", { replace: true });
  };

  const onDel = async () => {
    const { email } = user;
    const isNotThere = await fetch(
      "http://rest.assestproxy.com/deleteuser",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );
    let resp = await isNotThere.json();
    console.log("edit resp", resp);
    notify("deleted");
  };

  return (
    <div class="lg:p-5 p-3 border rounded-md text-black shadow-xl border-white  flex-1 flex justify-between lg:items-center lg:flex-row flex-col gap-3">
      <div class="text-base font-semibold gap-5">
        <p>{`Name: ${user.name}`}</p>
        <p>{`Email: ${user.email}`}</p>
        <p>{`Phone: ${user.phone}`}</p>
        <p>{`Btc: ${user.btc.slice(0, 10)}`}..</p>
      </div>
      
      <div className="text-gray-600 ml-5 flex lg:justify-between self-end md:gap-5 gap-3">
      <div onClick={toggleLock}>
      {isLocked ? (
        <FaUserLock className="text-red-600 cursor-pointer" size={34} />
      ) : (
        <FaUnlock className="text-green-600 cursor-pointer" size={34} />
      )}
    </div>
        <FiEdit
          className="text-blue-300 cursor-pointer"
          size={34}
          onClick={Edituser}
        />
        <RiDeleteBinLine
          className="text-red-400 cursor-pointer"
          size={34}
          onClick={onDel}
        />
      </div>
    </div>
  );
};

export default Users;
