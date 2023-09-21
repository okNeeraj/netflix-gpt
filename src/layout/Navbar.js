import { Link } from 'react-router-dom';
import { LOGO_RED } from '../utils/constants';
import { PAGE } from '../router/routes';

const Navbar = () => {
  return (
    <div className="px-4 py-2 flex items-center bg-slate-900 text-white">
      <div className='ff'>
        <div className="w-48">
          <img src={LOGO_RED} alt='logo' />
        </div>
      </div>
      <div className="flex gap-4 ml-4 text-gray-300 text-sm">
        <Link to={PAGE.HOME} className='hover:text-gray-50'>Home</Link>
        <Link to={PAGE.BROWSE} className='hover:text-gray-50'>Browse</Link>
      </div>
      <div className="ml-auto">
        <Link to={PAGE.SIGNIN}>Sign In</Link>
      </div>
    </div>
  )
}

export default Navbar;
