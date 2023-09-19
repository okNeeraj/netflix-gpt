import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="page-body h-screen text-gray-400">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;
