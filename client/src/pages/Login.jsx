import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from "react-hot-toast";
import { loginPostRequest } from '../services/api';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

import formImg1 from '../assets/images/form_bg.jpg'

const validationSchema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})
    .required();

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const navigate = useNavigate();
    const { login } = useAuth();


    const onSubmit = async (data) => {
        try {
            const result = await loginPostRequest(data);
            if (result.token) {
                login(result.token)
                toast.success(`${result.message}`);
                navigate('/');
            } else {
                toast.error(`${result.error}`)
            }
        } catch (error) {
            console.error("Login failed", error);
            toast.error("Login failed");
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
                    <form className="py-8 flex flex-col gap-6 md:w-[70%] md:ml-10" onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor="email" className='text-white font-medium text-[1.3rem]'>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="outline-none text-sm px-4 py-3 rounded-lg"
                            {...register('email')}
                            autoComplete='off'
                        />
                        <p className='text-red-600 text-sm'>{errors.email?.message}</p>

                        <label htmlFor="password" className='text-white font-medium text-[1.3rem]'>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="outline-none text-sm px-4 py-3 rounded-lg"
                            {...register('password')}
                            autoComplete='off'
                        />
                        <p className='text-red-600 text-sm'>{errors.password?.message}</p>

                        <button type="submit" className=" bg-blue-700 text-white rounded-md px-3 py-3 font-normal mt-4">Login</button>

                        <Link to="/resetPassword" className="text-white text-sm text-right">Forgot password?</Link>


                    </form>
                    <p className="text-white text-sm mt-auto md:ml-10">Dont have an account?
                        <Link to="/register" className="text-white text-[12px] md:font-medium ml-2">Sign Up</Link></p>

                </div>


                {/* content RIGHT */}
                <div className="hidden md:w-full lg:flex flex-col items-center justify-center ">
                    <div className="relative w-full h-full">
                        <img src={formImg1} alt="form image" className='w-full h-full object-cover' />
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Login