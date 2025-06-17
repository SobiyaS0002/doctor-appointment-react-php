import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost/doctor-backend/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    });

    const resultText = await response.text();
    if (resultText.includes("Login success")) {
      navigate("/user-home");
  } else {
    alert("Invalid username or password");
    }
  };

  return (
    <>
      <style>{`
        body {
          background-image: url('https://t3.ftcdn.net/jpg/02/16/47/22/360_F_216472247_cT66WDoS0fp1s3wC7eaykMJNDGVbOBPq.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          font-family: 'Segoe UI', sans-serif;
        }
        .container {
          background: rgba(255, 255, 255, 0.46);
          backdrop-filter: blur(10px);
          width: 300px;
          padding: 40px;
          margin: 10% auto;
          border-radius: 25px;
          text-align: center;
        }
        input {
          width: 80%;
          padding: 10px;
          margin: 15px 0;
          border: 2px solid #ccc;
          border-radius: 40px;
        }
        button {
          width: 90%;
          padding: 12px;
          background-color: rgb(2, 69, 95);
          color: white;
          font-size: 18px;
          border-radius: 25px;
          border: none;
          cursor: pointer;
        }
        a {
          color: white;
          text-decoration: underline;
        }
      `}</style>

      <form onSubmit={handleSubmit}>
        <div className="container">
          <h2 style={{ color: "rgb(2, 69, 95)" }}>Login</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            onChange={handleChange}
          /><br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          /><br />
          <button type="submit">Login</button>
          <p style={{ color: "black" }}>
            Don't have an account?
            <a href="/signup" style={{ color: "black" }}> Sign up</a>
          </p>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
