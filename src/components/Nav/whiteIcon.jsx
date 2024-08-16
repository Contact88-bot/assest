import { Link } from "react-router-dom";
import { FaTrademark } from "react-icons/fa";
const WhiteIcon = () => {
  return (
    <>
      <Link
        to="/"
        className="rounded-xl shadow-md w-40 font-oswald tracking-wider boerder-red-600 border-2 bg-black pointer py-2 relative px- flex justify-center text-whidte updpercase m-3 font-bold text-white items-center text-[18px]"
      >
        Asset
        <span className="text-sm ml- rounded bg-[#4e4edc] px-1 font-extrabold font-mono text-black">
          Proxy
        </span>
        <span
          className=" text-whitd bdg-white absolute right-3.5 pt-1 top-0.5"
          style={{ fodntSize: "3px" }}
        >
          <FaTrademark size={13} />
        </span>
      </Link>
    </>
  );
};

export default WhiteIcon;
