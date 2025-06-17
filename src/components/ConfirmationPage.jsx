import { Link } from 'react-router-dom';

function ConfirmationPage() {
  return (
    <div className="confirmation-page">
      <style>{`
        .confirmation-page {
          margin: 0;
          height: 100vh;
          background: linear-gradient(to right, #d9a7c7, #fffcdc);
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .message-box {
          background: rgba(255, 255, 255, 0.85);
          padding: 40px 60px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          text-align: center;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(0, 0, 0, 0.05);
          color: #333;
          max-width: 400px;
          width: 100%;
          animation: fadeIn 0.8s ease-out;
        }
        .message-box h1 {
          font-size: 24px;
          margin-bottom: 25px;
          color: #222;
        }
        .message-box a {
          display: inline-block;
          padding: 12px 26px;
          background-color: #28a745;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .message-box a:hover {
          background-color: #218838;
          transform: scale(1.05);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="message-box">
        <h1>✅ Appointment Successfully Scheduled!</h1>
        <Link to="/user-home">Return to Home</Link>
      </div>
    </div>
  );
}

export default ConfirmationPage;
