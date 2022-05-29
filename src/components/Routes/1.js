import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import GeneralAccordion from './GeneralAccordion'
import './routes.css'

const Route1 = () => {
  let navigate = useNavigate();
  const routeChange = () =>{ 
    let path = '/missions'; 
    navigate(path);
  }
  return(
    <div>
      <h1>Short Route - East</h1>
      <div>
      <Box sx={{pt: 5}}>
        <h3>Location 1</h3>
        <GeneralAccordion header='Hint 1' description='The place where extinct animals go overseas'/>
        <GeneralAccordion header='Hint 2' description='It’s a 1 km walking path!'/>
        <GeneralAccordion header='Hint 3' description='It features eleven types of dinosaurs'/>
        <GeneralAccordion header='Answer' description='Changi Jurassic Mile!'/>
      </Box>
      <Box sx={{pt: 5}}>
        <h3>Location 2</h3>
        <GeneralAccordion header='Hint 1' description='The literal gem of the East'/>
        <GeneralAccordion header='Hint 2' description='The 5th floor of this place offers an attraction featuring Walking Nets and a Mirror Maze!'/>
        <GeneralAccordion header='Hint 3' description='A brilliant place for plane watching'/>
        <GeneralAccordion header='Hint 4' description='This places boasts a 40m-tall Rain Vortex!'/>
        <GeneralAccordion header='Answer' description='Jewel Changi Airport'/>
      </Box>

      <Box sx={{pt: 5}}>
        <h3>Location 3</h3>
        <GeneralAccordion header='Hint 1' description='Along this path, you can see boats and ferries heading to offshore islands'/>
        <GeneralAccordion header='Hint 2' description='It features an area named Sunset walk where you can catch a good view of the sunset'/>
        <GeneralAccordion header='Hint 3' description='This is a 2.2km boardwalk!'/>
        <GeneralAccordion header='Answer' description='Changi Boardwalk'/>
      </Box>

      </div>
      <Box sx={{pt: 7.5, pb: 7.5}}>
        <Button variant="contained" onClick={routeChange}>Back</Button>
      </Box>
    </div>
  );
}

export default Route1;