import React from 'react';
import './AcademicCalendar.css';

const academicCalendarData = [
  { name: "FY Academic Calendar 2024-2025", file: "fy-academic-calendar-2024-25.pdf" },
  { name: "FY Induction Program 2024-2025 Students", file: "fy-induction-program-2024-25.pdf" },
  { name: "First Year Student Notice ODD-24-25", file: "fy-student-notice-odd-24-25.pdf" },
  { name: "First Year Student Notice ODD-24-25 (Marathi)", file: "fy-student-notice-odd-24-25-marathi.pdf" },
  { name: "Academic Calendar 2024-2025", file: "academic-calendar-2024-25.pdf" },
  { name: "Amendment in FY Academic Calendar 2023-2024", file: "amendment-fy-academic-calendar-2023-24.pdf" },
  { name: "First Year Academic Calendar 2023-2024", file: "fy-academic-calendar-2023-24.pdf" },
  { name: "Academic Calendar 2023-2024", file: "academic-calendar-2023-24.pdf" },
  { name: "Revised Academic Calendar 2022-2023", file: "revised-academic-calendar-2022-23.pdf" },
  { name: "Academic Calendar 2022-2023 (Revised)", file: "academic-calendar-2022-23-revised.pdf" },
  { name: "Academic Calendar 2022-2023", file: "academic-calendar-2022-23.pdf" },
  { name: "Academic Calendar 2021-2022", file: "academic-calendar-2021-22.pdf" },
  { name: "Academic Calendar 2020-2021", file: "academic-calendar-2020-21.pdf" },
  { name: "Academic Calendar 2019-2020", file: "academic-calendar-2019-20.pdf" },
  { name: "Academic Calendar 2018-2019", file: "academic-calendar-2018-19.pdf" },
  { name: "Academic Calendar 2017-2018", file: "academic-calendar-2017-18.pdf" },
  { name: "Academic Calendar 2016-2017", file: "academic-calendar-2016-17.pdf" },
];

const AcademicCalender = () => {
  return (
    <div className="academic-calendar-container">
      <h1 className="page-title">Academic Calendar</h1>
      <ul className="calendar-list">
        {academicCalendarData.map((item, index) => (
          <li key={index} className="calendar-item">
            <a href={`/pdfs/academic-calendar/${item.file}`} target="_blank" rel="noopener noreferrer" download>
              📄 {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AcademicCalender;
