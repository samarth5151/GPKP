import React from 'react';
import './CommonFacilities.css';

const commonResources = [
  {
    title: 'A) Availability of relevant learning resources including e-resources and digital library',
    columns: ["Sr.No", "Learning Resources", "2021-22", "2022-23", "2023-24", "2024-25"],
    rows: [
      ["1", "Reading room with issue of text/reference books.", "Available (150+)", "Available (150+)", "Available (150+)", "Available (150+)"],
      ["2", "Library and Information Centre has a collection.", "33806 Volumes, 2250 Reference Books, 26+ Journals, 560 CDs, 6 Newspapers", "33806 Volumes, 2250 Reference Books, 560 CDs", "33806 Volumes, 2250 Reference Books, 560 CDs", "31548 Volumes, 2250 Reference Books, 25+ Journals, 560 CDs, 6 Newspapers"],
      ["3", "Home issue of 1 book per student", "Available", "Available", "Available", "Available"],
      ["4", "Book Bank facility", "Available", "Available", "Available", "Available"],
      ["5", "Free Book Bank for SC/ST", "Available", "Available", "Available", "Available"],
      ["6", "Multimedia 14 PCs", "YES", "YES", "YES", "YES"],
      ["7", "Availability of NPTEL / Digital Library", "Available (12 PC)", "Available (12 PC)", "Available (12 PC)", "Available (12 PC)"],
      ["8", "Subscription of magazines/journals", "26", "NIL", "NIL", "25"],
      ["9", "LMS Software", "Available", "Available", "Available", "Available"],
      ["10", "Departmental Libraries", "YES", "YES", "YES", "YES"],
      ["11", "LAN + Internet Facility", "Available (11 PC)", "Available (11 PC)", "Available (11 PC)", "Available (11 PC)"],
      ["12", "ONOS Subscription", "NIL", "NIL", "NIL", "Applied"]
    ]
  }
];

const grantWiseBooks = [
  ["01", "Development of Library", "21904"],
  ["02", "Social Welfare Book Bank", "1548"],
  ["03", "General Book Bank", "7533"],
  ["04", "Special Component", "563"],
  ["Total", "", "31548"]
];

const purchasedBooks = [
  ["01", "2015-2016", "Rs. 8,989/-", "18"],
  ["02", "2016-2017", "Rs. 5,113/-", "31"],
  ["03", "2017-2018", "Rs. 5,38,155/-", "1245"],
  ["04", "2018-2019", "Rs. 1,43,643/-", "271"],
  ["05", "2018-2019", "Rs. 1,43,643/-", "1231"],
  ["06", "2019-2020", "Rs. 64,631/-", "269"],
  ["07", "2020-2021", "No Grant", "–"],
  ["08", "2021-2022", "No Grant", "–"],
  ["09", "2022-2023", "No Grant", "–"],
  ["10", "2023-2024", "No Grant", "–"],
  ["11", "2024-2025", "Rs. 2,98,221/-", "530"]
];

export default function CommonFacilities() {
  return (
    <div className="common-facilities">
      <h1>Common Facilities in the Library</h1>

      {commonResources.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <div className="table-wrapper">
            <table className="facility-table">
              <thead>
                <tr>
                  {section.columns.map((col, i) => <th key={i}>{col}</th>)}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => <td key={j}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <h2>B) Accessibility to Students</h2>
      <ul>
        <li>The library works on all days of the year (excluding Government holidays).</li>
        <li>Specimen Question Papers are available on the website for download.</li>
        <li>Separate reading rooms for boys and girls accommodating over 75 students.</li>
        <li>Dedicated area for staff research references.</li>
      </ul>

      <h2>Grant Wise Books</h2>
      <div className="table-wrapper">
        <table className="facility-table">
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Description</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {grantWiseBooks.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => <td key={j}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Purchased Book Data</h2>
      <div className="table-wrapper">
        <table className="facility-table">
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Year</th>
              <th>Grant</th>
              <th>No. of Books Purchased</th>
            </tr>
          </thead>
          <tbody>
            {purchasedBooks.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => <td key={j}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Gallery</h2>
      <p>(Add your image gallery here if needed)</p>
    </div>
  );
}
