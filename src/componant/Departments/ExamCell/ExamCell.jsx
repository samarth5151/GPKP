import './ExamCell.css';

const ExamCell = () => {
  return (
    <div className="examcell-container">
      <h2 className="examcell-title">Examination Cell</h2>

      <div className="examcell-section">
        <p>
          The examination cell has been established in 1992 when the institute was awarded Autonomy vide GR no: GTI-1092/75590/(2208)/TE-2, dated 18th May 1992.
        </p>
        <p>
          The examination committee has been established as per the requirements for autonomous institutes vide above GR. GTI-1092/75590/(2208)/TE-2, dated 14th Sept 1992.
        </p>
        <h3>Activities of Examination Cell</h3>
        <ul>
          <li>Maintain liaison between departments for registration & conduct of exams.</li>
          <li>Course registration and examination registration.</li>
          <li>Arrange theory, test, and practical exams.</li>
          <li>Issue of hall tickets.</li>
          <li>Declare results and issue mark-sheets.</li>
          <li>Award diploma certificates.</li>
          <li>Issue Equivalence, Provisional Diploma, Migration, Verification, Transcript certificates.</li>
        </ul>
      </div>

      <div className="examcell-section">
        <h3>COE’s Desk</h3>
        <p>
          The Examination Department of Government Polytechnic Kolhapur maintains complete confidentiality in the examination process. 
          The registration and fee payments are done online through the MIS login of the institute website. 
          Results are declared on the website. Online paper setting and moderation has also been introduced for both internal and external examiners.
        </p>
      </div>

      <div className="examcell-section">
        <h3>Examination Guidelines</h3>
        <ul>
          <li>Examination rules</li>
          <li>Examination malpractice and punishments</li>
        </ul>
      </div>

      <div className="examcell-section">
        <h3>Exam Controller</h3>
        <table className="exam-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shri. Khedkar Prafulla Prabhakar</td>
              <td>Lecturer in Sugar Technology</td>
              <td>B.Tech. (Sugar)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="examcell-section">
        <h3>Support Staff</h3>
        <table className="exam-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Yadav Sujata Tukaram</td><td>Laboratory Assistant</td></tr>
            <tr><td>Shrimati R. A. Waghmode</td><td>Instructor (T.L.A.)</td></tr>
            <tr><td>Smt. Sarawade Rekha Ramesh</td><td>Instructor (T.L.A.)</td></tr>
            <tr><td>Patil Vasudev Ishwar</td><td>Tantra Hamal</td></tr>
            <tr><td>Pandat Kajal Babaso</td><td>Tantra Hamal</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamCell;
