import { Link } from 'react-router-dom';

function UserHomePage() {
  return (
    <div className="f-body">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          text-decoration: none;
        }
        html { scroll-behavior: smooth; }
        .f-body {
          height: 665px;
          background-image: url('https://www.shutterstock.com/image-photo/doctors-nurse-laptop-night-healthcare-600nw-2256248491.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          font-family: Arial, sans-serif;
        }
        header {
          background-color: rgba(253, 255, 255, 0.883);
          padding: 20px 50px;
        }
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100px;
        }
        .logo h1 {
          color: rgba(103, 154, 232, 0.959);
          font-size: 30px;
        }
        nav {
          display: flex;
          gap: 25px;
        }
        nav a {
          color: rgb(57, 89, 137);
          font-size: 16px;
        }
        nav a:hover {
          text-decoration: overline;
        }
        .portals {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 100px;
          flex-wrap: wrap;
          margin-top: 100px;
          max-height: 500px;
        }
        .portal {
          width: 250px;
          height: 180px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 15px;
          text-align: center;
          padding: 30px 20px;
          color: #2c3e50;
          font-weight: bold;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }
        .portal:hover {
          transform: scale(1.05);
          cursor: pointer;
        }
        .portal p {
          margin: 10px 0 20px;
          font-weight: lighter;
        }
        .first-hos-portal {
          background-image: url('https://www.shutterstock.com/image-photo/doctors-nurse-laptop-night-healthcare-600nw-2256248491.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-color: rgba(120, 161, 222, 0.77);
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-height: 150vh;
          margin-top: 200px;
        }
        .first-hos-portal h2 {
          color: white;
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 40px;
        }
        .plus-layout {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          width: 80%;
          max-width: 800px;
        }
        .hos-grid {
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .hos-grid img {
          height: 150px;
          width: 100%;
          object-fit: cover;
        }
        .hos-content {
          padding: 5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hos-content h3 {
          margin-bottom: 8px;
          color: #2c3e50;
        }
        .hos-content p {
          font-size: 14px;
          color: #555;
        }
      `}</style>

      <header>
        <div className="container">
          <div className="logo">
            <h1>Online Doctor Appointment</h1>
          </div>
          <nav>
            <Link to="/user-home">Home</Link>
            <Link to="/contact-us">Contact-us</Link>
            <Link to="/about-us">About-us</Link>
          </nav>
        </div>
      </header>

      <div className="portals">
        <a href="#1km" className="portal">Within 1km<p>Book an appointment with a doctor within 1km of your location</p></a>
        <a href="#affordable" className="portal">Affordable<p>Get affordable medical services with our partner hospitals</p></a>
        <a href="#clinic" className="portal">Specialized Clinic<p>Get Specific medical services from our partner clinics</p></a>
      </div>

      {/* Sections */}
      {renderSection("1km", "Hospitals within 1km", [
        { name: "VitalPoint Hospital", distance: "1km", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBPyafjazKDZf5AM4jWomg8whp5FKBFf1aQ&s" },
        { name: "MedCare Central", distance: "0.5km", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBPyafjazKDZf5AM4jWomg8whp5FKBFf1aQ&s" },
        { name: "LifeBridge Wellness Hub", distance: "0.8km", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4to0EPuEwTwaGuk7NMG17g9Yvi0QBkBHSKQ&s" },
        { name: "Guardian Health Systems", distance: "1.2km", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBPyafjazKDZf5AM4jWomg8whp5FKBFf1aQ&s" }
      ])}

      {renderSection("affordable", "Affordable hospitals", [
        { name: "BrightPath Hospital", distance: "₹200-₹600", image: "https://c.ndtvimg.com/2024-11/71pmqnbg_cancer-hospitals-in-delhi_295x200_28_November_24.jpg" },
        { name: "CareConnect Health Services", distance: "₹100 - ₹1000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBPyafjazKDZf5AM4jWomg8whp5FKBFf1aQ&s" },
        { name: "Harmony Medical Hub", distance: "₹500 - ₹800", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6v7tXU4DcT9Y39y93cwrZt2mEAhSiOL6zQ&s" },
        { name: "MedCare Central", distance: "₹600 - ₹1200", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFg-6ByXFn0U9WuB2rJyV6blLvLqoxtk-Sg&s" }
      ])}

      {renderSection("clinic", "Specialized Clinic", [
        { name: "Health Haven Clinic", distance: "Gynecologist", image: "https://thumbs.dreamstime.com/b/gynecology-office-hospital-department-68993842.jpg" },
        { name: "CurePlus Medical Center", distance: "Dentist", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3VLU0-AuZaNqKWIMDQrP2sfrs9k9Gh6zzw&s" },
        { name: "WellSpring Clinics", distance: "Ophthalmologist", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvhAor3TXWuNhtpKJXWeGK5LYGFCSeBjiAA&s" },
        { name: "SereneCare Clinic", distance: "Pediatrician", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBPyafjazKDZf5AM4jWomg8whp5FKBFf1aQ&s" }
      ])}
    </div>
  );
}

function renderSection(id, title, hospitals) {
  return (
    <section className="first-hos-portal" id={id}>
      <h2>{title}</h2>
      <div className="plus-layout">
        {hospitals.map((hosp, index) => (
          <div className="hos-grid" key={index}>
            <a href="/register">
              <img src={hosp.image} alt={hosp.name} />
              <div className="hos-content">
                <h3>{hosp.name}</h3>
                <p>{hosp.distance}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserHomePage;
