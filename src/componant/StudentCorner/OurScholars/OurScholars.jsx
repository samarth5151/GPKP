import React from 'react';
import './OurScholars.css';

const scholarData = [
  {
    title: "Third Year INFORMATION TECHNOLOGY Topper List",
    columns: ["Sr.No", "Roll Number", "Semester", "Name", "Total Marks", "Obtained Marks", "Percentage"],
    rows: [
      ["1", "198025", "6", "KULKARNI SARVESH ANANT", "1600", "1557", "97.31"],
      ["2", "196003", "6", "BARAGE MANISH NAMDEV", "1600", "1539", "96.18"],
      ["3", "196009", "6", "FALE SHRIYA BAPU", "1600", "1538", "96.12"],
      ["4", "196004", "6", "BHADGAONKAR AFTAB IMTIYAJ", "1600", "1535", "95.93"],
      ["5", "196051", "6", "SATPUTE SARITA SURESH", "1600", "1509", "94.31"],
    ]
  },
  {
    title: "Third Year CIVIL ENGINEERING Topper List",
    columns: ["Sr.No", "Roll Number", "Semester", "Name", "Total Marks", "Obtained Marks", "Percentage"],
    rows: [
      ["1", "191042", "6", "LOHAR VISHWAJEET JITENDRA", "1600", "1438", "89.87"],
      ["2", "191088", "6", "YESANE SANIKA SHIVAJI", "1600", "1432", "89.5"],
      ["3", "191089", "6", "ZANJAGE PRAJWAL MADHUKAR", "1600", "1428", "89.25"],
      ["4", "191032", "6", "KARADAGE KUNAL ARUN", "1600", "1399", "87.43"],
      ["5", "191057", "6", "PRATIK DINKAR PATIL", "1600", "1386", "86.62"],
    ]
  },
  {
    title: "MECHANICAL ENGINEERING SUMMER-2024 Topper List",
    columns: ["Sr.No", "Enroll No", "Name", "Percentage"],
    rows: [
      ["1", "212008", "BAGWAN AMAAN MAJID", "92.76"],
      ["2", "212062", "KAMBLE SANKET SANTOSH", "92.35"],
      ["3", "212053", "JAMADAR MUJAHID RAFIK", "91.59"],
      ["4", "212057", "KADAM YASH SUNIL", "90.82"],
      ["5", "212026", "DESAI SIDDHARTH CHANDRAKANT", "87.18"],
    ]
  },
  {
    title: "ELECTRICAL ENGINEERING SUMMER-2024 Topper List",
    columns: ["Sr.No", "Enroll No", "Name", "Percentage"],
    rows: [
      ["1", "213038", "MANE SNEHAL SARDAR", "91.12"],
      ["2", "213049", "PATIL SARTHAK AMAR", "88.71"],
      ["3", "213010", "DONE SIDDHARTH SURESH", "88.12"],
      ["4", "213053", "PATIL SHARVARI SHAHAJI", "86.65"],
      ["5", "213039", "MORE HARSHAVARDHAN DATTATRAY", "84.59"],
    ]
  },
  {
    title: "INFORMATION TECHNOLOGY SUMMER-2024 Topper List",
    columns: ["Sr.No", "Enroll No", "Name", "Percentage"],
    rows: [
      ["1", "216060", "RUKADIKAR SOFIYA SAMIR", "97.59"],
      ["2", "216042", "NAVALE SAMIKSHA SUNIL", "96.06"],
      ["3", "216062", "SAYYAD NAWAZ BASHIR", "95.82"],
      ["4", "216007", "CHAVAN SHREESHAIL SHIVRAJ", "95.53"],
      ["5", "216044", "PATIL ABHAY VISHWANATH", "95.00"],
    ]
  },
  {
    title: "METALLURGICAL ENGINEERING SUMMER-2024 Topper List",
    columns: ["Sr.No", "Enroll No", "Name", "Percentage"],
    rows: [
      ["1", "217018", "SUBHEDAR SHIVAM MANVENDRA", "86.94"],
      ["2", "227301", "EKAL KSHITIJ RAVASO", "82.19"],
      ["3", "217006", "GAWADE ROHIT DATTATRAY", "81.06"],
      ["4", "217022", "HIREMATH PREETAM NAGAYYA", "80.38"],
      ["5", "227305", "MHATRE SHUBHAM CHANDRAKANT", "79.13"],
    ]
  },
  {
    title: "ELECTRONICS & TELECOMMUNICATION SUMMER-2024 Topper List",
    columns: ["Sr.No", "Enroll No", "Name", "Percentage"],
    rows: [
      ["1", "218054", "KUMBHAR SOHAM SUNIL", "94.00"],
      ["2", "218094", "PATIL SATEJ BHALCHANDRA", "93.59"],
      ["3", "218049", "KORE SHREYASH SANTOSH", "90.71"],
      ["4", "218018", "DHANAVADE SAMIKSHA YUVRAJ", "88.24"],
      ["5", "228317", "WAGHMODE VAIBHAV SUBHASH", "88.06"],
    ]
  },
];

export default function OurScholars() {
  return (
    <div className="our-scholars-container">
      <h1 className="page-title">Our Scholars</h1>
      {scholarData.map((dept, index) => (
        <div key={index} className="scholar-section">
          <h2>{dept.title}</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  {dept.columns.map((col, i) => (
                    <th key={i}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dept.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
