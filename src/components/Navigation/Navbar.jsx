import { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import LoginModal from '../../shared/LoginModal'
import HamburgerMenu from "./HamburgerMenu";
import logo from "../../assets/images/logo/logo.png";
import LoginModal from "../../shared/LoginModal";

import "./navbar.css";

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/jobs",
    display: "Jobs",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleModal = (e) => {
    if (e) e.preventDefault();
    setShowModal(!showModal);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const guardianToken = localStorage.getItem("guardiantoken");
    setIsLoggedIn(!!token || !!guardianToken);

    const stickyHeaderFunc = () => {
      window.addEventListener("scroll", () => {
        if (
          headerRef.current &&
          (document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80)
        ) {
          headerRef.current.classList.add("sticky_header");
          menuRef.current.classList.add("sticky_header_link");
        } else if (headerRef.current) {
          headerRef.current.classList.remove("sticky_header");
          menuRef.current.classList.remove("sticky_header_link");
        }
      });
    };

    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="logo" ref={headerRef}>
            <a href="/">
              <img src={logo} alt="logo"></img>
            </a>
          </div>
          <div className="navigation" ref={menuRef}>
            <div className="nav_items">
              <ul className="nav_links" ref={navRef}>
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {!isLoggedIn ? (
              <a href="#" className="login" onClick={toggleModal}>
                Login
              </a>
            ) : (
              <a href="#" className="avatar" onClick={toggleModal}>
                <i className="ri-user-fill"></i>
              </a>
            )}
            {showModal && (
              <LoginModal
                showModal={showModal}
                toggleModal={toggleModal}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            )}
            <div>
              <a href="/find-instructors" className="loginBtn">
                Find Tutor
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <span onClick={toggleMenu} className="hamburger-icon">
            <i className="ri-menu-line"></i>
          </span>
          <HamburgerMenu showMenu={showMenu} toggleMenu={toggleMenu} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
