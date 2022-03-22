import { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';



function Edit(){
    const [card, setCard] = useState('')
    let { id } = useParams();

    useEffect(()=>{
        const getOneCard = async () => {
            const res = await fetch(`http://localhost:4030/favorites/edit/${id}`);
            const data = await res.json();
            return setCard(data);
           
        }
        getOneCard()
    }, []);

    return(
        <Grid container component='main'>
            
        <img src={`http://localhost:4030/favorites/edit/${id}`}></img>
        </Grid>
    );
}
export default Edit;