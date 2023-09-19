import { Link } from 'react-router-dom';
import { LOGO_RED } from '../utils/constants';

const Navbar = () => {
  return (
    <div className="px-4 py-2 flex items-center bg-slate-900 text-white">
      <div className='ff'>
        <div className="w-48">
          <img src={LOGO_RED} alt='logo' />
        </div>
      </div>
      <div className="flex gap-4 ml-4 text-gray-300 text-sm">
        <Link to={'/'} className='hover:text-gray-50'>Home</Link>
        <Link to={'/browse'} className='hover:text-gray-50'>Browse</Link>
      </div>
      <div className="ml-auto">
        <Link to={'/login'}>Login</Link>
      </div>
    </div>
  )
}

export default Navbar;
