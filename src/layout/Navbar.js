import { Link, useNavigate } from 'react-router-dom';
import { LOGO_RED } from '../utils/constants';
import { PAGE } from '../router/routes';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className="px-4 py-3 flex items-center bg-black text-white">
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
        Neeraj
        <button className='p-3' onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  )
}

export default Navbar;
