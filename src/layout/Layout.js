import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
	return (
		<>
			<Navbar />
			<main className="page-body">
				{props.children}
			</main>
			<Footer />
		</>
	)
}

export default Layout;
