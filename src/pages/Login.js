import { Link } from 'react-router-dom';
import { LOGO_RED, POSTER_BG } from "../utils/constants";

const Login = () => {
  return (
    <div className="relative text-gray-600">
      <img src={LOGO_RED} className="absolute left-4 top-4 w-52" alt="NetflixGPT" />
      <div className="absolute -z-[1] min-h-screen">
        <img src={POSTER_BG} alt="NetflixGPT" className="w-screen min-h-full" />
      </div>
      <div className="flex items-center min-h-screen bg-black/70">
        <div className="bg-black/90 md:w-3/12 m-auto px-14 pt-12 pb-10 mt-20">
          <h1 className="mb-5 text-white">Sign In</h1>
          <div className="mb-4 text-white">
            <input type="text" placeholder="Email or Phone Number" className="px-4 py-3 w-full bg-[#333] rounded-[4px] focus:bg-[#4d4c4c] focus-visible:outline-none text-xs" />
          </div>
          <div className="mb-2 text-white">
            <input type="text" placeholder="Email or Phone Number" className="px-4 py-3 w-full bg-[#333] rounded-[4px] focus:bg-[#4d4c4c] focus-visible:outline-none text-xs" />
          </div>
          <div className="my-2">
            <button className="px-4 py-2 mt-8 bg-red-700 text-white block w-full rounded-[4px]">Sign In</button>
          </div>
          <div className="text-md mt-8">
            New to NetflixGPT? <Link to={'/registration'} className='text-white ms-2 hover:underline'>Sign up now</Link>.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
