import { Link } from 'react-router-dom';

function ContactPage() {
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
        .bubble-box h3 {
          color: #a3dcff;
          margin-bottom: 10px;
          border-left: 4px solid #7aa9ff;
          padding-left: 8px;
        }
        .bubble-box p, .bubble-box a, .bubble-box li {
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 10px;
          color: #eaeaea;
        }
        .bubble-box a {
          color: #88bfff;
        }
        .bubble-box ol {
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
      <h1>Contact-us</h1>

      <div className="bubble-box">
        <h3>E-mail</h3>
        <p><a href="mailto:hospital250@gamil.com">hospital250@gamil.com</a></p>

        <h3>Phone No:</h3>
        <ol>
          <li>9910384921</li>
          <li>9564783638</li>
        </ol>

        <h3>Address:</h3>
        <p>Ramnagar 5th cross near Ranka groups<br />Electronic City, Bangalore.</p>

        <h3>Feedback:</h3>
        <p>Have questions or feedback? Reach out to our support team at <strong>support@healthconnect.com</strong></p>
        <p>Thank you for choosing HealthConnect for your healthcare needs!</p>
      </div>
    </div>
  );
}

export default ContactPage;
