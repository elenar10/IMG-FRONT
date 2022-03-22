import { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import './styles.css';
import { Typography } from "@mui/material";




function Edit(){
    const [card, setCard] = useState('')
    let { id } = useParams();
    console.log('data card', card)
    useEffect(()=>{
        const getOneCard = async () => {
            const res = await fetch(`http://localhost:4030/favorites/edit/${id}`);
            const data = await res.json();
            return setCard(data);
           
        }
        getOneCard()
    }, []);

    return(
        <Grid container component='main' >
           {card.map((c) => (
            <Grid item container sx={10} className='imagenEditor' justifyContent='center' alignContent='center' >
                <img 
                className='imgEdit'
                src={`http://localhost:4030/public/${c.img}`} 
                alt={c.img} 
                 />
                
            </Grid>
            
        
        ))} 
        </Grid>
    );
}
export default Edit;