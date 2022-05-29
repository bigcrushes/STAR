import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Missions = () => {
  let navigate = useNavigate();
  const routeChange = () =>{ 
    let path = '/missions'; 
    navigate(path);
  }
  return(
    <div>
      <h1>Short Route - East</h1>
        <Button variant="contained" onClick={routeChange}>Back</Button><br></br>
    </div>
  );
}

export default Missions;