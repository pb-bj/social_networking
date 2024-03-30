import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

import { Link, useNavigate } from 'react-router-dom'
import { registerPostRequest } from '../services/api';

import formImg2 from '../assets/images/form_bg2.png';
import toast from "react-hot-toast";

const validationSchema = yup.object({
    firstName : yup.string().required('First name is required'),
    lastName : yup.string().required('Last name is required'),
    gender : yup.string().required('Gender is required'),
    email : yup.string().email('Invalid email').required('Email is required'),
    password : yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password')
  })
  .required();

const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState : { errors } } = useForm({
      resolver: yupResolver(validationSchema),
    })
    
    // const onSubmit = (data) => console.log(data)
    const onSubmit = async (data, e) => {
      e.preventDefault();
      try {
       const result = await registerPostRequest(data);
           if (result && result.message) {
              toast.success(`${result.message}`);
              navigate('/login');
          } else { 
            toast.error(`${result.error}`);
          }
        } catch(error) {
            toast.error('An unexpected error occurred. Please try again.');
          }
    }

    return (

    //signup wrapper
    <div className="w-full grid place-items-center gap-3 px-6 py-12 mx-auto max-w-[1200px] md:h-screen">

      {/* signup container */}
      <div className="w-full md:h-fit lg:h-fit lg:py-0 flex rounded-xl overflow-hidden border border-gray-200">


        {/* === Content LEFT === */}

        <div className="w-full h-full p-7 2xl:px-20 md:h-full">

        {/* ===== form heading ===== */}
          <div className="w-full my-2">
              <span className="text-blue-600 font-bold text-5xl my-[2rem]">Socialize</span>
              <p className="text-slate-400 text-base font-semibold mt-2">Sign up to your account</p>
          </div>


          {/* ==== form begins here ===== */}

          <form 
              className="py-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6" 
              onSubmit={ handleSubmit(onSubmit)}>

              <div className="w-full">
                <label htmlFor="firstName" className="text-black font-medium text-[1.3rem]">First Name</label>
                <input 
                    type="text" 
                    className="bg-slate-100 border border-gray-300  text-sm px-4 py-3 rounded-lg text-black outline-none w-full mt-3" 
                    {...register('firstName')}
                    autoComplete='off'
                />
                <p className='text-red-600 text-sm'>{errors.firstName?.message}</p>
              </div>

              <div className="w-full">
                <label htmlFor="lastName" className="text-black font-medium text-[1.3rem]">Last Name</label>
                <input 
                    type="text" 
                    className="bg-slate-100 border border-gray-300 text-sm px-4 py-3 rounded-lg text-black outline-none w-full mt-3" 
                    {...register('lastName')}                
                    autoComplete='off'
                />
                <p className='text-red-600 text-sm'>{errors.lastName?.message}</p>
              </div>

              <div className="w-full">
                <label htmlFor="lastName" className="text-black font-medium text-[1.3rem]">Gender</label>
                <input 
                    type="text" 
                    name="gender" 
                    className="bg-slate-100 border border-gray-300 text-sm px-4 py-3 rounded-lg text-black outline-none w-full mt-3" 
                    {...register('gender')}
                    autoComplete='off'
                />
                <p className='text-red-600 text-sm'>{errors.gender?.message}</p>
              </div>

              <div className="w-full">
                <label htmlFor="email" className="text-black font-medium text-[1.3rem]">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      className="bg-slate-100 border border-gray-300 text-sm px-4 py-3 rounded-lg text-black outline-none w-full mt-3" 
                      {...register('email')}
                      autoComplete='off'
                    />
                    <p className='text-red-600 text-sm'>{errors.email?.message}</p>
              </div>
            
            <div className="w-full">
              <label htmlFor="password" className="text-black font-medium text-[1.3rem]">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    className="bg-slate-100 border border-gray-300 text-sm px-4 py-3 rounded-lg text-black outline-none w-full mt-3" 
                    autoComplete='off'
                    {...register('password')}
                />
                <p className='text-red-600 text-sm'>{errors.password?.message}</p>
            </div>

              <div className="w-full">
                <label htmlFor="confirmPassword" className="text-black font-medium text-[1.3rem]">Confirm Password</label>
                <input 
                    type="password" 
                    autoComplete='off' 
                    name="confirmPassword" 
                    className="bg-slate-100 border border-gray-300 text-sm px-4 py-3 rounded-lg text-black outline-none w-full mt-3" 
                    {...register('confirmPassword')}
                />
                <p className='text-red-600 text-sm'>{errors.confirmPassword?.message}</p>
              </div>

            <button type="" className=" border-[0.5px] border-blue-700 text-blue-800 rounded-md px-3 py-3 font-semibold mt-4">Cancel</button>
            <button type="submit" className=" bg-blue-700 text-white rounded-md px-3 py-3 font-semibold mt-4">Confirm</button>
          </form>

            <p className="text-black text-sm mt-auto font-semibold my-6">Already have an account? 
            <Link to="/login" className="text-blue-800 ml-2 font-semibold">Login</Link></p>

        </div>

        {/*  ===== content RIGHT ===== */}
        <div className="hidden md:w-[70%] lg:flex flex-col items-center justify-center">
        <div className="relative w-full h-full ">
        <img src={formImg2} alt="form image" className='w-full h-full object-cover ' />
    </div>
      </div>

      </div>
    </div>
  )
};

export default SignUp;
