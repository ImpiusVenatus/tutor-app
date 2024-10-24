// src/router/Routers.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/Home";
import TeacherRegistration from "../views/TeacherRegistration";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import FindInstructors from "../views/FindInstructors";
import InstructorDetails from "../views/InstructorDetails";
import JobList from "../views/JobList";
import JobDetail from "../shared/JobDetail";
import LoginSelect from "../views/LoginSelect";
import GuardianProfile from "../views/GuardianProfile";
import GuardianSignIn from "../views/GuardianSignIn";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/find-instructors" element={<FindInstructors />} />
      <Route path="/teacherRegister" element={<TeacherRegistration />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/instructor/:id" element={<InstructorDetails />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/jobs/:jobId" element={<JobDetail />} />
      <Route path="/login-choice" element={<LoginSelect />} />
      <Route path="/profile" element={<GuardianProfile />} />
      <Route path="/guardian-signin" element={<GuardianSignIn />} />
    </Routes>
  );
};

export default Router;
