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
    <header className="header" ref={headerRef}>
      <nav className="navbar">
        <div className="container-fluid">
          {/* ===============LOGO============= */}
          <div className="logo" ref={headerRef}>
            <a href="/">Tutor</a>
          </div>
          {/* ===============MENU============= */}
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
            <div>
              <button className="loginBtn" onClick={toggleModal}>
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="">
          {/* <LoginModal showModal={showModal} toggleModal={toggleModal}/> */}
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
