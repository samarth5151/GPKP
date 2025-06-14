// OrganizationalChart.jsx
import './OrganizationalChart.css';
import Chart from '../../../Assets/OrganizationalChart/OrganizationalChart.png';

function OrganizationalChart() {
  return (
    <div className="org-chart-container">
      <h1 className="org-chart-heading">Organizational Structure</h1>
      
      <div className="chart-image-container">
        <img 
          src={Chart}
          alt="Organizational Structure" 
          className="org-chart-image"
        />
      </div>
    </div>
  );
}

export default OrganizationalChart;