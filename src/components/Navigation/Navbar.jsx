import { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import LoginModal from '../../shared/LoginModal'
import HamburgerMenu from "./HamburgerMenu";

import "./navbar.css";

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/team",
    display: "Team",
  },
  {
    path: "/blog",
    display: "Blog",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  });

  return (
    <header className="header py-3" ref={headerRef}>
      <div className="container">
        <div className="navbar">
          {/* ===============LOGO============= */}
          <div className="logo" ref={headerRef}>
            <a href="/">Tutor</a>
          </div>
          {/* ===============MENU============= */}
          <div className="navigation" ref={menuRef}>
            <div className="nav_items">
              <ul className="nav_links" ref={navRef}>
                {nav_links.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "active_link" : ""
                    }
                  >
                    <li className="nav_item">{item.display}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>

          <div className="">
            <button className="loginBtn" onClick={toggleModal}>
              Join Us
            </button>

            {/* <LoginModal showModal={showModal} toggleModal={toggleModal}/> */}
            <span onClick={toggleMenu} className="hamburger-icon">
              <i className="ri-menu-line"></i>
            </span>
            <HamburgerMenu showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
