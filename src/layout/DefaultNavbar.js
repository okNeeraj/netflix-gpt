import { Link } from "react-router-dom";
import { PAGE } from "../router/routes";
import { LOGO_RED } from "../utils/constants";

const DefaultNavbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full flex items-center justify-between gap-4 px-4 md:px-24 py-3 bg-gradient-to-b from-black">
      <div className="w-36 md:w-48">
        <Link to={PAGE.HOME}>
          <img src={LOGO_RED} className="" alt="NetflixGPT" />
        </Link>
      </div>
      <div className="flex">
        <Link to={PAGE.SIGNIN} className="bg-red-primary px-5 py-1 text-white rounded-sm">
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default DefaultNavbar;
