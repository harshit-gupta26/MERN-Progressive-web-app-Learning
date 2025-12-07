import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this

import {
  FaStar,
  FaUserGraduate,
  FaClock,
  FaBookOpen,
  FaSearch,
  FaLaptopCode,
  FaChartLine,
  FaBullhorn,
  FaPalette,
  FaBriefcase,
  FaBrain,
  FaCloud,
  FaShieldAlt,
  FaThList,
} from "react-icons/fa";
import "./CoursesList.css";

const categoryIcons = {
  "Web Development": <FaLaptopCode />,
  "Data Science": <FaChartLine />,
  "Digital Marketing": <FaBullhorn />,
  Design: <FaPalette />,
  Business: <FaBriefcase />,
  AI: <FaBrain />,
  "Cloud Computing": <FaCloud />,
  Cybersecurity: <FaShieldAlt />,
  All: <FaThList />,
};

const coursesData = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    category: "Web Development",
    level: "Beginner",
    duration: "40 hours",
    price: 0, // ✅ Made this course free
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 2847,
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    id: 2,
    title: "Data Science with Python",
    category: "Data Science",
    level: "Intermediate",
    duration: "60 hours",
    price: 129,
    instructor: "Michael Chen",
    rating: 4.9,
    students: 1923,
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    category: "Digital Marketing",
    level: "Beginner",
    duration: "35 hours",
    price: 79,
    instructor: "Emma Rodriguez",
    rating: 4.7,
    students: 3156,
    image:
      "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    level: "Beginner",
    duration: "45 hours",
    price: 99,
    instructor: "Alex Kim",
    rating: 4.8,
    students: 1654,
    image:
      "https://images.pexels.com/photos/3184439/pexels-photo-3184439.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    title: "Machine Learning Fundamentals",
    category: "Data Science",
    level: "Advanced",
    duration: "55 hours",
    price: 149,
    instructor: "Dr. Lisa Wang",
    rating: 4.9,
    students: 987,
    image:
      "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    title: "Business Strategy & Leadership",
    category: "Business",
    level: "Intermediate",
    duration: "30 hours",
    price: 119,
    instructor: "Robert Thompson",
    rating: 4.6,
    students: 2341,
    image:
      "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  // ✅ New Courses Below
  {
    id: 7,
    title: "Introduction to Artificial Intelligence",
    category: "AI",
    level: "Beginner",
    duration: "25 hours",
    price: 0, // Free Course
    instructor: "John Doe",
    rating: 4.5,
    students: 5023,
    image:
      "https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    title: "Cloud Computing Essentials",
    category: "Cloud Computing",
    level: "Intermediate",
    duration: "50 hours",
    price: 99,
    instructor: "Sophia Patel",
    rating: 4.7,
    students: 1765,
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    title: "Cybersecurity Basics",
    category: "Cybersecurity",
    level: "Beginner",
    duration: "30 hours",
    price: 79,
    instructor: "David Miller",
    rating: 4.6,
    students: 2089,
    image:
      "https://images.pexels.com/photos/5380648/pexels-photo-5380648.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    id: 10,
    title: "Full Stack Python Developer",
    category: "Web Development",
    level: "Advanced",
    duration: "70 hours",
    price: 129,
    instructor: "Alice Williams",
    rating: 4.9,
    students: 1432,
    image:
      "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const CoursesList = () => {
  const navigate = useNavigate(); // ✅ For navigation
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState("lowToHigh");
  const [selectedCourse, setSelectedCourse] = useState(null);

  //✅ Add a state to track enrolled courses
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // ✅ Extract unique categories dynamically
  const categories = ["All", ...new Set(coursesData.map((c) => c.category))];

  // ✅ Filter courses based on search + category
  const filteredCourses = coursesData
    .filter((course) => {
      const matchesCategory =
        activeCategory === "All" || course.category === activeCategory;
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) =>
      sortOption === "lowToHigh" ? a.price - b.price : b.price - a.price
    );

  return (
    <section className="courses-list-section">
      {/* Filter Section */}
      <div className="course-filter-section">
        <div className="filter-container">
          {/* Search Bar */}

          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search courses..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Buttons */}

          <div className="category-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {categoryIcons[cat]} {cat} {/* ✅ Icon + Text */}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Course List Header */}
      <div className="courses-list-header">
        <h2>
          <FaBookOpen className="book-icon" /> {filteredCourses.length} Courses
          Found
        </h2>
        <div className="sort-dropdown">
          <label>Sort by:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* ✅ Courses Grid */}
      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            // <div className="course-card" key={course.id}>
            <div
              className="course-card"
              key={course.id}
              onClick={() => navigate(`/course/${course.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="course-img"
              />
              <div className="course-info">
                {/* Card Button */}

                <div className="course-header">
                  <h3>{course.title}</h3>
                  <span className="course-price">${course.price}</span>
                </div>
                <p className="category">
                  {course.category} • {course.level}
                </p>
                <p className="duration">
                  <FaClock /> {course.duration}
                </p>
                <p className="instructor">by {course.instructor}</p>

                <div className="course-meta">
                  <div className="rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        color={
                          i < Math.round(course.rating) ? "#facc15" : "#e5e7eb"
                        }
                      />
                    ))}
                    <span>{course.rating}</span>
                  </div>
                  <div className="students">
                    <FaUserGraduate /> {course.students.toLocaleString()}{" "}
                    students
                  </div>
                </div>

                <button
                  className="enroll-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent card click
                    setSelectedCourse(course);
                  }}
                  onTouchStart={() => setSelectedCourse(course)} // 👈 adds mobile touch support
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No courses found.</p>
        )}
      </div>

      {/* ✅ Modal Section */}
      {/* ✅ Replace old modal with this new one */}
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
            <p>by {selectedCourse.instructor}</p>

            <div className="modal-buttons">
              <button
                className="cancel-btn"
                onClick={() => setSelectedCourse(null)}
              >
                Cancel
              </button>

              <button
                className="enroll-btn"
                onClick={() => {
                  if (
                    !enrolledCourses.find((c) => c.id === selectedCourse.id)
                  ) {
                    setEnrolledCourses([...enrolledCourses, selectedCourse]);
                    alert(
                      `You have successfully enrolled in ${selectedCourse.title}!`
                    );
                  }
                  setSelectedCourse(null);
                  navigate(`/course/${selectedCourse.id}`); // ✅ Go to course details page
                }}
              >
                {enrolledCourses.find((c) => c.id === selectedCourse.id)
                  ? "Go to Course"
                  : `Enroll Now – $${selectedCourse.price}`}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoursesList;
