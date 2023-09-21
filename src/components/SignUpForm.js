import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { PAGE } from "../router/routes";
import validate from "../validator/validate";

const SignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const emailPhone = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const handleSignUp = () => {
    const isValid = validate(
      emailPhone.current.value,
      password.current.value,
      confirmPassword.current.value
    );
    setErrorMessage(isValid);
    if (isValid === true) {
      console.log('signup success');
      console.log(emailPhone.current.value)
      console.log(password.current.value)
    }
  }

  return (
    <div className='bg-black/70 w-full sm:w-[450px] m-auto px-6 md:px-16 py-8 md:py-12 mx-4 sm:mx-auto flex items-center rounded-lg'>
      <div className="w-full">
        <h1 className="mb-5 text-white text-3xl">Sign Up</h1>
        <div className="mb-2 text-white">
          <input type="text" ref={emailPhone} placeholder="Email or Phone Number" className={`px-4 py-4 w-full bg-[#333] border-b-2 rounded-[4px] focus:bg-[#4d4c4c] focus-visible:outline-none text-sm ${errorMessage?.emailPhone ? 'border-[#e87c03]' : 'border-transparent'}`} />
          <div className="error px-1 py-2 text-[#e87c03] text-xs">{errorMessage?.emailPhone}</div>
        </div>
        <div className="mb-2 text-white">
          <input type="password" ref={password} placeholder="Set Password" className={`px-4 py-4 w-full bg-[#333] border-b-2 rounded-[4px] focus:bg-[#4d4c4c] focus-visible:outline-none text-sm ${errorMessage?.password ? 'border-[#e87c03]' : 'border-transparent'}`} />
          <div className="error px-1 py-2 text-[#e87c03] text-xs">{errorMessage?.password}</div>
        </div>
        <div className="mb-2 text-white">
          <input type="password" ref={confirmPassword} placeholder="Confirm Password" className={`px-4 py-4 w-full bg-[#333] border-b-2 rounded-[4px] focus:bg-[#4d4c4c] focus-visible:outline-none text-sm ${errorMessage?.confirmPassword ? 'border-[#e87c03]' : 'border-transparent'}`} />
          <div className="error px-1 py-2 text-[#e87c03] text-xs">{errorMessage?.confirmPassword}</div>
        </div>
        <div className="my-2">
          <button onClick={handleSignUp} className="px-4 py-3 mt-4 bg-red-primary text-white block w-full rounded-[4px]">Sign Up</button>
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
