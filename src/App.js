import React from 'react';
import Aos from 'aos';
import './imp files/bootstrap.min.css';
import NavBar from './Components/Navbar/NavBar';
import Home from './Components/Home/Home';
import './App.css'; // Import your CSS file
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Clients from './Components/Clients/Clients';
import Team from './Components/Team/Team';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login System/Forms/Login';
import Register from './Components/Login System/Forms/Register';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './Components/Login System/Admin/AdminLogin';
import { ToastContainer } from 'react-toastify';
import MainNavbar from './Main Components/Navbarr/MainNavbar';
import Header from './Main Components/Header/Header';
import Profile from './Components/Login System/profile/profile';
import Maintenance from './Main Components/Tools/notready/Maintenance';
const App = () => {
  return (



    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <MainNavbar />
              <Header />
            </>
          } />
          <Route path="/thedre" element={
            <>
              <NavBar />
              <Home /> {/* Home component is only visible at root path */}
              <About /> {/* About component is only visible at root path */}
              <Services />
              <Clients />
              <Team />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} /> {/* AdminLogin is routed */}
          <Route path='/register' element={<Register />} />
          <Route path='/login/adminLogin' element={<AdminLogin />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin/dashboard' element={<Maintenance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
