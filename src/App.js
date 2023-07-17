
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ReceptionistDashboard from './components/Receptionist Dashboard/ReceptionistDashboard';
import AppointmentDetails from './components/Appointment Details/AppointmentDetails';
import { useEffect, useState } from 'react';
import Invoice from './components/Invoice/Invoice';
import AllEmployees from './components/AllEmployees/AllEmployees';
import ModifyBooking from './components/ModifyBooking/ModifyBooking';
import BillingSummary from './components/BillingSummary/BillingSummary';
import BookAppointment from './components/BookAppointment/BookAppointment';
// import { ToastContainer } from 'react-toastify';



function App() {
  const [islogin, setislogin] = useState(false);
  useEffect(() =>{
      localStorage.clear()
  })
  return (
    <>
      <BrowserRouter>
        <Navbar islogin={islogin} />
        <Routes>
          <Route path='/login' element={<Login setislogin={setislogin} />} />
          <Route path='/receptionist_dashboard' element={<ReceptionistDashboard />} />
          <Route path='/appointmentdetails' element={<AppointmentDetails />} />
          <Route path='/invoice' element={<Invoice />} />
          <Route path='/allemployees' element={<AllEmployees />} />
          <Route path='/modifybooking' element={<ModifyBooking />} />
          <Route path='/billingsummary' element={<BillingSummary />} />
          <Route path='/book_appointment' element={<BookAppointment />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
