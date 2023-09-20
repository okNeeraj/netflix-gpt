import SignUpForm from "../components/SignUpForm";
import { POSTER_BG } from "../utils/constants";

const Registration = () => {
  return (
    <div className="relative text-gray-500 min-h-screen">
      <div className="absolute -z-[1] min-h-screenf h-full">
        <img src={POSTER_BG} alt="NetflixGPT" className="w-screen h-full object-cover" />
      </div>
      <div className="flex items-center min-h-screen bg-black/60">
        <SignUpForm />
      </div>
    </div>
  )
}

export default Registration;
