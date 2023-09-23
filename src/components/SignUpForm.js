import { useState, useRef } from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import register from "../auth/register";
import { PAGE } from "../router/routes";
import validate from "../validator/validate";
import { addUser } from "../stores/userSlice";
import { AVATAR_RED } from "../utils/constants";
import { auth } from "../services/firebase";

const SignUpForm = () => {
  const [authError, setAuthError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const emailPhone = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    // Client side validation
    const isError = validate(
      emailPhone.current.value,
      password.current.value,
      confirmPassword.current.value
    );
    setErrorMessage(isError);
    if (isError) return;

    // Send provided credential to server for validation
    const userCredential = await register(emailPhone.current.value, password.current.value);
    setAuthError(userCredential?.error?.message);
    if (userCredential?.error) return;

    const { uid, displayName, email, photoURL, phoneNumber } = userCredential.user;
    dispatch(addUser({
      uid: uid,
      displayName: displayName,
      photoURL: photoURL,
      email: email,
      phoneNumber: phoneNumber
    }));
    navigate(PAGE.PROFILE)
  }

  return (
    <div className='bg-black/70 w-full sm:w-[450px] m-auto px-6 md:px-16 py-8 md:py-12 mx-4 sm:mx-auto flex items-center rounded-lg'>
      <div className="w-full">
        <h1 className="mb-5 text-white text-3xl">Sign Up</h1>
        {authError && (
          <div className="p-3 bg-[#e87c03] text-white text-xs rounded-md mb-5">{authError}</div>
        )}
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
