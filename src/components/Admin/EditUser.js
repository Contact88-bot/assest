import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import {  useSelector } from "react-redux";
import { setUserDetails } from "../../Redux/action";


const EditUser = () => {
  let navigate = useNavigate();
  const adUser = useSelector((state) => state.auth.user);
  // console.log('aduser', adUser)

  const [user, setUser] = useState({
    email: adUser.email,
    accbal: adUser.balance,
    depos: adUser.deposit,
    name: adUser.name,
    wdl: adUser.withdrawal
  })

  //get user token from redux
  //ad user details
  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({...user, [name]: value })
    console.log('user', user)
  };

  const onEdit = async (event) => {
    const {
      email,
      accbal,
      depos,
      name,
      wdl
    } = user;

    const iseditUser = await fetch(
      "/users/:id",
      {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          accbal,
          depos,
          name,
          wdl,
      })
    })

    let resp = await iseditUser.json();
    console.log("edit resp", resp);
    event.preventDefault();
    // navigate("../admin/users", { replace: false });
  };

  const onDel = async () => {
    const { email } = user;
    const isNotThere = await fetch(
      "/deleteuser",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );
    let resp = await isNotThere.json();
    //notify()
    //this.props.history.push("/owner/allusers");
  };
  return(
    <div className="pt-32">
        <form className="px-2 border shadow-xl mb-4 bg-gray-700 text-gray-400 capitalize text-xl grid grid-cols-2 gap-x-16 py-3">
          <div class="mb-2 pt-0">
            <label className="text-xs">Email</label>
            <input
              name="deposit"
              disabled
              value={user.email}
              type="text"
              placeholder={`${user.email}`}
              className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
          <div class="mb-2 pt-0">
            <label className="text-lg">Name</label>
            <input
              name="name"
              onChange={onChange}
              value={user.name}
              type="text"
              placeholder={`${user.name}`}
              className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
          <div class="mb-2 pt-0">
            <label className="text-lg">Account Balance</label>
            <input
              name="accbal"
              onChange={onChange}
              value={user.accbal}
              type="number"
              placeholder={`${user.accbal}`}
              className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
  
          <div class="mb-2 pt-0">
            <label className="text-lg">Deposit</label>
            <input
              name="depos"
              onChange={onChange}
              value={user.depos}
              type="number"
              placeholder={`${user.depos}`}
              className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>

          <div class="mb-2 pt-0">
            <label className="text-lg">Withdrawal</label>
            <input
              name="wdl"
              onChange={onChange}
              value={user.wdl}
              type="number"
              placeholder={`${user.wdl}`}
              className="px-3 py-3 placeholder-gray-900 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
            />
          </div>
       
          <div className="mt-8 text-gray-600 flex justify-between">
            <button
              onClick={onEdit}
              className="bg-green-500 text-white active:bg-green-800 font-bold uppercase text-xs px-4 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Save
            </button>

            <button
              onClick={onDel}
              className="bg-red-500 text-white active:bg-red-800 font-bold uppercase text-xs px-4 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
  )
}

export default EditUser


