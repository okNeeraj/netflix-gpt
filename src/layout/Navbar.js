import { Link, useNavigate } from 'react-router-dom';
import { AVATAR_RED, LOGO_RED } from '../utils/constants';
import { PAGE } from '../router/routes';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../stores/userSlice';

const Navbar = () => {
  const [navbarOpacity, setNavbarOpacity] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = 75; // Adjust this based on your specific needs

    // Calculate the opacity based on the scroll position
    const opacity = Math.min((scrollPosition / maxScroll) * 90 + 10, 100);

    setNavbarOpacity(opacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setProfilePhoto(user?.photoURL || AVATAR_RED)
  }, [user]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser())
      navigate(PAGE.HOME)
    }).catch((error) => {
    });
  }
  const handlerDropDown = () => {
    setIsOpen(!isOpen)
  }

  if (!user) return;

  return (
    <div className={`bg-gradient-to-bF from-blackF fixed w-full px-4 md:px-12 py-3 flex items-center text-white`} style={{ zIndex: 9999, backgroundImage: `linear-gradient(180deg,#141414 ${navbarOpacity}%,transparent)` }}>
      <div className='md:mr-14'>
        <div className="w-48">
          <Link to={PAGE.BROWSE}>
            <img src={LOGO_RED} className='w-full' alt='logo' />
          </Link>
        </div>
      </div>
      <div className="gap-6 ml-4 text-white text-sm hidden md:flex">
        <Link to={PAGE.BROWSE} className='hover:text-gray-400'>Home</Link>
        <Link to={PAGE.BROWSE} className='hover:text-gray-400'>TV Show</Link>
        <Link to={PAGE.BROWSE} className='hover:text-gray-400'>Movies</Link>
        <Link to={PAGE.BROWSE} className='hover:text-gray-400'>New & Popular</Link>
      </div>
      <div className="gap-6 ml-auto flex items-center">
        <Link to={PAGE.SEARCH} className='hover:text-gray-400 flex gap-2 items-center'>
          <span className='icon-line text-[24px]'>search</span>
          <span className="hidden lg:block">Search</span>
        </Link>
        <div className="profile-dropdown relative" ref={dropdownRef}>
          <div className="flex items-center gap-3 cursor-pointer" onClick={handlerDropDown}>
            <div className="thumb w-8 h-8 bg-gray-800">
              <img src={profilePhoto} alt={user.displayName} />
            </div>
            <div className="text-sm hidden lg:block">{user.displayName}</div>
          </div>
          {isOpen &&
            <div className="bg-black/95 absolute z-50 right-0 top-10 min-w-[170px] pt-2 border border-gray-900 rounded-md">
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
              <div className="px-2 gap-3 text-xs text-slate-300 flex justify-center items-center border-t border-gray-700 mt-4 hover:text-white">
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
