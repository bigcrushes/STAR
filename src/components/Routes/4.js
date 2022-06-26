import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import GeneralAccordion from './GeneralAccordion'
import './routes.css'

const Route4 = () => {
  let navigate = useNavigate();
  const routeChange = () =>{ 
    let path = '/missions'; 
    navigate(path);
  }
  return(
    <div>
      <h1>Short Route - West</h1>
      <div>
      <Box sx={{pt: 5}}>
        <h3>Location 1</h3>
        <GeneralAccordion header='Hint 1' description='In progress'/>
        <GeneralAccordion header='Answer' description='In progress'/>
      </Box>
      <Box sx={{pt: 5}}>
        <h3>Location 2</h3>
        <GeneralAccordion header='Hint 1' description='In progress'/>
        <GeneralAccordion header='Answer' description='In progress'/>
      </Box>

      <Box sx={{pt: 5}}>
        <h3>Location 3</h3>
        <GeneralAccordion header='Hint 1' description='In progress'/>
        <GeneralAccordion header='Answer' description='In progress'/>
      </Box>

      </div>
      <Box sx={{pt: 7.5, pb: 7.5}}>
        <Button variant="contained" onClick={routeChange}>Back</Button>
      </Box>
    </div>
  );
}

export default Route4;