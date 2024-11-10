// src/CoursesPage.js
import React from 'react';
import './styles.css'; // Import your CSS file

function CoursesPage() {
  return (
    <div>
      <header>
        <h1>Available Courses</h1>
        <div className="filter-bar">
          <select>
            <option value="">All Categories</option>
            <option value="programming">Programming</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
          </select>
          <select>
            <option value="">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </header>
      <main className="course-grid">
        {/* Add your course cards here */}
        <div className="course-card">
          <h3>Frontend Development</h3>
          <p>Learn HTML, CSS, and JavaScript to build websites.</p>
          <span>Duration: 8 weeks</span>
          <button>Learn More</button>
        </div>
        {/* Repeat similar course cards as needed */}
      </main>
    </div>
  );
}

export default CoursesPage;
