import { useEffect, useState, } from "react";
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router';
import Grid from '@mui/material/Grid';
import './styles.css';




function Edit(){
    const [card, setCard] = useState('')

    let { id } = useParams();
    
    // const cardEditRef = useRef();

   console.log('card', card)

    useEffect(()=>{
        console.log('useEffects-1')
        const getOneCard = async () => {
            const res = await fetch(`http://localhost:4030/favorites/edit/${id}`);
            const data = await res.json();
            return setCard(data);
           
        }
        getOneCard()
        console.log(card)
 
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <Grid container component='main' >
           {!card ? <p></p> :
            card.map((c) => (
            <Grid item container sx={10} className='imagenEditor' justifyContent='center' alignContent='center' >
                <img 
                className='imgEdit'
                src={`http://localhost:4030/public/${c.img}`} 
                alt={c.img} 
                key={c._id}
                 />
                
            </Grid>
            
        
        ))} 
        
        </Grid>
    );
}
export default Edit;