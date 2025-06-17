import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AppointmentPage() {

    const navigate = useNavigate();
    const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

   try {
    const response = await fetch("http://localhost/doctor-backend/appointment.php", {
      method: "POST",
      body: new FormData(form),
    });

    const result = await response.text();

    if (result.includes("Appointment booked")) {
      navigate("/confirmation");
    } else {
      setError("Something went wrong. Try again.");
    }
  } catch (err) {
    setError("Server error. Check connection.");
  } 
  };

  return (
    <div className="container">
      <style>{`
        body {
          background-image: url(https://cdn.create.vista.com/api/media/small/410222868/stock-photo-stethoscope-calendar-page-date-wood-table-background-doctor-appointment-medical);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          font-family: Arial, sans-serif;
        }
        .container {
          background-color: rgba(235, 223, 223, 0.753);
          border-radius: 15px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.516);
          margin: 80px auto;
          width: 500px;
          padding: 40px;
          font-size: 18px;
          font-style: italic;
        }
        .container label,
        .container input,
        .container select {
          display: block;
          width: 100%;
          margin-bottom: 15px;
        }
        .container input,
        .container select {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #c2baba;
        }
        button {
          width: 100%;
          padding: 12px;
          background-color: #25bc8a;
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #1077ff;
        }
      `}</style>

      <form onSubmit={handleSubmit}>
        <center>
          <h1 style={{ fontSize: '50px', color: 'rgb(1, 36, 50)' }}><u>Appointment</u></h1>

          <label>Enter Name:</label>
          <input type="text" name="name" required />

          <label>Enter Email:</label>
          <input type="email" name="email" required />

          <label>Enter Disease:</label>
          <input type="text" name="disease" required />

          <label htmlFor="Doctors">Select Doctor:</label>
          <select name="doctor" id="Doctors" required>
            <option value="">Select your needed Doctor</option>
            <option value="Cardiologist [9:00 am To 3:00 pm]">Cardiologist [9:00 am To 3:00 pm]</option>
            <option value="Dermatology [9:00 am To 6:00 pm]">Dermatology [9:00 am To 6:00 pm]</option>
            <option value="Anesthesia [9:00 am To 2:00 pm]">Anesthesia [9:00 am To 2:00 pm]</option>
            <option value="Psychiatrists [9:00 am To 5:00 pm]">Psychiatrists [9:00 am To 5:00 pm]</option>
            <option value="Family Physicians [9:00 am To 9:00 pm]">Family Physicians [9:00 am To 9:00 pm]</option>
          </select>

          <label>Date:</label>
          <input type="date" name="appointment_date" required />

          <button type="submit" style={{ width: '100px', borderRadius: '25px', backgroundColor: 'rgb(134, 220, 254)', fontSize: '20px' }}>
            Fix
          </button>
        </center>
      </form>
    </div>
  );
}

export default AppointmentPage;
