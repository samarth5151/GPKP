// EDPCell.jsx
import './EDPCell.css';
import Mohankumar from "../../../Assets/EDPCell/Dr. Mohankumar P. Hampali.jpg"
import Entrepreneurship_Awareness from "../../../Assets/EDPCell/Entrepreneurship Awareness.jpeg"

function EDPCell() {
  return (
    <div className="edp-container">
    
      
      <h1 className="edp-heading">EDP Cell</h1>
      
      <div className="edp-content">
        <table className="edp-table">
          <thead>
            <tr className="edp-table-header">
              <th>Sr. No.</th>
              <th>Staff</th>
              <th>Qualification</th>
              <th>Designation</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dr. Mohankumar M. Kamble</td>
              <td>PhD (Mech. Engg.), MTech (CAD/CAM), BE (Mech. Engg.)</td>
              <td>Cell Incharge</td>
              <td><img src={Mohankumar} alt="EDP Cell Incharge" className="edp-photo" /></td>
            </tr>
          </tbody>
        </table>
        
        <h2 className="edp-subheading">Entrepreneurship Cell/Technology Business Incubator</h2>
        
        <h3 className="availability-heading">Availability</h3>
        <div className="availability-content">
          <p>The EDP Cell is prevailing in the institute since so many years and our alumni have proved their skill by establishing themselves as good entrepreneurs.</p>
          <p>The objective of the Cell are to:</p>
          <ul className="availability-list">
            <li>Motivate students to start small & medium scale industry / business</li>
            <li>Impart students entrepreneurial abilities/knowledge</li>
            <li>Conduct following activities</li>
          </ul>
          <ul className="activity-list">
            <li>Entrepreneurship Awareness program</li>
            <li>Entrepreneurship Development program (EDP)</li>
            <li>Skill Development program (SDP)</li>
          </ul>
        </div>
        
        <h3 className="management-heading">Management</h3>
        <div className="management-content">
          <p>With the increasing number of graduates from different engineering and technological branches, the institution felt the need to have a systematic approach towards entrepreneurship development among students. Thus, the EDP Cell was formed to guide and support students in their entrepreneurial ventures.</p>
          <p>The EDP Cell is coordinated by:</p>
          <table className="management-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Staff</th>
                <th>Designation</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr. Mohankumar M. Kamble</td>
                <td>Cell Incharge</td>
                <td>Coordinator</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Seema M. Ambhade</td>
                <td>Lecturer Mechanical</td>
                <td>Co-ordinator</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dr. S. M. Mandre</td>
                <td>Lecturer Metallurgy</td>
                <td>Co-ordinator</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mr. G. S. Suryawanshi</td>
                <td>Lecturer Metallurgy</td>
                <td>Mentor</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Mr. C. S. Patil</td>
                <td>Lecturer Electronics</td>
                <td>Mentor</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="effectiveness-heading">Effectiveness</h3>
        <div className="effectiveness-content">
          <p>Entrepreneurship and Innovation Cell conducted various activities. Few of such activities are mentioned in below table:</p>
          
          <table className="effectiveness-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Date</th>
                <th>Nature of Activity</th>
                <th>Name of Entrepreneurship Expert/Alumni Resource person</th>
                <th>Designation and address of Resource Person</th>
                <th>Number of Students attended activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>26/04/2019</td>
                <td>Expert Lecture on 'Value Education for Personality Development'</td>
                <td>Mr. Shivaji Khare</td>
                <td>Social Worker & activist, Pune</td>
                <td>54</td>
              </tr>
              <tr>
                <td>2</td>
                <td>15/02/2019</td>
                <td>Expert Lecture on 'Entrepreneurship Development'</td>
                <td>Mr. Gordon Mali</td>
                <td>Chairman, MMSI, Pune</td>
                <td>120</td>
              </tr>
              <tr>
                <td>3</td>
                <td>06/07/2019</td>
                <td>Expert Lecture on 'Personality development'</td>
                <td>Mr. Amit A. Vaditya</td>
                <td>Asst. Prof. SKN COE, Pune</td>
                <td>100</td>
              </tr>
              <tr>
                <td>4</td>
                <td>26/08/2019</td>
                <td>Industrial Recruitment Awareness Program</td>
                <td>Mr. Chetan Suryawanshi</td>
                <td>Operation Executive, Wipro Ltd, Pune</td>
                <td>105</td>
              </tr>
              <tr>
                <td>5</td>
                <td>18/02/2020</td>
                <td>Expert Lecture on 'Personality development and youth'</td>
                <td>Mr. Pradip A. Kshirsagar</td>
                <td>Principal, Bhausaheb Hiray Vedik College, Pune</td>
                <td>100</td>
              </tr>
              <tr>
                <td>6</td>
                <td>12/06/2021</td>
                <td>Online Interactive session on Innovation topic 'Career Opportunities after Diploma'</td>
                <td>Mr. Ganesh Mali</td>
                <td>Director, MDCO Maharashtra</td>
                <td>200</td>
              </tr>
              <tr>
                <td>7</td>
                <td>17/12/2021</td>
                <td>Webinar on 'How to Design a Waste-to-Wealth Conversion Plant by using Software'</td>
                <td>Mr. Girdhar J. Arase</td>
                <td>Director, Arase Software Pvt Ltd</td>
                <td>150</td>
              </tr>
              <tr>
                <td>8</td>
                <td>03/01/2022</td>
                <td>Expert Lecture on 'Entrepreneurship Development and digital entrepreneurship'</td>
                <td>Mr. Vijay Sapkal</td>
                <td>OAL of Arc Craft Pvt Ltd</td>
                <td>50</td>
              </tr>
              <tr>
                <td>9</td>
                <td>20/04/2022</td>
                <td>Entrepreneurship Development</td>
                <td>Mr. Sheetal Pawar</td>
                <td>Center for Research & Innovation, Savitribai Phule Pune University</td>
                <td>60</td>
              </tr>
              <tr>
                <td>10</td>
                <td>20/04/2022</td>
                <td>Expert Lecture on 'Personality development and communication'</td>
                <td>Mr. Arjun Voil</td>
                <td>Chartered army officer</td>
                <td>100</td>
              </tr>
              <tr>
                <td>11</td>
                <td>27/05/2022</td>
                <td>Entrepreneurship Development Assessment Seminar</td>
                <td>Smt. Varsha Pawar</td>
                <td>Project Officer, MCICT Govt. of Maharashtra</td>
                <td>25</td>
              </tr>
              <tr>
                <td>12</td>
                <td>18/06/2022</td>
                <td>Expert Lecture on 'MSME Registration and Procedures'</td>
                <td>Mt. Snehalata S. Jumale</td>
                <td>Assistant Professor, Department of Construction Management</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Entrepreneurship Seminar Image */}
        <div className="seminar-image-container">
          <img src={Entrepreneurship_Awareness} alt="Entrepreneurship Seminar" className="seminar-image" />
          <p className="seminar-caption">
            Entrepreneurship Awareness Seminar By Project officer, MCED Smt. Vanita Patil on 27th May, 2022
          </p>
        </div>

        {/* Success Stories Section */}
        <h3 className="success-stories-heading">Success stories</h3>
        <div className="success-stories-content">
          <p className="success-stories-intro">
            Many Students benefitted by activities conducted by Entrepreneurship and innovation cell. Many alumni became successful entrepreneur. Few of the remarkable Success stories
          </p>
          
          <table className="success-stories-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name of student</th>
                <th>Program</th>
                <th>Pass out year</th>
                <th>Designation</th>
                <th>Name and address of industry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Siddharth Mali</td>
                <td>EC</td>
                <td>2018</td>
                <td>Proprietor</td>
                <td>AntiGra Systems Pvt Ltd, X15, Gokul shrogaon MIDC, Kolhapur - 416234. www.antigra.com</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Rushikesh K. Gurav</td>
                <td>EC</td>
                <td>2017</td>
                <td>Proprietor</td>
                <td>Ekta nagar, Anantnagar, Kagal, 416216</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sudhakar Sutar</td>
                <td>EE</td>
                <td>1996</td>
                <td>Proprietor</td>
                <td>Henry Industrial Services Krishnakunj, Plot no 68, RS No 47/B, Court Colony, Airport Rd, Ujjalnagar, Kolhapur</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Rushikesh Sanjay Jamdar</td>
                <td>ME</td>
                <td>2008</td>
                <td>Proprietor</td>
                <td>Sweet Ice Cream Manufacture, Bhadole, Maharashtra 416112</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Umesh Pandurang Shinde</td>
                <td>ME</td>
                <td>2020</td>
                <td>Proprietor</td>
                <td>Shri Mahalaxmi engineering, near sound casting, Shiroli MIDC Kolhapur</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Suraj Sanjay Bhopale</td>
                <td>CE</td>
                <td>2017</td>
                <td>Proprietor</td>
                <td>RDC concrete Mumbai</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Shreeram Survase</td>
                <td>Metallurgy</td>
                <td>2010</td>
                <td>Director</td>
                <td>R. R. Industries, 586/4 Plot No. 8, MIDC Shirol, Kolhapur</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EDPCell;