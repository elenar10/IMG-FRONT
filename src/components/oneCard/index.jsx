import * as React from 'react';
import './style.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';




export default function OneCard(props) {

const handleFocus = (e) =>{
  console.log(e)
 
}
   
  

  return (
    <Card sx={{ maxWidth: '250px', maxHeight:'750px',  flexWrap:'wrap', justifyContent: 'center', alignItems: 'center', }} >

      <CardMedia
        component="img"
        image={`http://localhost:4030/public/${props.imagen}`}
        className="image_card"
        alt={props.titulo}
        // onClick={() => <Link to={`/details/${props.id}`}></Link> }
        onClick={handleFocus}
        />
      
      <CardContent  sx={{justifyContent:'center', alignItems: 'center', paddingBottom:'0px'}}>
      <Typography variant="h6" color="secondaryText" noWrap>
          {props.titulo} 
        </Typography>
        <Typography variant="p" color="text.secondary">Usuario:  
          {props.email}
        </Typography>
      </CardContent>
     
     
    </Card>
  );
}
