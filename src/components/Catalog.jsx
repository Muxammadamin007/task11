
import React, { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Web Programming",
    category: "Web programming",
    seats: 12,
  },
  {
    id: 2,
    title: "Special Topics",
    category: "Special topics",
    seats: 8,
  },
  {
    id: 3,
    title: "20-Minute Literary Journey",
    category: "20-minute literary journey",
    seats: 5,
  },
  {
    id: 4,
    title: "Discrete Math",
    category: "Discrete math",
    seats: 14,
  },
  {
    id: 5,
    title: "Football",
    category: "Football",
    seats: 20,
  },
];

const categories = [
  "All",
  "Web programming",
  "Special topics",
  "20-minute literary journey",
  "Discrete math",
  "Football",
];

function Catalog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const [savedCourses, setSavedCourses] = useState([1, 3]);

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter(
          (course) => course.category === activeCategory
        );

  const toggleSave = (id) => {
    setSavedCourses((previous) =>
      previous.includes(id)
        ? previous.filter((courseId) => courseId !== id)
        : [...previous, id]
    );
  };

  return (
    <div className="Catalog">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #0b0e15;
          font-family: Arial, Helvetica, sans-serif;
          color: #f5f6fa;
        }

        .Catalog {
          min-height: 100vh;
          padding: 24px;
          background: #020b21;
        }

        .catalog-container {
          max-width: 1250px;
          margin: 0 auto;
          padding: 28px 22px 20px;
          background: #666768;
          border: 1px solid #2b487e;
          border-radius: 20px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
          gap: 15px;
        }

        .header h1 {
          font-size: 36px;
          font-weight: 800;
          letter-spacing: -1.5px;
          color: #f7f7fb;
        }

        .counter {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border: 1px solid #359b7e;
          border-radius: 30px;
          background: #19342f;
          color: #cde667;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
        }

        .counter-dot {
          width: 10px;
          height: 10px;
          background: #7074e7;
          border-radius: 50%;
        }

        .catalog-content {
          padding: 22px;
          background: #0d131d;
          border: 1px solid #091732;
          border-radius: 20px;
        }

        .categories {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 15px;
        }

        .category-button {
          padding: 12px 14px;
          background: #151c28;
          color: #f0f1f7;
          border: 1px solid #3a4558;
          border-radius: 13px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .category-button:hover {
          border-color: #56d8b0;
          color: #74e8c0;
        }

        .category-button.active {
          background: #193b37;
          border-color: #4bb99a;
          color: #ffffff;
        }

        .course-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .course-card {
          min-height: 87px;
          padding: 16px 17px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          background: #111820;
          border: 1px solid #394456;
          border-radius: 16px;
          transition: border-color 0.2s ease;
        }

        .course-card:hover {
          border-color: #59c9a8;
        }

        .course-details h2 {
          color: #f5f6fa;
          font-size: 18px;
          font-weight: 750;
          margin-bottom: 5px;
        }

        .course-details p {
          color: #a9bce4;
          font-size: 16px;
        }

        .save-button {
          min-width: 68px;
          padding: 13px 15px;
          border: 1px solid #394456;
          border-radius: 13px;
          background: #111820;
          color: #f5f6fa;
          font-size: 16px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .save-button:hover {
          border-color: #65dcb9;
        }

        .save-button.saved {
          background: linear-gradient(
            135deg,
            #5bd7b8,
            #91e7ca
          );
          color: #071b17;
          border-color: transparent;
          font-weight: 750;
        }

        .empty-state {
          text-align: center;
          padding: 40px 15px;
          color: #a9bce4;
          font-size: 16px;
        }

        @media (max-width: 650px) {
          .Catalog {
            padding: 12px;
          }

          .catalog-container {
            padding: 20px 12px;
          }

          .header h1 {
            font-size: 27px;
          }

          .counter {
            padding: 9px 11px;
            font-size: 12px;
          }

          .catalog-content {
            padding: 13px;
          }

          .categories {
            gap: 8px;
          }

          .category-button {
            font-size: 13px;
            padding: 10px 11px;
          }

          .course-card {
            padding: 14px 12px;
            gap: 10px;
          }

          .course-details h2 {
            font-size: 15px;
          }

          .course-details p {
            font-size: 13px;
          }

          .save-button {
            min-width: 62px;
            padding: 11px 10px;
            font-size: 13px;
          }
        }

        @media (max-width: 380px) {
          .header {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>

      <div className="catalog-container">

        {/* Header */}
        <header className="header">
          <h1>Course Catalog</h1>

          <div className="counter">
            <span className="counter-dot"></span>
            {filteredCourses.length} visible
          </div>
        </header>

        {/* Catalog */}
        <main className="catalog-content">

          {/* Category Filters */}
          <div className="categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Course List */}
          <div className="course-list">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => {
                const isSaved = savedCourses.includes(course.id);

                return (
                  <div className="course-card" key={course.id}>

                    <div className="course-details">
                      <h2>{course.title}</h2>

                      <p>
                        {course.category} • {course.seats} seats left
                      </p>
                    </div>

                    <button
                      className={`save-button ${
                        isSaved ? "saved" : ""
                      }`}
                      onClick={() => toggleSave(course.id)}
                    >
                      {isSaved ? "Saved" : "Save"}
                    </button>

                  </div>
                );
              })
            ) : (
              <div className="empty-state">
                No courses found.
              </div>
            )}
          </div>

        </main>
      </div>
    </div>
  );
}

export default Catalog;
