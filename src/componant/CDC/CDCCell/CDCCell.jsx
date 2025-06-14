// CDCCell.jsx
import './CDCCell.css';
import Shrikant from "../../../Assets/CDC/Mr.Shrikant-M-Naik.jpeg"

function CDCCell() {
  return (
    <div className="cdc-container">
      <div className="breadcrumb">
        <span>Home ></span>
        <span>CDC Cell</span>
      </div>
      
      <h1 className="cdc-heading">CDC Cell</h1>
      
      <div className="cdc-content">
        <table className="cdc-table">
          <thead>
            <tr className="cdc-table-header">
              <th>CDC Cell Incharge</th>
              <th>Designation</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shrikant M. Naik</td>
              <td>Head of Electrical Engineering Department</td>
              <td>
                <img 
                  src={Shrikant}
                  alt="CDC Cell Incharge" 
                  className="cdc-photo"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CDCCell;