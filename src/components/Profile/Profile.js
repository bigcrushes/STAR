import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A20#27' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));


const Profile = () => {
  return(
    <div>
      <Box sx={{ pt: 10, pb: 2.5, alignItems:'center', display:'flex', justifyContent:"center"}}>
      <Avatar
        alt="Randall"
        src="./defaultprofile.png"
        sx={{ width: 100, height: 100}}
      />
      </Box>
      <h1>Randall</h1>
      <h7>Member since: 24 Dec 2021</h7>
      <Box sx={{ flexGrow: 1, pt: 5}}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
            <h2>Short Route - East</h2>
            <h7>Completed 01 April 2022</h7>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <h2>Short Route - North</h2>
            <h7>Completed 06 May 2022</h7>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <h2>Short Route - South</h2>
            <h7>Completed 15 May 2022</h7>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default Profile;