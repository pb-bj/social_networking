import { useState } from 'react';
import { loginPostRequest } from '../services/api';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

import formImg1 from '../assets/images/form_bg.jpg'

const Login = () => {
    const [ formData, setFormData ] = useState({
        email : '',
        password : ''
    });
    const navigate = useNavigate();
    const { login } = useAuth(); 

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name] : e.target.value });
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const result = await loginPostRequest(formData); 
                    if(result && result.token) {
                        login(result.token)
                        navigate('/');
                    }
            } catch(error) {
                console.log(error);
            }
        }

  return (

    // login wrapper
    <div className="w-full grid place-items-center gap-3 px-6 py-12 mx-auto max-w-[1200px] md:h-screen">

    {/* login container */}
    <div className="w-full md:h-fit lg:h-fit lg:py-0 
    flex rounded-xl overflow-hidden">

    {/* content LEFT */}
    <div className="w-full bg-blue-500 h-full p-7 2xl:px-20 md:h-full">

        {/* form heading */}
        <div className="w-full md:ml-10">
            <span className="text-white font-bold text-5xl my-[2rem]">Socialize</span>
            <p className="text-white text-base font-medium mt-4">Login to your account</p>
            <span className="text-md text-white">Welcome Back</span>
        </div>

        {/* ==== login form starts here ==== */}
        <form className="py-8 flex flex-col gap-6 md:w-[70%] md:ml-10" onSubmit={ handleSubmit }>

            <label htmlFor="email" className='text-white font-medium text-[1.3rem]'>Email</label>
            <input 
                type="email" 
                name="email"
                className="outline-none text-sm px-4 py-3 rounded-lg"
                value={formData.email}
                onChange={ handleChange } 
            />

            <label htmlFor="password" className='text-white font-medium text-[1.3rem]'>Password</label>
            <input 
                type="password" 
                name="password"
                className="outline-none text-sm px-4 py-3 rounded-lg"
                value={formData.password}
                onChange={ handleChange }
            />

            <button type="submit" className=" bg-blue-700 text-white rounded-md px-3 py-3 font-normal mt-4">Login</button>

            <Link to="/resetPassword" className="text-white text-sm text-right">Forgot password?</Link>


        </form>
        <p className="text-white text-sm mt-auto md:ml-10">Dont have an account?
        <Link to="/register" className="text-white text-[12px] md:font-medium ml-2">Sign Up</Link></p>

    </div>


        {/* content RIGHT */}
        <div className="hidden md:w-full lg:flex flex-col items-center justify-center ">
            <div className="relative w-full h-full">
                <img src={formImg1} alt="form image" className='w-full h-full object-cover'/>
            </div>
        </div>



    </div>

    </div>
  )
}

export default Login