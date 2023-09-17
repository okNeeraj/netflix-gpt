import LOGO_RED from '../assets/ngpt-red-300x71.png';
import LOGO_WHITE from '../assets/ngpt-white-300x71.png';

const Navbar = () => {
	return (
		<div className="px-4 py-2 flex items-center bg-slate-900 text-white">
			<div className='ff'>
				<div className="w-48">
					<img src={LOGO_RED} alt='logo' />
				</div>
			</div>
			<div className="flex gap-4 ml-4 text-gray-300 text-sm">
				<a href={'/'} className='hover:text-gray-50'>Home</a>
				<a href={'/'} className='hover:text-gray-50'>Browse</a>
			</div>
			<div className="ml-auto">
				<a href={'./login'} className='hover:text-gray-50'>Login</a>
			</div>
		</div>
	)
}

export default Navbar;
