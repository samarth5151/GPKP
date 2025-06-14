import React, { useState } from 'react';
import './QuestionPapers.css';

const questionPapersData = {
  "Civil Engineering": [
    "Civil Summer 2016",
    "Civil Winter 2018",
    "Civil Summer 2019",
    "Civil Winter 2019",
    "Civil 2022",
    "Civil Summer 2023",
    "Civil Winter 2023",
    "Civil Summer 2024"
  ],
  "E&TC Engineering": [
    "E&TC Summer 2016",
    "E&TC Winter 2018",
    "E&TC Summer 2019",
    "E&TC 2022"
  ],
  "Electrical Engineering": [
    "Electrical Summer 2016",
    "Electrical Winter 2018",
    "Electrical Summer 2019",
    "Electrical 2022"
  ],
  "IE Department": [
    "IE Summer 2016"
  ],
  "Metallurgy Engineering": [
    "Metallurgy Summer 2016",
    "Metallurgy Winter 2018",
    "Metallurgy Winter 2019",
    "Metallurgy Summer 2019",
    "Metallurgy 2022"
  ],
  "Information Technology": [
    "IT Summer 2016",
    "IT Winter 2016",
    "IT Winter 2018",
    "IT Summer 2019",
    "IT 2022"
  ],
  "Mechanical Engineering": [
    "Mechanical Winter 2016",
    "Mechanical Summer 2016",
    "Mechanical Winter 2016",
    "Mechanical Winter 2016",
    "Mechanical Winter 2018",
    "Mechanical Winter 2019",
    "Mechanical Summer 2019",
    "Mechanical 2022"
  ],
  "Sugar Technology": [
    "Sugar Winter 2016",
    "Sugar Summer 2016",
    "Sugar Winter 2016",
    "Sugar Winter 2019",
    "Sugar Summer 2019"
  ]
};

const QuestionPapers = () => {
  const [openDepartments, setOpenDepartments] = useState({});

  const toggleDepartment = (dept) => {
    setOpenDepartments((prev) => ({
      ...prev,
      [dept]: !prev[dept]
    }));
  };

  return (
    <div className="question-papers-container">
      <h1 className="page-title">Previous Year Question Papers</h1>
      <div className="department-list">
        {Object.entries(questionPapersData).map(([dept, papers], index) => (
          <div key={index} className="department-block">
            <div
              className="department-header"
              onClick={() => toggleDepartment(dept)}
            >
              <span className="toggle-icon">
                {openDepartments[dept] ? "−" : "+"}
              </span>
              <span className="department-name">{dept}</span>
            </div>
            {openDepartments[dept] && (
              <ul className="paper-list">
                {papers.map((paper, i) => {
                  const filename = paper.toLowerCase().replace(/\s+/g, "-") + ".pdf";
                  return (
                    <li key={i}>
                      <span>{paper}</span>
                      <a
                        href={`/pdfs/question-papers/${filename}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-button"
                        download
                      >
                        Download
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionPapers;
