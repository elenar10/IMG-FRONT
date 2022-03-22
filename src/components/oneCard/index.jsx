import * as React from 'react';
import './style.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';
import { useHistory } from "react-router";
// import { useState, useContext } from 'react';


export default function OneCard(props) {
  const history = useHistory();
  // const [cards, setCards] = useState([]);
  // const [favorite, setFavoriteStorage] = useContext(FavoriteContext);

const handleClickEdit = () =>{
  history.push(`/edit/${props.id}`)
 
}
const handleFocus = (e) =>{
  console.log(e)
  
 
}
   
  

  return (
    <Card
      className="cardFavorite"
      sx={{
        maxWidth: "250px",
        maxHeight: "750px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        image={`http://localhost:4030/public/${props.imagen}`}
        className="image_card"
        alt={props.titulo}
        // onClick={() => <Link to={`/details/${props.id}`}></Link> }
        onClick={handleFocus}
        // onSelect={(e)=> console.log('sekecuiba')}
      />

      <CardContent
        sx={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "0px",
        }}
      >
        <Typography variant="h6" color="secondaryText" noWrap>
          {props.titulo}
        </Typography>
        <Typography variant="p" color="text.secondary">
          Usuario:
          {props.email}
        </Typography>
      </CardContent>
      <Stack direction="raw" justifyContent="flex-end">
        <IconButton aria-label="edit" onClick={handleClickEdit}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Card>
  );
}
