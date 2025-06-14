import React from 'react';
import "./TrainingPlacement.css"
import BALASO_PANDURANG_PATIL from "../../../Assets/TPOCell/MR.-BALASO-PANDURANG-PATIL.jpeg"

const TrainingPlacementPortal = () => {
  return (
    <div className="training-placement-portal">

      {/* Main Content */}
      <main className="portal-content">
        {/* Officers Table Section */}
        <section className="officers-section">
          <table className="officers-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Qualification</th>
                <th>Designation</th>
                <th>Photo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mr. BALASO PANDURANG PATIL</td>
                <td>B.E. (PRODUCTION)</td>
                <td>Training & Placement Officer (I/C)</td>
                 <td><img src={BALASO_PANDURANG_PATIL} alt="EDP Cell Incharge" className="edp-photo" /></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Training and Placement Facility Section */}
        <section className="facility-section">
          <h2>Training and placement facility</h2>
          <p>
            The Placement at Government Polytechnic Kolhapur is a dynamic, real-time process which is inclusive, proactive, ambitious and 
            wholesome. The Placement process is strongly driven based on industry need and feedback. The Placement cell monitors the 
            employment opportunities and arranges campus recruitment process interviews for the final year students and provides internship 
            opportunities for second year students. A dedicated training and Placement cell work round the year to provide efficient, effective training 
            and employment opportunities for all the students.
          </p>
        </section>

        {/* Placement Officers Table Section */}
        <section className="placement-officers-section">
          <table className="placement-officers-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Qualification</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mr. PATIL BALASO PANDURANG</td>
                <td>B.E. (PRODUCTION)</td>
                <td>Training & Placement Officer (I/C)</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ms. KAMBALE M.S.</td>
                <td>M.E. CIVIL</td>
                <td>TPO Coordinator</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mr. SHEVALE P.A.</td>
                <td>M.Tech (MECH)</td>
                <td>TPO Coordinator</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mr. ADINGE R.B.</td>
                <td>B.TECH [ ELECT]</td>
                <td>TPO Coordinator</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Mr. PUKALE S.G.</td>
                <td>M.E. (COMP.ENGG)</td>
                <td>TPO Coordinator</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Ms. RATHOD A.P.</td>
                <td>M.E. ELECTRONICS</td>
                <td>TPO Coordinator</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Ms. INJEWAR G.G.</td>
                <td>M.Tech (METALLURGY)</td>
                <td>TPO Coordinator</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Placement Data Section */}
        <section className="placement-data-section">
          {/* 2024-25 Data */}
          <div className="placement-data-container">
            <table className="placement-data-table">
              <thead>
                <tr>
                  <th colspan="4">PLACEMENT DATA 2024-25</th>
                </tr>
                <tr>
                  <th>SR.NO.</th>
                  <th>NAME OF COMPANY</th>
                  <th>NO OF STUDENTS SELECTED</th>
                  <th>PACKAGE LPA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>TATA MOTORS</td>
                  <td>47</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>BAJAJ AUTO PUNE</td>
                  <td>39</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>CUMMINS (I) PUNE</td>
                  <td>14</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>TATA LAKSHYA SCHEME</td>
                  <td>15</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>KNAUF CEILING SOLUTIONS</td>
                  <td>7</td>
                  <td>2.83</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>BREKINGHARE PUNE</td>
                  <td>13</td>
                  <td>2.52</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>LUMAX INDUSTRIES PUNE</td>
                  <td>1</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>LUMAX ENGG SERVICES</td>
                  <td>1</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>CIPLA GOA</td>
                  <td>10</td>
                  <td>2.5</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>PIAGGIO VEHICLES BARAMATI</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr className="total-row">
                  <td>TOTAL</td>
                  <td></td>
                  <td>150</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 2023-24 Data */}
          <div className="placement-data-container">
            <table className="placement-data-table">
              <thead>
                <tr>
                  <th colspan="4">PLACEMENT DATA 2023-24</th>
                </tr>
                <tr>
                  <th>SR.NO.</th>
                  <th>NAME OF COMPANY</th>
                  <th>NO OF STUDENTS SELECTED</th>
                  <th>PACKAGE LPA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>JOHN DEERE</td>
                  <td>10</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>BIRLA PAINTS</td>
                  <td>6</td>
                  <td>3.3</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>CUMMINS INDIA</td>
                  <td>5</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>L AND T</td>
                  <td>1</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>TATA MOTORS</td>
                  <td>1</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>ESA AEDIN ( UAE )</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>INFRA MARKET</td>
                  <td>1</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>GE AVIATION</td>
                  <td>2</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>KSB PVT. LTD</td>
                  <td>2</td>
                  <td>2.05</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>RELIANCE PRODUCTS</td>
                  <td>2</td>
                  <td>2.75</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>SPIN R CAST</td>
                  <td>1</td>
                  <td>3.3</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>WIPRO</td>
                  <td>1</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>BHARAT FORGE</td>
                  <td>1</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>KIRLOSARKAR OIL ENGINES</td>
                  <td>2</td>
                  <td>3.5</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>KIRLOSARKAR FERROUS</td>
                  <td>3</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>TATA MOTORS LAKSHYA</td>
                  <td>1</td>
                  <td>3</td>
                </tr>
                <tr className="total-row">
                  <td>TOTAL</td>
                  <td></td>
                  <td>42</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 2022-23 Data */}
          <div className="placement-data-container">
            <table className="placement-data-table">
              <thead>
                <tr>
                  <th colspan="4">PLACEMENT DATA 2022-23</th>
                </tr>
                <tr>
                  <th>SR.NO.</th>
                  <th>NAME OF COMPANY</th>
                  <th>NO OF STUDENTS SELECTED</th>
                  <th>PACKAGE LPA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>BAJAJ AUTO LTD, Pune</td>
                  <td>15</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>TATA YAZAKI LTD</td>
                  <td>5</td>
                  <td>2.16</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>KIRLOSARKAR BROTHERS LTD</td>
                  <td>6</td>
                  <td>2.16</td>
                </tr>
                <tr className="total-row">
                  <td>TOTAL</td>
                  <td></td>
                  <td>26</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Campus Recruitment Process Section */}
        <section className="recruitment-process-section">
          <h2>Steps involved in the Campus recruitment process</h2>
          <ul>
            <li>Companies are invited in the college by the placement team</li>
            <li>The details of the year and the job profiles for placement are sent to the responding companies as per their requirements.</li>
            <li>Companies visit the campus and interact with the students.</li>
            <li>After confirmation by the company, placement team arranges a pre-placement talk of members of recruiter team & eligible students.</li>
            <li>The company conducts screening test for interested and eligible students.</li>
            <li>The shortlisted candidates are called for the interview by the company.</li>
            <li>The results are usually announced same day or through official mail.</li>
            <li>Selection and Offer letters mailed on the selected students email by the company.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default TrainingPlacementPortal;