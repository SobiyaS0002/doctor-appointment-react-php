function HomePage() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
          text-decoration: none;
        }

        body {
          background-image: url(https://img.freepik.com/premium-photo/stethoscope-tablet-heart-medicine-blue-surface-top-view_185193-6325.jpg);
          background-size: cover;
          background-position: center;
          height: 100vh;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .title-container {
          background: rgba(0, 0, 0, 0.5);
          padding: 30px 40px;
          border-radius: 10px;
          margin-bottom: 50px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }

        .title-container h1 {
          font-size: 48px;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .title-container h2 {
          font-size: 28px;
          color: #d6ecff;
        }

        .button-group {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .menu-button {
          padding: 15px 35px;
          font-size: 20px;
          background: rgba(0, 123, 255, 0.85);
          border: none;
          border-radius: 30px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
        }

        .menu-button:hover {
          background: rgba(0, 100, 210, 0.95);
          transform: scale(1.05);
        }

        @media (max-width: 600px) {
          .title-container h1 {
            font-size: 36px;
          }

          .title-container h2 {
            font-size: 22px;
          }

          .menu-button {
            width: 80%;
            font-size: 18px;
          }

          .button-group {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>

      <div className="title-container">
        <h1>Welcome to</h1>
        <h2>Online Doctor Appointment</h2>
      </div>
      <div className="button-group">
        {/* Replace with React Router later */}
        <a href="signup.php" className="menu-button">Get started</a>
      </div>
    </>
  );
}

export default HomePage;
