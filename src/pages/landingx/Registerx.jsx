import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUserDetails, setToken } from "../../Redux/action";
import { useDispatch } from "react-redux";
import bultpay3 from "../../images/bultpay3.png";
import Icon from "../../components/Nav/Icon";

function Registerx() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [terms, setTerms] = useState(true);
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    error: "",
    exists: "",
  });
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const [errors, setErrors] = useState({
    nameError: "",
    phone: "",
    emailError: "",
    passwordError: "",
  });

  const register = (e) => {
    e.preventDefault();

    if (!terms) {
      return;
    }
    setMsg({});
    console.log({
      name,
      email,
      phone,
      password,
    });

    setErrors({
      firstNameError: "",
      lastNameError: "",
      dialError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    });

    let isValid = true;

    if (!name) {
      setErrors((prevFormData) => ({
        ...prevFormData,
        nameError: "Name is required.",
      }));
      isValid = false;
    }

    if (!phone) {
      setErrors((prevFormData) => ({
        ...prevFormData,
        phoneError: "Phone Number is required.",
      }));
      isValid = false;
    }

    if (!email) {
      setErrors((prevFormData) => ({
        ...prevFormData,
        emailError: "Email Address is required.",
      }));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors((prevFormData) => ({
        ...prevFormData,
        emailError: "Invalid email address.",
      }));
      isValid = false;
    }

    if (!password) {
      setErrors((prevFormData) => ({
        ...prevFormData,
        passwordError: "Password is required.",
      }));
      isValid = false;
    } else if (password.length < 6) {
      setErrors((prevFormData) => ({
        ...prevFormData,
        passwordError: "Password must be at least 6 characters long.",
      }));
      isValid = false;
    }
    // console.log("rrrrr", confirmPassword);

    if (!terms) {
      isValid = false;
      // You may display a message or highlight the checkbox here
    }

    if (isValid) {
      fetch("http://rest.assestproxy.com/sign-up", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("res", res);
        const { token } = res;
        const { user } = res;
        dispatch(setToken(token));

        if (res.msg) {
          setMsg(res.msg);
          console.log("msg", msg);
        }

        if (token != undefined) {
          dispatch(setUserDetails(user));
          navigate("/user/dashboard", { replace: true });
        }
      })
      .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex flex-col bg-[#26313f3a] shadow-md rounded  text-slate-700 items-center px-3 justify-center pt-3">
      <div className="lg:mx-auto w-full lg:w-10/12 px-3 lg:px-12">
        <div className="flex items-center justify-center">
          <span className="flex bg-black items-center lg:pr-2 lg:w-40 rounded-lg text-gray-400 justify-center mb-6">
            <Icon />
          </span>
        </div>

        <div className=" w-full mx-auto pt-2 md:pt-0 max-h-screen x-6  md:h-auto flex flex-col self-center items-center md:mt-6 mb-12">
          <div className="bg-white sm:max-w-sm w-full px-4 pb-6 md:pb-2 rounded">
            <div className="w-full rounded-lg py-0 lg:py-6 px-6 pt-3">
              <label className="block mt-3 text-base lg:text-xl capitalize font-semibold pb-2">
                Create an account
              </label>
              <p className="text-xs">
                Sign up with your email and get started with your free account
              </p>
              <form method="#" action="#" className="mt-6">
                <div className="pb-3">
                  <div className="text-left font-semibold pb-1 text-xs lg:text-sm">
                    Full name <span className="text-red-600">*</span>
                  </div>
                  <input
                    placeholder="Enter your full name"
                    className=" pl-4 mt-1 block w-full border border-slate-300 rounded shadow text-black placeholder-gray-400 text-sm h-10 py-.5 focus:ring-0 focus:bg-slate-200"
                    onChange={onNameChange}
                    name="name"
                    value={name}
                  />
                  {errors.nameError && (
                    <p className="text-red-500 text-xs">
                      {errors.nameError}
                    </p>
                  )}
                </div>
                <div className="pb-3">
                  <div className="text-left font-semibold pb-1 text-xs lg:text-sm">
                    Email Address <span className="text-red-600">*</span>
                  </div>
                  <input
                    placeholder="Enter your email"
                    className=" pl-4 mt-1 block w-full border border-slate-300 rounded shadow text-black placeholder-gray-400 text-sm h-10 py-.5 focus:ring-0 focus:bg-slate-200"
                    onChange={onEmailChange}
                    name="email"
                    value={email}
                  />
                  {errors.emailError && (
                    <p className="text-red-500 text-xs">
                      {errors.emailError}
                    </p>
                  )}
                </div>
                <div className="pb-3">
                  <div className="text-left font-semibold pb-1 text-xs lg:text-sm">
                    Phone <span className="text-red-600">*</span>
                  </div>
                  <input
                    placeholder="Enter your phone number"
                    className=" pl-4 mt-1 block w-full border border-slate-300 rounded shadow text-black placeholder-gray-400 text-sm h-10 py-.5 focus:ring-0 focus:bg-slate-200"
                    onChange={onPhoneChange}
                    name="phone"
                    value={phone}
                  />
                  {errors.phoneError && (
                    <p className="text-red-500 text-xs">
                      {errors.phoneError}
                    </p>
                  )}
                </div>
                <div className="mt-3">
                  <div className="text-left font-semibold pb-1 text-xs lg:text-sm">
                    Password <span className="text-red-600">*</span>
                  </div>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className=" pl-4 mt-1 block w-full border border-slate-300 rounded shadow text-black placeholder-gray-400 text-sm h-10 py-.5 focus:ring-0 focus:bg-slate-200"
                    onChange={onPasswordChange}
                    name="password"
                    value={password}
                  />
                </div>
                {errors.passwordError && (
                    <p className="text-red-500 text-xs">
                      {errors.passwordError}
                    </p>
                  )}
                <div className="mt-7">
                  <button
                    className="font-semibold bg-blue-600 rounded hover:bg-blue-500 text-white capitalize text-sm w-full  btn-sm h-9 focus:bg-blue-600"
                    onClick={register}
                  >
                    Register
                  </button>
                </div>
                <div className="flex mt-4 justify-center w-full text-sm">
                  <div className=" text-sm">
                    Already have an account?
                    <Link
                      className="ml-2 text-blue-600 font-semibold focus:text-red-600"
                      to="/public/login"
                    >
                      Login instead
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerx;
