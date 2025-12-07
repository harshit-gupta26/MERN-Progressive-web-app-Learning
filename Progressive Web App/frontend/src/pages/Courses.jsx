import React from "react";
import CoursesHeader from "./components/CoursesHeader";
import CoursesList from "./CoursesList";
import Footer from "../components/Footer";

const Courses = () => {
  return (
    <div>
      <CoursesHeader />
      <CoursesList />
      <Footer /> 
    </div>
  );
};

export default Courses;
