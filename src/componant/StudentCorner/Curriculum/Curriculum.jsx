import React from 'react';
import './Curriculum.css';

const curriculumData = [
  {
    program: "Civil",
    mpecs2016: "MPECS_2016_Civil.pdf",
    mpecs2020: "MPECS_2020_civil.pdf",
    mpecs2023: "MPECS_2023_civil.pdf"
  },
  {
    program: "Information Technology",
    mpecs2016: "MPECS_2016_IT.pdf",
    mpecs2020: "MPECS_2020_IT.pdf",
    mpecs2023: "MPECS_2023_IT.pdf"
  },
  {
    program: "Electronics and Telecommunication",
    mpecs2016: "MPECS_16_ET.pdf",
    mpecs2020: "ET-MPECHS2020.pdf",
    mpecs2023: "ET-MPECHS2023.pdf"
  },
  {
    program: "Electrical",
    mpecs2016: "MPECS_16_EE.pdf",
    mpecs2020: "MPECS_2020_EE.pdf",
    mpecs2023: "MPECS_2023_EE.pdf"
  },
  {
    program: "Metallurgy",
    mpecs2016: "MPECS_16_MT.pdf",
    mpecs2020: "MPECS_2020_MT.pdf",
    mpecs2023: "MPECS_2023_MT.pdf"
  },
  {
    program: "Mechanical",
    mpecs2016: "MPECS_16_MECH.pdf",
    mpecs2020: "MPECS_2020_MECH.pdf",
    mpecs2023: "MPECS_2023_MECH.pdf"
  },
  {
    program: "Sugar Technology",
    mpecs2016: "MPECS_16_Sugar.pdf",
    mpecs2020: null,
    mpecs2023: null
  }
];

const Curriculum = () => {
  return (
    <div className="curriculum-container">
      <h1 className="page-title">Curriculum</h1>
      <div className="table-container">
        <table className="curriculum-table">
          <thead>
            <tr>
              <th>Program</th>
              <th>MPECS 2016</th>
              <th>MPECS 2020</th>
              <th>MPECS 2023</th>
            </tr>
          </thead>
          <tbody>
            {curriculumData.map((row, index) => (
              <tr key={index}>
                <td>{row.program}</td>
                <td>
                  {row.mpecs2016 ? (
                    <a
                      href={`/pdfs/curriculum/${row.mpecs2016}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      📄 View
                    </a>
                  ) : "—"}
                </td>
                <td>
                  {row.mpecs2020 ? (
                    <a
                      href={`/pdfs/curriculum/${row.mpecs2020}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      📄 View
                    </a>
                  ) : "—"}
                </td>
                <td>
                  {row.mpecs2023 ? (
                    <a
                      href={`/pdfs/curriculum/${row.mpecs2023}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      📄 View
                    </a>
                  ) : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Curriculum;
