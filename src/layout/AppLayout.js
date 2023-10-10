import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { PAGE } from "../router/routes";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  const isWatchPage = pathname.startsWith(PAGE.WATCH);

  return (
    <>
      <Navbar />
      <main className={`page-body min-h-screen text-gray-500 ${isWatchPage ? '' : 'pt-[70px]'}`}>
        {children}
      </main>
      {!isWatchPage && <Footer />}
    </>
  );
};

export default AppLayout;
