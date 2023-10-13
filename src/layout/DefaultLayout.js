import DefaultNavbar from "./DefaultNavbar";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <DefaultNavbar />
      <main className="page-body min-h-screen text-gray-500">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout;
