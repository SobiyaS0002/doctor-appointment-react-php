import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const response = await fetch("http://localhost/doctor-backend/signup.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(formData).toString()
    });

    if (response.ok) {
      navigate("/login"); // ✅ Redirects directly
    } else {
      console.log("Signup failed with status:", response.status);
    }
  } catch (err) {
    console.error("Error:", err);
  }


  };

  return (
    <>
      <style>{`
        body {
          background: url("https://img.freepik.com/premium-photo/stethoscope-tablet-heart-medicine-blue-surface-top-view_185193-6325.jpg");
          background-size: cover;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: relative;
        }
        body::after {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0, 0, 0, 0.3);
          z-index: -1;
        }
        h2 {
          color: white;
          margin-bottom: 20px;
        }
        form {
          background-color: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          width: 300px;
        }
        form input {
          padding: 12px;
          margin: 10px 0;
          border: none;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.6);
        }
        form input[type="submit"] {
          background-color: blue;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        form input[type="submit"]:hover {
          background-color: #43a047;
        }
        form p {
          margin-top: 15px;
          text-align: center;
          color: white;
        }
        form a {
          color: #007bff;
          text-decoration: underline;
          margin-left: 5px;
        }
        .message {
          margin-top: 15px;
          text-align: center;
          font-weight: bold;
        }
        .success { color: green; }
        .error { color: red; }
      `}</style>

      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <input type="password" name="confirm_password" placeholder="Confirm Password" required onChange={handleChange} />
        <input type="submit" value="Sign Up" />
        <p>Already have an account? <Link to="/login">Login</Link></p>

      </form>

      {message.text && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}
    </>
  );
}

export default SignupPage;
