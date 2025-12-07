import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaUserGraduate } from "react-icons/fa";
import "./PopularCourses.css";

const courses = [
  {
    title: "Web Development Fundamentals",
    price: 89,
    instructor: "by Sarah Johnson",
    rating: 4.8,
    students: 2847,
    duration: "40 hours",
    level: "Beginner",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Data Science with Python",
    price: 129,
    instructor: "by Michael Chen",
    rating: 4.4,
    students: 1923,
    duration: "55 hours",
    level: "Intermediate",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Digital Marketing Mastery",
    price: 79,
    instructor: "by Emma Rodriguez",
    rating: 3.6,
    students: 3156,
    duration: "35 hours",
    level: "Beginner",
    image:
      "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

];

const PopularCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Helper to render stars dynamically
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star-icon filled" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star-icon half" />);
    }

    const emptyStars = totalStars - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star-icon empty" />);
    }

    return stars;
  };

  return (
    <section className="popular-courses-section">
      <h2>Popular Courses</h2>
      <p  style={{
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    maxWidth: "700px",
    margin: "10px auto 30px auto",
    color: "#444",
    lineHeight: "1.6",
    fontSize: "1.1rem",
  }}
      >
        Discover our most popular courses that have helped thousands of students achieve their goals
      </p>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-header">
              <h3>{course.title}</h3>
              <span className="course-price">${course.price}</span>
            </div>
            <p className="course-instructor">{course.instructor}</p>
            <div className="course-stats">
              <span className="course-rating">
                {renderStars(course.rating)}
                <span className="rating-value">{course.rating.toFixed(1)}</span>
              </span>
              <span className="course-students">
                <FaUserGraduate className="student-icon" /> {course.students} students
              </span>
            </div>
            <button
              className="enroll-btn"
              onClick={() => setSelectedCourse(course)}
            >
              Enroll Now
            </button>


         
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Enroll in Course</h2>
            <img
              src={selectedCourse.image}
              alt={selectedCourse.title}
              className="modal-image"
            />
            <h3>{selectedCourse.title}</h3>
            <p>{selectedCourse.instructor}</p>

            <div className="modal-details">
              <p><strong>Price:</strong> ${selectedCourse.price}</p>
              <p><strong>Rating:</strong> {renderStars(selectedCourse.rating)} ({selectedCourse.rating})</p>
              <p><strong>Duration:</strong> {selectedCourse.duration}</p>
              <p><strong>Level:</strong> {selectedCourse.level}</p>
              <p><strong>Enrolled:</strong> {selectedCourse.students} students</p>
            </div>

            <div className="modal-buttons">
              <button className="cancel-btn" onClick={() => setSelectedCourse(null)}>
                Cancel
              </button>
              <button className="confirm-btn">
                Enroll Now – ${selectedCourse.price}
              </button>


            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularCourses;
