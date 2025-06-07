// FeeStructure.jsx
import './FeeStructure.css';

function FeeStructure() {
  return (
    <div className="fee-structure-container">
      
      <h1 className="fee-structure-heading">Fee Structure</h1>
      
      <div className="fee-structure-content">
        <div className="fee-table-container">
          <table className="fee-table">
            <thead>
              <tr className="fee-table-header">
                <th className="fee-category">फी चा आराखडा<br />Fee Structure</th>
                <th>Open / Minority</th>
                <th>EWS</th>
                <th>TFWS / Defence / STC / PTC</th>
                <th>OBC / SBC / VJ / DT / NT 1 / NT 2 / NT 3</th>
                <th>SC / ST</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>प्रथम वर्ष पदविका<br />First Year</td>
                <td>8490/-</td>
                <td>5490/-</td>
                <td>2490/-</td>
                <td>2490/-</td>
                <td>940/-</td>
              </tr>
              <tr>
                <td>थेट द्वितीय वर्ष पदविका<br />Second Year</td>
                <td>8211/-</td>
                <td>5211/-</td>
                <td>2211/-</td>
                <td>2211/-</td>
                <td>611/-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FeeStructure;