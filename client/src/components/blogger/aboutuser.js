import React,{useState,useEffect} from 'react';
import { Grid,Typography,Card, CardMedia } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Articles from '../blog/articles';


const About=()=>{

    const [articles,setArticels]=useState([]);
    const [author,setAuthor]=useState([]);
    const params=useParams();
    const id=params.id;
    console.log(id);
    const fetchData=async()=>{
        await axios.post('http://localhost:5000/',{id:id}).then(res=>{
            setArticels(res.data);
        })
        axios.post('http://localhost:5000/blog/author',{id:id}).then(res=>{
            setAuthor(res.data)
            console.log(res.data);
        })
    }

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <Grid container spacing={2}>
            <Grid item xs={5}>
                <Card sx={{margin:'10px'}}>
                <CardMedia
                    component="img"
                    height="200"
                    image={`http://localhost:5000/${author.image}`}
                    alt="profile photo"
                />
                <Typography variant='h2' sx={{margin:'10px 0px 10px 5px'}}>
                    {author.name}
                </Typography>
                <Typography variant='h5' sx={{margin:'10px 0px 10px 5px'}}>
                    Number of Published articles : 
                    {articles.length===0? '-/-': articles.length}
                </Typography>
          </Card>
            </Grid>
            <Grid item xs={7} sx={{width:'100%'}}>
                <Articles List={articles}/>
            </Grid>
        </Grid>
    );
}

export default About;