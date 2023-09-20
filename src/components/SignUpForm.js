import { Link } from "react-router-dom";
import { PAGE } from "../router/routes";

const SignUpForm = () => {
  return (
    <div className='bg-black/70 w-full sm:w-[450px] m-auto px-6 md:px-16 py-8 md:py-12 mx-4 sm:mx-auto flex items-center rounded-lg'>
      <div className="w-full">
        <h1 className="mb-5 text-white text-3xl">Sign Up</h1>
        <div className="mb-4 text-white">
          <input type="text" placeholder="Email or Phone Number" className="px-4 py-4 w-full bg-[#333] rounded-[4px] focus:bg-[#4d4c4c] focus-visible:outline-none text-sm" />
        </div>
        <div className="mb-4 text-white">
          <input type="password" placeholder="Set Password" className="px-4 py-4 w-full bg-[#333] rounded-[4px] focus:bg-[#4d4c4c] focus-visible:outline-none text-sm" />
        </div>
        <div className="mb-2 text-white">
          <input type="password" placeholder="Confirm Password" className="px-4 py-4 w-full bg-[#333] rounded-[4px] focus:bg-[#4d4c4c] focus-visible:outline-none text-sm" />
        </div>
        <div className="my-2">
          <button className="px-4 py-3 mt-8 bg-red-primary text-white block w-full rounded-[4px]">Sign Up</button>
        </div>
        <div className="text-md mt-8 flex items-center gap-2">
          <span className='text-sm'>
            Already have an Account?
          </span>
          <Link to={PAGE.SIGNIN} className='text-white text-sm hover:underline'>Sign in now</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm;
