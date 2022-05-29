import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Profile from './components/Profile/Profile';
import Missions from './components/Missions/Missions';
import Route1 from './components/Routes/1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
    <br></br>
      <Routes>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/missions" element={<Missions/>}/>
          <Route exact path="/1" element={<Route1/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
