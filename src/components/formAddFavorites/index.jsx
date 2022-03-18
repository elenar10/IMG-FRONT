import * as React from "react";
import './style.css';
import Popover from "@mui/material/Popover";
import { Button, InputBase } from "@mui/material";
import TextField from "@mui/material/TextField";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import IconButton from '@mui/material/IconButton';

function BasicPopover () {
  const [anchorEl, setAnchorEl] = React.useState(null);

const handleSend = (e) => {
    e.preventDefault();
}
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <React.Fragment>
        <IconButton
                size="large"
                aria-label="add new images"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
                aria-describedby={id}
              >
                <AddPhotoAlternateIcon />
              </IconButton>
   
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        sx={{width: "400px", height: "auto", flexDirection: "column",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center" }}
        className='paper__form'
      >
          {/* <Box
    
          sx={{
            "& .MuiTextField-root": { m: 1, flexDirection: "column",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center"  }
          }}
          noValidate
          autoComplete="off"
        > */}
          <form id="create-course-form" onSubmit={handleSend} className='form__favorites'>
        
        
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Nombre"
            />
            <InputBase type="file"  name="imagen" accept="image/jpep, image/png" required margin="normal"/>
            <Button 
            // disabled={inputValue === '' ? true : false}
                  variant='contained' type='submit' color='error'>Añadir</Button>
   
          </form>
        {/* </Box> */}
      </Popover>
      </React.Fragment>
  );
}
export default BasicPopover;