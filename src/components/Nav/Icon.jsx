import { Link } from "react-router-dom";
import { FaTrademark } from "react-icons/fa";
const Icon = () => {
  return (
    <>
      <Link className="relative" to="/">
        <span className="rounded-md font-oswald tracking-widest w-32 pointer pt-2  px- flex justify-center text-white updpercase  font-bold items-center text-[18px]">
          ASSET
        </span>
        <span className="flex justify-center text-white uppercase text-sm rounded bg-blue-600 font-extrabold font-mono text-blajck">
          Proxy
        </span>
        <span
          className=" text-white bdg-white absolute right-3 pt-2 top-3"
          style={{ fodntSize: "3px" }}
        >
          <FaTrademark />
        </span>
      </Link>
    </>
  );
};

export default Icon;
