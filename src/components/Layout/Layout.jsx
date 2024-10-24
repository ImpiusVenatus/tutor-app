import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const hideForPaths = [
    "/login",
    "/register",
    "/signin",
    "/signup",
    "/guardian-signin",
  ];

  const showNavbarAndFooter = !hideForPaths.includes(location.pathname);

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <Routers />
      {showNavbarAndFooter && <Footer />}
    </>
  );
};

export default Layout;
