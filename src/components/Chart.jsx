
import React, { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Complete Web Development",
    category: "Development",
    instructor: "John Smith",
    level: "Beginner",
    duration: "12 Weeks",
    rating: "4.9",
    price: "$49",
    icon: "💻",
    color: "#e0edff",
    description: "Learn HTML, CSS, JavaScript and build modern websites."
  },
  {
    id: 2,
    title: "Python Programming",
    category: "Programming",
    instructor: "Sarah Johnson",
    level: "Beginner",
    duration: "8 Weeks",
    rating: "4.8",
    price: "$39",
    icon: "🐍",
    color: "#fff0d9",
    description: "Understand Python fundamentals and practical coding."
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    category: "Design",
    instructor: "Michael Brown",
    level: "Intermediate",
    duration: "6 Weeks",
    rating: "4.7",
    price: "$45",
    icon: "🎨",
    color: "#f2e5ff",
    description: "Create beautiful interfaces and user-friendly experiences."
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    category: "Technology",
    instructor: "David Wilson",
    level: "Advanced",
    duration: "10 Weeks",
    rating: "5.0",
    price: "$59",
    icon: "🤖",
    color: "#e1f7ed",
    description: "Explore machine learning, AI concepts and real Chartlications."
  },
  {
    id: 5,
    title: "React.js for Beginners",
    category: "Development",
    instructor: "Emma Davis",
    level: "Intermediate",
    duration: "7 Weeks",
    rating: "4.9",
    price: "$42",
    icon: "⚛️",
    color: "#e0f7fa",
    description: "Build interactive web Chartlications using React."
  },
  {
    id: 6,
    title: "Digital Marketing",
    category: "Business",
    instructor: "Alex Martin",
    level: "Beginner",
    duration: "5 Weeks",
    rating: "4.6",
    price: "$35",
    icon: "📈",
    color: "#ffe8e8",
    description: "Learn marketing strategies, SEO and social media."
  }
];

const categories = [
  "All",
  "Development",
  "Programming",
  "Design",
  "Technology",
  "Business"
];

function Chart() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      course.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="Chart">
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Arial, sans-serif;
          background: #f5f6fa;
          color: #202433;
        }

        .Chart {
          min-height: 100vh;
        }

        .navbar {
          background: #ffffff;
          padding: 20px 7%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e8eaf0;
        }

        .logo {
          font-size: 23px;
          font-weight: 800;
          color: #5b5ce2;
        }

        .nav-links {
          display: flex;
          gap: 25px;
          color: #626779;
          font-size: 14px;
        }

        .hero {
          text-align: center;
          padding: 65px 20px 45px;
          background: #ffffff;
        }

        .hero span {
          color: #5b5ce2;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 2px;
        }

        .hero h1 {
          font-size: clamp(32px, 5vw, 46px);
          margin: 15px 0;
          color: #202433;
        }

        .hero p {
          color: #777e90;
          font-size: 16px;
          line-height: 1.6;
        }

        .catalog {
          max-width: 1200px;
          margin: auto;
          padding: 45px 25px 70px;
        }

        .catalog-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .catalog-top h2 {
          font-size: 25px;
        }

        .search {
          width: 280px;
          max-width: 100%;
          padding: 13px 16px;
          border: 1px solid #dddfe8;
          border-radius: 10px;
          outline: none;
          font-size: 14px;
          background: white;
        }

        .search:focus {
          border-color: #5b5ce2;
        }

        .categories {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .category-btn {
          border: 1px solid #e0e2eb;
          background: white;
          color: #626779;
          padding: 10px 17px;
          border-radius: 30px;
          cursor: pointer;
          transition: 0.2s;
        }

        .category-btn:hover,
        .category-btn.active {
          background: #5b5ce2;
          border-color: #5b5ce2;
          color: white;
        }

        .course-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .course-card {
          background: white;
          border: 1px solid #eceef3;
          border-radius: 16px;
          overflow: hidden;
          transition: 0.25s;
        }

        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(30, 35, 70, 0.08);
        }

        .course-banner {
          height: 145px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 55px;
        }

        .course-content {
          padding: 22px;
        }

        .course-category {
          color: #5b5ce2;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .course-content h3 {
          font-size: 19px;
          margin: 12px 0 9px;
        }

        .description {
          color: #777e90;
          font-size: 13px;
          line-height: 1.6;
          min-height: 42px;
        }

        .instructor {
          color: #626779;
          font-size: 13px;
          margin: 17px 0;
        }

        .course-info {
          display: flex;
          justify-content: space-between;
          color: #777e90;
          font-size: 12px;
          padding: 13px 0;
          border-top: 1px solid #eeeef2;
          border-bottom: 1px solid #eeeef2;
        }

        .course-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 17px;
        }

        .price {
          font-size: 21px;
          font-weight: bold;
          color: #202433;
        }

        .enroll-btn {
          background: #5b5ce2;
          color: white;
          border: none;
          padding: 11px 17px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }

        .enroll-btn:hover {
          background: #4546c4;
        }

        .empty {
          text-align: center;
          padding: 60px 20px;
          color: #777e90;
          grid-column: 1 / -1;
        }

        .footer {
          background: #202433;
          color: #c6c9d4;
          text-align: center;
          padding: 25px;
          font-size: 13px;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(20, 24, 40, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 10;
        }

        .modal {
          background: white;
          padding: 30px;
          border-radius: 16px;
          width: 100%;
          max-width: 420px;
          position: relative;
        }

        .modal h2 {
          margin-bottom: 15px;
        }

        .modal p {
          color: #777e90;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .close-btn {
          position: absolute;
          right: 18px;
          top: 15px;
          border: none;
          background: none;
          font-size: 25px;
          cursor: pointer;
        }

        @media (max-width: 850px) {
          .course-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .course-grid {
            grid-template-columns: 1fr;
          }

          .navbar {
            padding: 18px 5%;
          }

          .nav-links {
            display: none;
          }

          .catalog-top {
            align-items: stretch;
            flex-direction: column;
          }

          .search {
            width: 100%;
          }

          .hero {
            padding: 45px 18px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">LearnHub.</div>

        <div className="nav-links">
          <span>Home</span>
          <span>Courses</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <span>EXPLORE YOUR POTENTIAL</span>
        <h1>Discover Your Next Course</h1>
        <p>
          Learn new skills, develop your knowledge, and
          take the next step in your career.
        </p>
      </section>

      {/* Course Catalog */}
      <main className="catalog">
        <div className="catalog-top">
          <h2>Explore Courses</h2>

          <input
            className="search"
            type="text"
            placeholder="Search courses or instructors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Filters */}
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="course-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div className="course-card" key={course.id}>
                <div
                  className="course-banner"
                  style={{ background: course.color }}
                >
                  {course.icon}
                </div>

                <div className="course-content">
                  <span className="course-category">
                    {course.category}
                  </span>

                  <h3>{course.title}</h3>

                  <p className="description">
                    {course.description}
                  </p>

                  <p className="instructor">
                    Instructor: {course.instructor}
                  </p>

                  <div className="course-info">
                    <span>📚 {course.level}</span>
                    <span>⏱ {course.duration}</span>
                    <span>⭐ {course.rating}</span>
                  </div>

                  <div className="course-bottom">
                    <span className="price">{course.price}</span>

                    <button
                      className="enroll-btn"
                      onClick={() => setSelectedCourse(course)}
                    >
                      View Course
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty">
              <h3>No courses found</h3>
              <p>Try another keyword or category.</p>
            </div>
          )}
        </div>
      </main>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedCourse(null)}
            >
              ×
            </button>

            <h2>{selectedCourse.title}</h2>

            <p>{selectedCourse.description}</p>

            <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
            <p><strong>Level:</strong> {selectedCourse.level}</p>
            <p><strong>Duration:</strong> {selectedCourse.duration}</p>
            <p><strong>Rating:</strong> ⭐ {selectedCourse.rating}</p>
            <p><strong>Price:</strong> {selectedCourse.price}</p>

            <button
              className="enroll-btn"
              onClick={() => setSelectedCourse(null)}
            >
              Close Details
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        © 2026 LearnHub. All rights reserved.
      </footer>
    </div>
  );
}

export default Chart;
