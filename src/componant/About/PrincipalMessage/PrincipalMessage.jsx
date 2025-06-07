// PrincipalMessage.jsx
import './PrincipalMessage.css';

function PrincipalMessage() {
  return (
    <div className="principal-container">
      <h1 className="principal-heading">Principal's Message</h1>
      
      <div className="principal-content">
        <div className="principal-image">
          <img 
            src="/placeholder.jpg" 
            alt="Principal's Photo" 
            className="principal-photo"
          />
        </div>
        
        <p className="principal-name">Capt. (Dr.) N.P. Sonaje</p>
        
        <h2 className="principal-greeting">Dear Students, Faculty, Staff, and all Stakeholders of the Society</h2>
        
        <div className="principal-message">
          <p className="message-paragraph">
            It is with great pride and enthusiasm that I welcome you to Government Polytechnic Kolhapur' official website. Our institution stands as a beacon of excellence in technical education. As the first autonomous diploma institute in the state of Maharashtra, we have set a benchmark in the realm of technical education, providing a platform for students to pursue their academic and professional aspirations with unmatched academic autonomy and flexibility. As we step into the future, we are committed to shaping young minds, nurturing talents, and providing an educational experience that is both challenging and transformative.
          </p>

          <p className="message-paragraph">
            We believe in the power of knowledge, integrity, and innovation. Our mission is to provide students with a holistic education that equips them not only with academic excellence but also with the skills to thrive in an ever-evolving world. Through our diverse programs, various initiatives, and vibrant campus life, we aim to foster critical thinking, creativity, and a strong sense of community.
          </p>

          <p className="message-paragraph">
            Our distinguished faculty, dedicated staff, and forward-thinking approach create an environment where students are encouraged to push the boundaries of learning. We take pride in fostering an inclusive and dynamic campus culture, where respect, diversity, and collaboration are central to everything we do.
          </p>

          <p className="message-paragraph">
            As we continue to evolve, we remain committed to academic excellence, community engagement, and the overall development of each student who walks through our doors. I encourage you to explore our website, learn about our courses, and reach out with any questions. Together, we will continue to uphold the legacy of Government Polytechnic, Kolhapur and work towards an even brighter future.
          </p>

          <p className="message-paragraph">
            Thank you for being part of our journey.
          </p>

          <p className="message-signature">
            Warm regards,<br />
            <strong>Captain Dr. Nitin P. Sonaje</strong><br />
            Principal<br />
            Government Polytechnic, Kolhapur
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrincipalMessage;