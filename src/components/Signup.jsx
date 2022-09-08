import React from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

const Signup = () => {

  const signupSchema = yup.object().shape({
    firstname: yup.string().required("firstname required"),
    lastname: yup.string().required("lastname required"),
    email: yup.string().email("invalid email"),
    password: yup.string().required("password required").min(8, "minimum eight letters required"),
    birthday: yup.date()
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signupSchema)
  })

  const onSubmitHandler = async(data) => {
    console.log(data);
    const responseRaw = await fetch("/user/signup", {
      method:"POST", 
      headers:{
        "Content-Type":"application/json"
      }
    })
  }

  console.log(errors);
  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <input
            className="border border-gray-300 rounded p-2 my-2 mr-2"
            type="text"
            placeholder="firstname"
            {...register("firstname")}
          />
          <input
            className="border border-gray-300 rounded p-2 my-2 "
            type="text"
            placeholder="lastname"
            {...register("lastname")}
          />
        </div>
        <input
          className="border border-gray-300 rounded p-2 my-2"
          type="text"
          placeholder="Mobile number or email"
          {...register("email")}
        />
        <input
          className="border border-gray-300 rounded p-2 my-2"
          type="text"
          placeholder="New password"
          {...register("password")}
        />
        <div>
          <label htmlFor="birthday">birthday</label>
          <input
            className="border border-gray-300 rounded p-2 my-2 mx-2"
            type="date"
            
            id="birthday"
            {...register("birthday")}
          />
        </div>
        <div>
          <label className="mr-3" htmlFor="gender">
            gender
          </label>
          <span>male</span>
          <input type="radio" name="gender" id="gender" value="male" {...register("gender")}/>
          <span>female</span>
          <input type="radio" name="gender" id="gender" value="female" {...register("gender")}/>
        </div>
        <button
          className="bg-green-600 text-white rounded my-4 p-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
