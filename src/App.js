import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import UserHomePage from './components/UserHomePage';
import RegisterPage from './components/RegisterPage';
import AppointmentPage from './components/AppointmentPage';
import ConfirmationPage from './components/ConfirmationPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-home" element={<UserHomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutPage />} />

      </Routes>
    </Router>
  );
}

export default App;
