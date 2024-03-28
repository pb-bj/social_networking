import { Link } from 'react-router-dom'
import formImg2 from '../assets/images/form_bg2.png'
const SignUp = () => {
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

          <form className="py-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

              <div className="w-full">
                <label htmlFor="firstName" className="text-black font-medium text-[1.3rem]">First Name</label>
                <input type="text" id="firstName"  className="bg-slate-100 border border-gray-300  text-sm px-4 py-3 rounded-lg text-black outline-none w-full mt-3" />
              </div>

              <div className="w-full">
                <label htmlFor="lastName" className="text-black font-medium text-[1.3rem]">Last Name</label>
                <input type="text" id="lastName" className="bg-slate-100 border border-gray-300 text-sm px-4 py-3 rounded-lg text-black outline-none w-full mt-3" />
              </div>

              <div className="w-full">
                  <label htmlFor="gender" className="text-black font-medium text-[1.3rem] mt-3">Gender</label>
                  <div className="relative mt-3">
                    <select id="gender" className="block appearance-none w-full bg-slate-100 border border-gray-300 text-black py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value="" disabled selected>Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-6 me-2">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                  </svg>

                    </div>
                  </div>
              </div>


              <div className="w-full">
                <label htmlFor="email" className="text-black font-medium text-[1.3rem]">Email</label>
                    <input type="email" id="email" className="bg-slate-100 border border-gray-300 text-sm px-4 py-3 rounded-lg text-black outline-none w-full mt-3" />
              </div>
            
            <div className="w-full">
              <label htmlFor="password" className="text-black font-medium text-[1.3rem]">Password</label>
                <input type="password" id="password" className="bg-slate-100 border border-gray-300 text-sm px-4 py-3 rounded-lg text-black outline-none w-full mt-3" />
            </div>

              <div className="w-full">
                <label htmlFor="confirmPassword" className="text-black font-medium text-[1.3rem]">Confirm Password</label>
                <input type="password" id="confirmPassword" className="bg-slate-100 border border-gray-300 text-sm px-4 py-3 rounded-lg text-black outline-none w-full mt-3" />
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
  );
};

export default SignUp;
