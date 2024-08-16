import { Link } from "react-router-dom";
import { TbTrademark } from "react-icons/tb";
const Icon = () => {
  return (
    <>
      <Link
        to="/"
        className="rounded-md w-32 pointer py-2 relative px- flex justify-center text-white updpercase m-3 font-bold items-center text-[18px]"
      >
        Crypto
        <span className="text-sm ml- rounded bg-blue-600 px-1 font-extrabold font-mono text-black">
          blooming
        </span>
        <span
          className=" text-white bdg-white absolute left-32 righv] pt-1 top-0.5"
          style={{ fodntSize: "3px" }}
        >
          <TbTrademark />
        </span>
      </Link>
    </>
  );
};

export default Icon;
