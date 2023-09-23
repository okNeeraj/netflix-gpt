import { Link } from 'react-router-dom';
import { AVATAR_RED, LOGO_RED } from '../utils/constants';
import { PAGE } from '../router/routes';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../stores/userSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setProfilePhoto(user?.photoURL || AVATAR_RED)
  }, [user])

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser())
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  const handlerDropDown = () => {
    setIsOpen(!isOpen)
  }
  if (!user) return;

  return (
    <div className="fixed w-full z-40 px-4 py-3 flex items-center bg-gradient-to-b from-black text-white">
      <div className='mr-14'>
        <div className="w-48">
          <Link to={PAGE.BROWSE}>
            <img src={LOGO_RED} alt='logo' />
          </Link>
        </div>
      </div>
      <div className="flex gap-10 ml-4 text-gray-400 text-sm">
        <Link to={PAGE.BROWSE} className='hover:text-gray-50'>Home</Link>
        <Link to={PAGE.BROWSE} className='hover:text-gray-50'>TV Show</Link>
        <Link to={PAGE.BROWSE} className='hover:text-gray-50'>Movies</Link>
        <Link to={PAGE.BROWSE} className='hover:text-gray-50'>New & Popular</Link>
        <Link to={PAGE.BROWSE} className='hover:text-gray-50'>My List</Link>
        <Link to={PAGE.BROWSE} className='hover:text-gray-50'>Browse by Language</Link>
      </div>
      <div className="ml-auto">
        <div className="profile-dropdown relative" ref={dropdownRef}>
          <div className="flex items-center gap-3 cursor-pointer" onClick={handlerDropDown}>
            <div className="thumb w-8 h-8 bg-gray-800">
              <img src={profilePhoto} alt={user.displayName} />
            </div>
            <div className="text-sm">{user.displayName}</div>
          </div>
          {isOpen &&
            <div className="bg-black/70 absolute z-50 right-0 top-10 min-w-[170px] pt-2 border border-slate-900 rounded-md">
              <a href='#!' className='flex items-center px-4 py-2 gap-3 text-xs text-slate-500 hover:text-white'>
                <div className="w-5 h-5 bg-cyan-500"></div>
                <div className='title'>Neeraj</div>
              </a>
              <a href='#!' className='flex items-center px-4 py-2 gap-3 text-xs text-slate-500 hover:text-white'>
                <div className="w-5 h-5 bg-green-500"></div>
                <div className='title'>Child</div>
              </a>
              <Link to={PAGE.PROFILE} className='flex items-center px-4 py-2 gap-3 text-xs text-slate-500 hover:text-white'>
                <div className="w-5 h-5 bg-gray-700"></div>
                <div className='title'>Manage Profile</div>
              </Link>
              <div className="px-2 gap-3 text-xs text-slate-300 flex justify-center items-center border-t border-slate-800 mt-4 hover:text-white">
                <button className='p-3' onClick={handleSignOut} > Sign Out</button>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;
