import "../styles/LoginSelect.css";

const LoginSelect = () => {
  return (
    <div className="login-select">
      <div className="select-btn">
        <a href="/signin">Continue as an instructor</a>
      </div>
      <div className="select-btn">
        <a>Continue as a guardian/student</a>
      </div>
    </div>
  );
};

export default LoginSelect;
