import React from 'react';
import { Link } from 'react-router-dom';
import './StudentCorner.css';

const studentCornerData = [
  { title: "Academic Calendar", path: "academic-calendar" },
  { title: "Curriculum", path: "curriculum" },
  { title: "First Year Curriculum 2023", path: "first-year-curriculum-2023" },
  { title: "Question Papers", path: "question-papers" },
  { title: "MahaDBT", path: "mahadbt" },
  { title: "VidyaLakshmi Portal", path: "vidyalakshmi-portal" },
  { title: "Exam Malpractice & Punishments", path: "exam-malpractice-punishments" },
  { title: "Our Scholars", path: "our-scholars" },
  { title: "E-Content", path: "e-content" },
  { title: "Video Lectures", path: "video-lectures" }
];

const StudentCorner = () => {
  return (
    <div className="student-corner-container">
      <h1 className="student-corner-title">Student Corner</h1>
      <div className="student-corner-grid">
        {studentCornerData.map((item, index) => (
          <Link key={index} to={`/student-corner/${item.path}`} className="student-corner-card">
            <div className="card-content">
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentCorner;
