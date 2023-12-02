import { Link, useNavigate } from 'react-router-dom';
import { AVATAR_RED, LOGO_RED, BACKDROP, BASE_URL } from '../utils/constants';
import { PAGE } from '../router/routes';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../stores/userSlice';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(true);
  const [navbarOpacity, setNavbarOpacity] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(store => store.user)

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 768);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = 75;

    const opacity = Math.min((scrollPosition / maxScroll) * 90 + 0, 100);
    setNavbarOpacity(opacity);

    if (scrollPosition < maxScroll) {
      setShowNavList(true)
    } else {
      setShowNavList(false)
    }

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
    <>
      <div className={`navbar ${showNavList && !isLargeScreen ? 'h-[115px]' : 'h-[70px]'} backdrop-blur-xl md:backdrop-blur-none fixed top-0 w-full px-4 md:px-12 py-3 text-white ${!isLargeScreen && 'ddd'}`} style={{
        zIndex: 9999999,
        backgroundColor: !isLargeScreen && 'rgba(0, 0, 0, 0.5)',
        // backdropFilter: isLargeScreen ? 'blur(0)' : `blur(${navbarOpacity}px) contrast(60%)`,
        // WebkitBackdropFilter: isLargeScreen ? 'blur(0)' : `blur(${navbarOpacity}px) contrast(60%)`,
        backgroundImage: isLargeScreen ? `linear-gradient(180deg, #141414 ${navbarOpacity}%,transparent)` : `url(${BACKDROP})`
      }}>

        <div className='flex items-center'>
          <div className='md:mr-14'>
            <div className="w-40 md:w-48">
              <Link to={PAGE.BROWSE}>
                <img src={LOGO_RED} className='w-full' alt='logo' />
              </Link>
            </div>
          </div>
          <div className="gap-6 ml-4 text-white text-sm hidden md:flex">
            <Link to={PAGE.BROWSE} className='hover:text-gray-400'>Home</Link>
            <Link to={PAGE.SHOWS} className='hover:text-gray-400'>TV Show</Link>
            <Link to={PAGE.MOVIES} className='hover:text-gray-400'>Movies</Link>
            <Link to={PAGE.LATEST} className='hover:text-gray-400'>New & Popular</Link>
          </div>
          <div className="gap-6 ml-auto flex items-center">
            <Link to={PAGE.SEARCH} className='hover:text-gray-400 flex gap-2 items-center'>
              {/* <span className='icon-line text-[24px]'>search</span> */}
              <SearchOutlinedIcon style={{ fontSize: '28px' }} />
              <span className="hidden lg:block">Search</span>
            </Link>
            <div className="profile-dropdown relative" ref={dropdownRef}>
              <div className="flex items-center gap-3 cursor-pointer" onClick={handlerDropDown}>
                <div className="thumb aspect-square w-8 h-8 bg-gray-800">
                  <img src={`${BASE_URL}/${profilePhoto}`} alt={user.displayName} />
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
        <div
          className="gap-4 text-white text-sm flex md:hidden overflow-auto py-3 mt-3 absolute left-4 right-4 bottom-[-4px]"
          style={{
            transition: '0.5s',
            transform: showNavList && !isLargeScreen ? 'translateY(0px)' : 'translateY(-120px) scale(0.8)',
            opacity: showNavList && !isLargeScreen ? '' : '0'
          }}
        >
          <Link to={PAGE.BROWSE} className='hover:text-gray-400 text-center text-xs border-solid border py-1 px-3 rounded-[50px] border-gray-400'>Home</Link>
          <Link to={PAGE.SHOWS} className='hover:text-gray-400 text-center min-w-[78px] text-xs border-solid border py-1 px-3 rounded-[50px] border-gray-400'>TV Show</Link>
          <Link to={PAGE.MOVIES} className='hover:text-gray-400 text-center text-xs border-solid border py-1 px-3 rounded-[50px] border-gray-400'>Movies</Link>
          <Link to={PAGE.LATEST} className='hover:text-gray-400 text-center min-w-[115px] text-xs border-solid border py-1 px-3 rounded-[50px] border-gray-400'>New & Popular</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;
