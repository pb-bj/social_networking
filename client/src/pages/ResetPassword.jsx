// import React from 'react'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  return (
    <div className="w-full h-screen grid place-items-center gap-3 px-6 py-12 mx-auto max-w-[1200px]">

      <div className=" text-white w-full md:w-1/2 p-10 y-8 shadow-xl rounded-md">

      <p className="font-bold text-2xl text-blue-600 my-3">Forgot Password</p>
      <span className="text-sm text-slate-500 font-semibold my-5">Please provide your email address below and we will send you a link to reset your password</span>

        <form className="py-4 flex flex-col gap-5">


        <div className="w-full">
                <label htmlFor="email" className="text-black font-medium text-[1.3rem]">Email Address</label>
                <input type="text" id="email"  className="bg-slate-100 border border-gray-300  text-sm px-4 py-3 rounded-md text-black outline-none w-full my-3" />

                <button type="submit" className=" bg-blue-700 text-white rounded-md px-3 py-3 font-semibold my-4 self-end  text-center items-center md:w-[50%]">Send Email</button>
        </div>
        </form>

        <div className="flex flex-row gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
          <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
        </svg>




          <Link to="/login" className="text-blue-800 font-semibold">Back to Login</Link>
        </div>



      </div>

    </div>
  )
}

export default ResetPassword