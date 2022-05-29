import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import { useNavigate } from "react-router-dom";
import { alpha, styled } from '@mui/material/styles';

function Buttons(props) {
    let navigate = useNavigate();
    const routeChange = () =>{ 
        let path = props.link; 
        navigate(path);
    }
    return (
        <Box m={5} pt={5} display='inline'>
            <Button variant="contained" onClick={routeChange}
            style={{
                borderRadius: 35,
                backgroundColor: "#21b6ae",
                padding: "18px 36px",
                fontSize: "18px"
            }}>
                {props.text}
            </Button>
        </Box>
    )
}

export default Buttons;

