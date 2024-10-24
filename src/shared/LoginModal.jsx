// client/src/components/Shared/LoginModal.jsx

import { useState, useEffect, useRef } from "react";
import "./LoginModal.css";
import PropTypes from "prop-types";

const LoginModal = ({ showModal, toggleModal, isLoggedIn, setIsLoggedIn }) => {
  const [isTeacher, setIsTeacher] = useState(true);
  const modalContentRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showModal &&
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target)
      ) {
        toggleModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, toggleModal]);

  if (!showModal) return null;

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  const studentlogout = () => {
    localStorage.removeItem("guardiantoken");
    setIsLoggedIn(false);
  };

  return (
    <div className="login-modal">
      <div className="login-modal-content" ref={modalContentRef}>
        <div className="login-toggle">
          <button
            onClick={() => setIsTeacher(true)}
            className={isTeacher ? "active" : ""}
          >
            Teacher
          </button>
          <button
            onClick={() => setIsTeacher(false)}
            className={!isTeacher ? "active" : ""}
          >
            Student
          </button>
        </div>
        {isTeacher ? (
          <div className="login-btn">
            {isLoggedIn ? (
              <a href="/">
                <i className="ri-logout-box-line"></i>Logout
              </a>
            ) : (
              <a href="/signin" onClick={logout}>
                <i className="ri-login-box-line"></i>Login as Teacher
              </a>
            )}
          </div>
        ) : (
          <div className="login-btn">
            {isLoggedIn ? (
              <a href="/" onClick={studentlogout}>
                <i className="ri-logout-box-line"></i>Logout
              </a>
            ) : (
              <a href="/guardian-signin">
                <i className="ri-login-box-line"></i>Login as Student
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

LoginModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginModal;
