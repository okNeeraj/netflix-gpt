import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="page-body h-screen text-gray-500 pt-[70px]">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default AppLayout;
