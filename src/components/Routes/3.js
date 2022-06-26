import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import GeneralAccordion from './GeneralAccordion'
import './routes.css'

const Route3 = () => {
  let navigate = useNavigate();
  const routeChange = () =>{ 
    let path = '/missions'; 
    navigate(path);
  }
  return(
    <div>
      <h1>Short Route - South</h1>
      <div>
      <Box sx={{pt: 5}}>
        <h3>Location 1</h3>
        <GeneralAccordion header='Hint 1' description="Welcome to Singapore's only well-preserved coastal fort"/>
        <GeneralAccordion header='Hint 2' description='There are audio tracks playing to simulate sounds in 1942'/>
        <GeneralAccordion header='Hint 3' description='You can learn more about the life of Prisoners of War here'/>
        <GeneralAccordion header='Answer' description='Fort Siloso'/>
      </Box>
      <Box sx={{pt: 5}}>
        <h3>Location 2</h3>
        <GeneralAccordion header='Hint 1' description='There is a rope bridge that connects you to the Southernmost Point of Continental Asia'/>
        <GeneralAccordion header='Hint 2' description="Enjoy Singapore's first floating aqua park"/>
        <GeneralAccordion header='Answer' description='Palawan Beach'/>
      </Box>

      <Box sx={{pt: 5}}>
        <h3>Location 3</h3>
        <GeneralAccordion header='Hint 1' description='This place dates back to 1885'/>
        <GeneralAccordion header='Hint 2' description='During the world war, this place was used to house Prisoners of War'/>
        <GeneralAccordion header='Hint 3' description='This is a labyrinth of military bunkers and underground tunnels built by the British in 1879'/>
        <GeneralAccordion header='Answer' description='Fort Serapong'/>
      </Box>

      </div>
      <Box sx={{pt: 7.5, pb: 7.5}}>
        <Button variant="contained" onClick={routeChange}>Back</Button>
      </Box>
    </div>
  );
}

export default Route3;