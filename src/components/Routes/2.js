import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import GeneralAccordion from './GeneralAccordion'
import './routes.css'

const Route2 = () => {
  let navigate = useNavigate();
  const routeChange = () =>{ 
    let path = '/missions'; 
    navigate(path);
  }
  return(
    <div>
      <h1>Short Route - North</h1>
      <div>
      <Box sx={{pt: 5}}>
        <h3>Location 1</h3>
        <GeneralAccordion header='Hint 1' description='This place was open quite recently in January 2020!'/>
        <GeneralAccordion header='Hint 2' description='There is an egg cooking station for you to cook eggs!'/>
        <GeneralAccordion header='Hint 3' description='You can take a foot bath here'/>
        <GeneralAccordion header='Answer' description='Sembawang Hot Spring Park!'/>
      </Box>
      <Box sx={{pt: 5}}>
        <h3>Location 2</h3>
        <GeneralAccordion header='Hint 1' description="This place hosts Singapore's only Peranakan-themed kids' indoor playground"/>
        <GeneralAccordion header='Hint 2' description="This place also hosts Singapore's largest multi-installation indoor adventure hub"/>
        <GeneralAccordion header='Hint 3' description='There is even an indoor player vs player airsoft area here!'/>
        <GeneralAccordion header='Answer' description='HomeTeamNS Khatib'/>
      </Box>

      <Box sx={{pt: 5}}>
        <h3>Location 3</h3>
        <GeneralAccordion header='Hint 1' description='There are 5 trails spanning 3.8km here'/>
        <GeneralAccordion header='Hint 2' description='This place is unique for its rich cultural heritage as a site of a former Hainan Village'/>
        <GeneralAccordion header='Hint 3' description='Their Stream and Ferns Trail also allows people to observe a wide variety of ferns and aquatic animals'/>
        <GeneralAccordion header='Answer' description='Thomson Nature Park'/>
      </Box>

      </div>
      <Box sx={{pt: 7.5, pb: 7.5}}>
        <Button variant="contained" onClick={routeChange}>Back</Button>
      </Box>
    </div>
  );
}

export default Route2;