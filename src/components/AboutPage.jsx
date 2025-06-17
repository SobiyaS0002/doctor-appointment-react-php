import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="main-wrapper">
      <style>{`
        body {
          background-image: url("https://t3.ftcdn.net/jpg/05/79/48/44/360_F_579484437_W1bQn8o3vaz5zRyxAuG5AYMFkRj20wrA.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 30px;
        }
        h1 {
          color: #a3dcff;
          text-align: center;
          margin-bottom: 40px;
          font-size: 36px;
          font-weight: bold;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          text-decoration: underline;
        }
        .main-wrapper {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }
        .bubble-box {
          background: rgba(0, 0, 0, 0.6);
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(18px);
          border-radius: 40px 150px / 120px 100px;
          width: 45%;
          padding: 40px;
          color: #f0f0f0;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
          min-width: 360px;
        }
        .bubble-box h2,
        .bubble-box h3,
        .bubble-box h4 {
          color: #a3dcff;
          margin-bottom: 10px;
          border-left: 4px solid #7aa9ff;
          padding-left: 8px;
        }
        .bubble-box p,
        .bubble-box a,
        .bubble-box li {
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 10px;
          color: #eaeaea;
        }
        .bubble-box ol,
        .bubble-box ul {
          margin-left: 20px;
          margin-bottom: 20px;
        }
        .home-link {
          display: inline-block;
          margin: 20px;
          font-size: 18px;
          color: #a9bfff;
        }
      `}</style>

      <Link to="/user-home" className="home-link">&lt;&lt; Home</Link>
      <h1>About</h1>

      <div className="bubble-box">
        <h2>Our Mission</h2>
        <ol>
          <li>At Online Doctor Appointment, our mission is to bridge the gap between patients and healthcare providers.</li>
          <li>We believe that everyone deserves convenient access to quality healthcare services.</li>
          <li>Our platform connects patients with experienced doctors, making it easy to book appointments, seek medical advice, and manage their health—all from the comfort of their homes.</li>
        </ol>

        <h3>What Sets Us Apart</h3>
        <ol>
          <li><strong>Personalized Care:</strong> Choose from a wide range of specialists to meet your needs.</li>
          <li><strong>Easy Booking:</strong> Intuitive interface, no more hold times or phone hassle.</li>
        </ol>

        <h4>Our Commitment</h4>
        <ul>
          <li><b><u style={{ color:'#ffffff' }}>Quality:</u></b> Delivering top-notch healthcare services.</li>
          <li><b><u style={{ color:'#ffffff' }}>Accessibility:</u></b> Making healthcare accessible to all.</li>
          <li><b><u style={{ color:'#ffffff' }}>Empathy:</u></b> Treating every patient with compassion and understanding.</li>
          <li><b><u style={{ color:'#ffffff' }}>Innovation:</u></b> Continuously improving our platform to meet your needs.</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
