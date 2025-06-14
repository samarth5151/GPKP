import React from 'react';
import './ContinuingEducation.css'; // we'll move styles to a CSS file
import img1 from '../../../Assets/continuing-education-page-images/img-1.jpeg'
import img2 from '../../../Assets/continuing-education-page-images/img-2.jpeg'
import img3 from '../../../Assets/continuing-education-page-images/img-3.jpeg'
import img4 from '../../../Assets/continuing-education-page-images/img-4.jpeg'
import img5 from '../../../Assets/continuing-education-page-images/img-5.jpeg'
import img6 from '../../../Assets/continuing-education-page-images/img-6.jpeg'
import img7 from '../../../Assets/continuing-education-page-images/img-7.jpeg'
import img8 from '../../../Assets/continuing-education-page-images/img-8.jpeg'
import img9 from '../../../Assets/continuing-education-page-images/img-9.jpeg'

const ContinuingEducation = () => {
  return (
    <div className="container">
      <h1>Continuing Education Programme</h1>

      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Course Title</th>
            <th>Duration</th>
            <th>Intake</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Pre-Diploma in Foundry Technology</td><td>1 Yr</td><td>40</td><td>-</td></tr>
          <tr><td>2</td><td>Diploma in Foundry Technology</td><td>1 Yr</td><td>40</td><td>-</td></tr>
          <tr><td>3</td><td>Advance Diploma in Foundry Technology</td><td>1 Yr</td><td>40</td><td>-</td></tr>
          <tr><td>4</td><td>Casting Technician</td><td>4 months</td><td>20</td><td>With Scholarship of Rs 7200/month</td></tr>
          <tr><td>5</td><td>Fashion Jewelry</td><td>4 months</td><td>20</td><td>With Scholarship of Rs 7200/month</td></tr>
          <tr><td>6</td><td>Final Product Maker</td><td>2 months</td><td>20</td><td>Free Toolkit</td></tr>
          <tr><td>7</td><td>Metal Ware</td><td>2 months</td><td>20</td><td>Free Toolkit</td></tr>
          <tr><td>8</td><td>Leather Craft</td><td>2 months</td><td>20</td><td>Free Toolkit</td></tr>
          <tr><td>9</td><td>Jute Craft</td><td>2 months</td><td>20</td><td>Free Toolkit</td></tr>
        </tbody>
      </table>

      <div className="section-title">Centre of Excellence in Gems and Jewellery</div>
      <div className="info">
        <strong>Course:</strong> Diploma in (Vocational) Jewellery Design<br />
        <strong>Eligibility:</strong> 10th pass<br />
        <strong>Course fees:</strong> Rs 40000/- per month<br />
        <strong>Course Coordinator:</strong> Shashank Mandre<br />
        <strong>Programme Coordinator:</strong> Priya Jadhav
      </div>

      <div className="info">
        नमस्कार,<br />
        कोल्हापूर जिल्हा सराफ संघ आणि शासकीय तंत्र निकेतन, कोल्हापूर यांनी संयुक्तपणे...<br />
        (पूर्ण मराठी परिच्छेद इथे जोडा)
      </div>

      <div className="section-title">Dip in Jewellery Design</div>
      <div className="images-grid-1">
        <img src={img1} alt="Event 1" />
        <img src={img2} alt="Event 2" />
        <img src={img3} alt="Event 3" />
        <img src={img4} alt="Jail 1" />

      </div>

      <div className="section-title">Foundry Technology CEP Course at Kalamba Central Jail Kolhapur</div>
      <div className="images-grid-2">
        <img src={img5} alt="Jail 2" />
        <img src={img6} alt="Jail 3" />
        <img src={img7} alt="Jail 3" />
      </div>

      <div className="section-title">Inauguration of Gems and Jewellery Programs</div>
      <div className="images-grid-3">
        <img src={img8} alt="Inauguration 1" />
        <img src={img9} alt="Inauguration 2" />
      </div>
    </div>
  );
};

export default ContinuingEducation;
