// Infrastructure.jsx
import './Infrastructure.css';

function Infrastructure() {
  return (
    <div className="infrastructure-container">
      <h1 className="infrastructure-heading">Infrastructure</h1>
      
      <p className="infrastructure-description">Details about Existing infrastructure facilities</p>
      
      <table className="infrastructure-table">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Main Buildings</th>
            <th>Area In SQM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Main Building</td>
            <td>4700</td>
          </tr>
          <tr>
            <td>2</td>
            <td>World Bank Funded Building</td>
            <td>4500</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sugar Technology Building</td>
            <td>1260</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Workshop</td>
            <td>1170</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Canteen</td>
            <td>380</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Consumer Store</td>
            <td>180</td>
          </tr>
          <tr>
            <td>7</td>
            <td>IT & Electronics Building</td>
            <td>4296</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Library Building</td>
            <td>1155</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Boys Hostel</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Girls Hostel</td>
            <td>1614</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Principal Quarter</td>
            <td>190</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Rectors Quarter</td>
            <td>190</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Upkulmantri Quarter</td>
            <td>114</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Class IV Quarters</td>
            <td>980</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Infrastructure;