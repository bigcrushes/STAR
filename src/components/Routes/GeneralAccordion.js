import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class GeneralAccordion extends React.Component {
    render() {
        return (
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>{this.props.header}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {this.props.description}
                </Typography>
                </AccordionDetails>
            </Accordion>
        )
    }
}

export default GeneralAccordion;