import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Profile from './components/Profile/Profile';
import Missions from './components/Missions/Missions';
import Route1 from './components/Routes/1';
import Box from '@mui/material/Box';
import Home from './components/home';
import { useAuth } from "./hooks/useAuth";



function App() {
  
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              S.T.A.R
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/missions'}>
                    Missions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/profile'}>
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <div className="auth-wrapper">
          <div className="auth-inner">
          <Box sx={{pt: 7.5}}>
          
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route exact path="/profile" element={<Profile/>}/>
              <Route exact path="/missions" element={<Missions/>}/>
              <Route exact path="/1" element={<Route1/>}/>
            </Routes>
            </Box>
          </div>
        </div>
      </div> 
    </Router>
  )
}
export default App