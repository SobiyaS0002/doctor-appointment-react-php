import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        try {
            const response = await fetch("http://localhost/doctor-backend/register.php", {
                method: "POST",
                body: new FormData(form),
                mode: "cors",
            });

            if (!response.ok) {
                throw new Error("Network response was not ok: " + response.status);
              
            }

            navigate("/appointment"); // 🔹 Redirect to appointment on success
        } catch (err) {
            setError("Failed to submit. Check backend or server connection."); // 🔹 Show user-friendly error
        }
    };

    return (
        <div className="form-container">
            <style>{`
        body {
          background-image: url(https://s.tmimgcdn.com/scr/1200x750/296200/premium-vector-background-images--high-quality-background--modern-hd-background-images_296286-original.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          font-family: Arial;
        }
        .form-container {
          max-width: 500px;
          margin: 60px auto;
          background-color: rgba(255, 255, 255, 0.5);
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .form-container h2 {
          text-align: center;
        }
        label {
          display: block;
          margin-top: 15px;
        }
        input, select {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
        }
        button {
          margin-top: 20px;
          width: 100%;
          padding: 12px;
          background-color: #28a745;
          color: white;
          border: none;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #218838;
        }
      `}</style>

            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="error">{error}</div>}
                <label>Full Name:</label>
                <input type="text" name="fullname" required />

                <label>Phone:</label>
                <input type="text" name="phone" required />

                <label>Gender:</label>
                <select name="gender" required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <label>Age:</label>
                <input type="number" name="age" required />

                <label>Email (optional):</label>
                <input type="email" name="email" />

                <label>Address:</label>
                <input type="text" name="address" required />

                <label>City:</label>
                <input type="text" name="city" required />

                <label>State:</label>
                <input type="text" name="state" required />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;