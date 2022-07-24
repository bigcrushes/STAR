import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { doc, getDoc } from "firebase/firestore";
import { db, useAuth } from "../../hooks/useAuth";
import { updateProfile } from 'firebase/auth';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A20#27' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));




const Profile = () => {
  const { user } = useAuth();
  const [name, setName] = useState("<Set Name>");
  console.log(user);
  useEffect(() => {
    if (user?.displayName) {
      setName(user.displayName);
    }
  }, [user]);

  /* Firebase storing stuff */
  const [tasks, setTasksState] = useState([{description: "Short Route - East", isComplete: false },
  {description: "Short Route - North", isComplete: false },
  {description: "Short Route - South", isComplete: false },
  {description: "Short Route - West", isComplete: false },
  {description: "Long Route - East/West", isComplete: false },
  {description: "Long Route - North/South", isComplete: false }]);


  useEffect(() => {
    async function fetchData() {
      const docSnapshot = await getDoc(doc(db, "tasks", user?.uid));
      if (docSnapshot.exists()) {
        setTasksState(docSnapshot.data().tasks);
      } else {
        setTasksState([{description: "Short Route - East", isComplete: false },
                       {description: "Short Route - North", isComplete: false },
                       {description: "Short Route - South", isComplete: false },
                       {description: "Short Route - West", isComplete: false },
                       {description: "Long Route - East/West", isComplete: false },
                       {description: "Long Route - North/South", isComplete: false }]);
      }
    }
    fetchData();
  }, [user.uid]);

  /* Firebase storing stuff */
  return(
    <div>
      <Box sx={{ pt: 10, pb: 2.5, alignItems:'center', display:'flex', justifyContent:"center"}}>
      <Avatar
        alt="Randall"
        src="./defaultprofile.png"
        sx={{ width: 100, height: 100}}
      />
      </Box>
      <h1>{" "}
        <strong
          role="button"
          onClick={() => {
            const newName = prompt("What is your name?", name);
            setName(newName);
            updateProfile(user, {
              displayName: newName
            })
          }}
        >
          {name || "<set a name>"}
        </strong>
        </h1>
      <h7>Member since: {user?.metadata.creationTime}</h7>
      <Box sx={{ flexGrow: 1, pt: 5}}>
      <Grid container spacing={3}>
      {tasks.map((task, index) => (
        ( task.isComplete &&
          <Grid item xs>
          <Item>
            <h2>{task.description}</h2>
            <h7>Completed: <br/>{task.timeCompleted}</h7>
          </Item>
        </Grid>
        )
        ))}
        
      </Grid>
    </Box>
    </div>
  );
}

export default Profile;