import formImg1 from '../assets/images/form_bg.png'
import { Link } from 'react-router-dom'
const Login = () => {
  return (

    // login wrapper
    <div className="w-full grid place-items-center gap-3 px-6 py-12 mx-auto max-w-[1200px] md:h-screen">

    {/* login container */}
    <div className="w-full md:h-fit lg:h-fit lg:py-0 
    flex rounded-xl overflow-hidden shadow-xl">

    {/* content LEFT */}
    <div className="w-full bg-blue-500 p-10 2xl:px-20 flex flex-col justify-center">

        {/* form heading */}
        <div className="w-full my-4 md:ml-10">
            <span className="text-white font-bold text-5xl my-[2rem]">Socialize</span>
            <p className="text-white text-base font-medium mt-4">Login to your account</p>
            <span className="text-md text-white">Welcome Back</span>
        </div>

        {/* ==== login form starts here ==== */}
        <form className="py-8 flex flex-col gap-6 md:w-[70%] md:ml-10">

            <label htmlFor="email" className='text-white font-medium text-[1.3rem]'>Email</label>
            <input type="email" className="outline-none text-sm px-4 py-3 rounded-lg" />

            <label htmlFor="password" className='text-white font-medium text-[1.3rem]'>Password</label>
            <input type="password" className="outline-none text-sm px-4 py-3 rounded-lg"/>

            <button type="submit" className=" bg-blue-700 text-white rounded-md px-3 py-3 font-normal mt-4">Login</button>

            <Link to="/resetPassword" className="text-white text-sm text-right">Forgot password?</Link>


        </form>
        <p className="text-white text-sm mt-auto md:ml-10">Dont have an account?
        <Link to="/register" className="text-white text-[12px] md:font-medium ml-2">Sign Up</Link></p>

    </div>


        {/* content RIGHT */}
        <div className="hidden md:w-[75%] lg:flex flex-col items-center justify-center ">
            <div className="relative w-full h-full">
                <img src={formImg1} alt="form image" className='w-full h-full object-cover'/>
            </div>
        </div>



    </div>

    </div>
  )
}

export default Login