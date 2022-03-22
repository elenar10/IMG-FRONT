import React from 'react';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";


function Home() {
    
    const [cards, setCards] = useState([]);
    const type = props.name;
    console.log(type);
    useEffect(()=>{
        const getCards = async () => {
            const res = await fetch(`http://localhost:4040/favorites/${type}`);
            const data = await res.json();
            return setCards(data);
           
        }
        getCards()
    }, [type]);
  return (
    <Box component='section' sx={{ display: 'flex', flexWrap:'wrap', flexDirection:'row', justifyContent:'center', gap: '20px', alignContent:'center', pb:'4em'}} >
 
    {cards.map((c)=>  <OneCard titulo={c.name} key={c._id}  precio={c.price} descripcion= {c.description} imagen={c.img}></OneCard>)}

</Box>
  );
}
export default Home;