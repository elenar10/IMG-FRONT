import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './style.css'
import Logo from './assets/favoredit.png';


function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleEditor = () => {
    console.log("go to edit page");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogin = () => {
    console.log('url')
    // const url = "http://localhost:3000/login";
    // window.open(url);
  };
  const handleSignIn = () => {
    console.log('url')
    // const url = "http://localhost:3000/login";
    // window.open(url);
  };
  return (
    <Box sx={{flexDirection: "row",
      flexWrap: "nowrap",
      alignContent: "center",
      justifyContent: "space-around",
      alignItems: "center", 
      boxShadow: "none"}}>
      
      <AppBar position="static" color="transparent" >
        <Toolbar sx={{justifyContent:"space-between", alignItems:"center"}}>
        <img
          className="logo"
          src={Logo}
          alt="logo"
        />
         
         <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleEditor}
                color="inherit"
              >
                <AddPhotoAlternateIcon />
              </IconButton>
            
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleSignIn}>Registro</MenuItem>
                <MenuItem onClick={handleLogin}>Login</MenuItem>
              </Menu>
              </Box>
        </Toolbar>
      </AppBar>
    </Box>
        
      
        
 
        
  );
}
export default Header;