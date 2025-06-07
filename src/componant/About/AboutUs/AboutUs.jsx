// AboutUs.jsx
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      
      <div className="about-content">
        <p className="about-paragraph">
          Government Polytechnic, Kolhapur was established in 1961 with Civil Engineering and Mechanical Engineering Diploma Programmes.
          Started in a small rented building, the institute was soon Shifted to its independent campus of about 12 hectors covering academic building
          and hostels. At present,the Institute offers Diploma programmes in Civil Engineering, Mechanical Engineering, Electrical Engineering,Industrial
          Electronics, Sugar Manufacturing, Information Technology, Metallurgy and Electronics and Telecommunication. The Institute has the
          privilege of being the First Academically Autonomous Government Polytechnic in the state. Being rich with faculty of high qualifications,
          modernized laboratories and infrastructure, the Institute has progressed serving the industry and society. The alumni either proceed for
          higher education or get employed in renowned industries through regular campus interviews organized by the Training and Placement Cell
          of the Institute. As a National level appreciation of education of the Institute, four programmes were awarded 3 years accreditation by
          National Board of Accreditation (NBA), New Delhi in December 2003. Committed to the noble mission of developing technicians of high
          standards of excellence, the Institute is crossing broader and newer horizons of progress keeping pace with the changing global world.
        </p>

        <h2 className="institute-heading">About the Institute</h2>
        
        <ul className="timeline">
          <li className="timeline-item">
            <strong>1961</strong> : Established in 1961
          </li>
          <li className="timeline-item">
            <strong>1992</strong> : The first Govt. Institute in the state of Maharashtra to be awarded Academic autonomy in 1992
          </li>
          <li className="timeline-item">
            <strong>1994</strong> : Introduction of Multipoint Entry & Credit system and Flexibility (MPECS)
          </li>
          <li className="timeline-item">
            <strong>2003</strong> : NBA Accreditation for four programs (CE, ME, EE & IE) in 2003 for 3 years
          </li>
          <li className="timeline-item">
            <strong>2022</strong> : NBA Accreditation for Three programs (EE, E&TC and IT) in 2022
          </li>
          <li className="timeline-item">
            The NBA Compliance was uploaded on January 17, 2025.
          </li>
        </ul>

        <div className="curriculum-section">
          <strong>Curriculum Revisions</strong>: In 1994, 2001, 2006, 2010, 2013, 2016, 2020 and 2023
        </div>
      </div>
    </div>
  );
}

export default AboutUs;