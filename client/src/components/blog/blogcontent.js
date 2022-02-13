import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Grid } from '@mui/material';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

export default function MultiActionAreaCard(props) {

  const params=useParams();
  const id=params.id;
  const [postres,setRes]=useState('');
  const [authres,setAuth]=useState('');
  const [tags,setTags]=useState([]);
  const cover='http://localhost:5000/posts/'+postres.image;
  const fetchData=async ()=>{
        axios.post('http://localhost:5000/blog/content',{id:id}).then(res=>{
            
            setRes(res.data.post);
            setTags(res.data.tags);
            axios.post('http://localhost:5000/blog/author',{id:res.data.post.authorid}).then(Ares=>{
                setAuth(Ares.data)
            })
        })
    
    }

  useEffect(()=>{
    fetchData();
  },[])

  return (
      <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>

    <Card>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {postres.title}
          </Typography>
          <CardMedia
          component="img"
          height="240"
          image={cover}
          alt={postres.title}
        />
          <Typography variant="body2" color="text.secondary">
            {parse(`${postres.post}`)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={1}></Grid>
      </Grid>
  );
}
