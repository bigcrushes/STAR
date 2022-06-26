import {useState, React} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, withRouter } from 'react-router-dom'
import Login from './components/Login/login.component'
import SignUp from './components/Login/signup.component'
import Profile from './components/Profile/Profile';
import Missions from './components/Missions/Missions';
import Route1 from './components/Routes/1';
import Route2 from './components/Routes/2';
import Route3 from './components/Routes/3';
import Route4 from './components/Routes/4';
import Route5 from './components/Routes/5';
import Route6 from './components/Routes/6';
import Box from '@mui/material/Box';
import MenuItem from "@material-ui/core/MenuItem";
import Home from './components/home';
import { useAuth } from "./hooks/useAuth";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';


function App() {
  const { user, signout } = useAuth();
  
  return (
    <Router>
      <div className="App">
        <AppShell/>
        
        <div className="auth-wrapper">
          <div className="auth-inner">
          <Box sx={{pt: 7.5}}>
            
              <Routes>
                <Route exact path="/" element={<Home/>}  />
              </Routes>
              {!user &&
                <Routes>
                
                  <Route exact path="/sign-in" element={<Login />} />
                  <Route exact path="/sign-up" element={<SignUp />} />
                </Routes>
              }
              {user &&
                <Routes>
                  <Route exact path="/profile" element={<Profile/>} />
                  <Route exact path="/missions" element={<Missions/>}/>
                  <Route exact path="/1" element={<Route1/>}/>
                  <Route exact path="/2" element={<Route2/>}/>
                  <Route exact path="/3" element={<Route3/>}/>
                  <Route exact path="/4" element={<Route4/>}/>
                  <Route exact path="/5" element={<Route5/>}/>
                  <Route exact path="/6" element={<Route6/>}/>
                </Routes>
              }
            </Box>
          </div>
        </div>
      </div> 
    </Router>
    
  )
}

function AppShell() {
  const { user, signout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    handleClose();
    signout();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          style={{ flexGrow: 1, textAlign: "left" }}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>STAR</Link>
        </Typography>
        {user && (
          <div>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem><Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link></MenuItem>
              <MenuItem onClick={handleLogout}><Link to="/" style={{ textDecoration: 'none' }}>Log out</Link></MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>

  );
}

export default App