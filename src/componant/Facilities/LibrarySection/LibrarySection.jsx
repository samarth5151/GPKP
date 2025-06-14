import React from 'react';
import './LibrarySection.css';

export default function LibrarySection() {
  return (
    <div className="library-container">
      <h1 className="page-title">Library Section</h1>

      {/* Common Facilities */}
      <section className="library-section">
        <h2>Common Facilities</h2>
        <ul>
          <li>Spacious reading halls for students and staff</li>
          <li>Reference section with textbooks and journals</li>
          <li>Computer with internet access for academic use</li>
          <li>Library automation and OPAC (Online Public Access Catalog)</li>
          <li>Reprography (Xerox) facility</li>
          <li>Book bank facility for all students</li>
        </ul>
      </section>

      {/* NDLI Club */}
      <section className="library-section">
        <h2>NDLI Club</h2>
        <p>
          The NDLI Club offers access to millions of academic resources. Regular events and access to high-quality content help promote digital learning culture.
        </p>
      </section>

      {/* ONOS */}
      <section className="library-section">
        <h2>ONOS (Open Access Network of Scholarship)</h2>
        <p>
          ONOS provides access to open educational resources, supporting research and self-learning via free journals, e-books, and repositories.
        </p>
      </section>

      {/* Staff Information */}
      <section className="library-section">
        <h2>Library In-charge</h2>
        <table>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Qualification</th>
              <th>Designation</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>AVINASH MUDHOLKAR</td>
              <td>M Tech.</td>
              <td>I/C Head Of Dept of Sugar Technology and Monitoring Officer Library</td>
              <td>Anand</td>
            </tr>
          </tbody>
        </table>

        <h2>Library Team</h2>
        <table>
          <thead>
            <tr>
              <th>Name of Member</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Shri. Y. R. Satpute</td><td>(Co-Coordinator)</td></tr>
            <tr><td>Rahul Dnyandeo Nagargoje</td><td>Jr. Clerk / Clerk-cum-typist</td></tr>
            <tr><td>Shri Vaibhav Shamrao Khandekar</td><td>Driver</td></tr>
            <tr><td>Shri. Ravi Mandrupkar</td><td>Asst. Librarian</td></tr>
            <tr><td>Shri. Mahesh Pati</td><td>Tantra Hamal</td></tr>
          </tbody>
        </table>
      </section>

      {/* Statistical Data */}
      <section className="library-section">
        <h2>Statistical Data of Learning Resources</h2>
        <table>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Department</th>
              <th>Books</th>
              <th>Journals</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Civil Engineering</td><td>7550</td><td>05</td></tr>
            <tr><td>2</td><td>Mechanical Engineering</td><td>7445</td><td>06</td></tr>
            <tr><td>3</td><td>Electrical Engineering</td><td>6510</td><td>03</td></tr>
            <tr><td>4</td><td>Electronics & Tele communication</td><td>4300</td><td>05</td></tr>
            <tr><td>5</td><td>Information Technology Department</td><td>4300</td><td>05</td></tr>
            <tr><td>6</td><td>Metallurgy Department</td><td>770</td><td>03</td></tr>
            <tr><td>7</td><td>Sugar Technology</td><td>1800</td><td>—</td></tr>
            <tr><td>8</td><td>Science Department</td><td>6370</td><td>05</td></tr>
            <tr><td>9</td><td>Other</td><td>1123</td><td>—</td></tr>
          </tbody>
        </table>

        <h2>Grant Wise Books</h2>
        <table>
          <thead>
            <tr>
              <th>Grant Type</th>
              <th>Books</th>
              <th>Journals</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Development of Library</td><td>25796</td><td>—</td></tr>
            <tr><td>Social welfare Book Bank</td><td>3390</td><td>—</td></tr>
            <tr><td>General Book Bank</td><td>9406</td><td>—</td></tr>
            <tr><td>Special Component</td><td>1607</td><td>—</td></tr>
            <tr><td><strong>Total Books</strong></td><td><strong>40198</strong></td><td><strong>32</strong></td></tr>
          </tbody>
        </table>

        <h2>Books Purchased Year-wise</h2>
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Year</th>
              <th>Grant</th>
              <th>No. of Books Purchased</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>01</td><td>2015-16</td><td>Rs. 8989/-</td><td>18</td></tr>
            <tr><td>02</td><td>2016-17</td><td>Rs. 5113/-</td><td>31</td></tr>
            <tr><td>03</td><td>2017-18</td><td>Rs. 5,38,155/-</td><td>1245</td></tr>
            <tr><td>04</td><td>2018-19</td><td>Rs. 1,43,643/-</td><td>271</td></tr>
            <tr><td>05</td><td>2018-19</td><td>Rs. 01,43,643/-</td><td>231</td></tr>
            <tr><td>06</td><td>2019-20</td><td>Rs. 64,631/-</td><td>269</td></tr>
            <tr><td>07</td><td>2020-21</td><td>No Grants</td><td>—</td></tr>
            <tr><td>08</td><td>2021-2022</td><td>No Grants</td><td>—</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
