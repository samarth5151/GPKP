import React from 'react';
import './FirstYearCurriculum2023.css';

const curriculum2023 = [
  { department: "Civil Engineering", file: "civil-engineering.pdf" },
  { department: "Electrical Engineering", file: "electrical-engineering.pdf" },
  { department: "Mechanical Engineering", file: "mechanical-engineering.pdf" },
  { department: "Information Technology", file: "information-technology.pdf" },
  { department: "Electronics and Telecommunication", file: "electronics-telecommunication.pdf" },
  { department: "Metallurgy Engineering", file: "metallurgy-engineering.pdf" },
];

const FirstYearCurriculum2023 = () => {
  return (
    <div className="fy-curriculum-container">
      <h1 className="page-title">First Year Curriculum 2023</h1>
      <div className="table-container">
        <table className="fy-curriculum-table">
          <thead>
            <tr>
              <th>Department Name</th>
              <th>Curriculum</th>
            </tr>
          </thead>
          <tbody>
            {curriculum2023.map((item, index) => (
              <tr key={index}>
                <td>{item.department}</td>
                <td>
                  <a
                    href={`/pdfs/first-year-curriculum/${item.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    📄 View Curriculum
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FirstYearCurriculum2023;
