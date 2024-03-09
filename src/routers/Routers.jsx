// src/router/Routers.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import LoginForm from "../views/Login";
import Retailers from "../views/Retailers";
import Services from "../views/Services";
import TeacherRegistration from "../views/TeacherRegistration";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/retailers" element={<Retailers />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/teacherRegister" element={<TeacherRegistration />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
};

export default Router;
