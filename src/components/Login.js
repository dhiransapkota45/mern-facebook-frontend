import React, { useState } from "react";
import Modal from "react-modal";
import Signup from "./Signup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const BaseURL = "http://localhost:8000";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Login = () => {
  const [alertShower, setAlertShower] = useState(false);
  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("email requried")
      .email("invalid email address"),
    password: yup.string().required("password required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSumbitHandler = async (data) => {
    const responseRaw = await fetch(`${BaseURL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await responseRaw.json();
    setAlertShower(true);
    console.log(response);

    if (response.success) {
      localStorage.setItem("authToken", response.authToken);
      navigate("/");
    } else {
      setTimeout(() => {
        setAlertShower(false);
      }, 3000);
    }
  };

  //below three functions are used for modal showing purpose only
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {/* this is for modal */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Signup BaseURL={BaseURL} setIsOpen={setIsOpen}/>
      </Modal>

      {/* actual body code */}

      <div className=" flex bg-slate-200 justify-evenly h-screen items-center">
        {/* left side */}
        <div className="">
          <img src="/images/logo.png" alt="" className=" w-60" />
          <div className="font-semibold text-xl">
            Connect with friends and the world around you on Facebook.
          </div>
        </div>
        {/* right side or form */}
        <div className="flex flex-col  p-4 rounded text-xl">
          <form
            className="flex flex-col bg-white"
            onSubmit={handleSubmit(onSumbitHandler)}
          >
            {errors.email && (
              <span className="text-sm text-red-500">
                *{errors.email.message}
              </span>
            )}
            <input
              className={`border border-gray-300 rounded p-2 my-2 focus:outline-none ${errors.email && " border-red-600"
                }`}
              type="text"
              placeholder="Email or phone number"
              {...register("email")}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                *{errors.password.message}
              </span>
            )}
            <input
              className="border border-gray-300 rounded p-2 focus:outline-none"
              placeholder="passoword"
              type="text"
              {...register("password")}
            />
            <button
              className={`bg-red-500 text-white my-2 ${alertShower && "bg-red-400"
                } `}
              disabled={alertShower}
              type="submit"
            >
              Log in
            </button>
            <a href="#">Forget password?</a>
            <button
              id="btn"
              className="bg-red-500 text-white mt-2"
              onClick={openModal}
            >
              Create New Account
            </button>
          </form>
          <div>
            {alertShower && (
              <span className="bg-red-500 text-white rounded p-2 text-center">
                Invalid Credentials
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
