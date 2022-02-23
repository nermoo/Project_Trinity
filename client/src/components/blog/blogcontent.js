import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Grid, IconButton,Chip, Avatar } from '@mui/material';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import  BookmarkAddOutlinedIcon  from '@mui/icons-material/BookmarkAddOutlined';
import Follow from './../reader/follow';
import { useSelector } from 'react-redux';

export default function MultiActionAreaCard(props) {

  const params=useParams();
  const id=params.id;
  const [postres,setRes]=useState('');
  const [authres,setAuth]=useState('');
  const following=useSelector(state=>state.following);
  const [tags,setTags]=useState([]);
  const cover='http://localhost:5000/posts/'+postres.image;
  const profilepic='http://localhost:5000/'+authres.image;
  const fetchData=async ()=>{
        axios.post('http://localhost:5000/blog/content',{id:id}).then(res=>{
            
            setRes(res.data.post);
            setTags(res.data.tags);
            axios.post('http://localhost:5000/blog/author',{id:res.data.post.authorid}).then(Ares=>{
                setAuth(Ares.data);
                console.log(authres);
            })
        })
    
    }

    const addBookmark=()=>{
      const user=localStorage.getItem('id');
      axios.post('http://localhost:5000/blog/saved',{userid:user,postid:id}).then(res=>{
          console.log(res.data);
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
        
        <CardContent>
          <Grid container sx={{marginBottom:'10px'}}>
            <Grid item sx={{marginTop:'auto',marginBottom:'auto',paddingLeft:'10px'}} xs={6}>
            <Grid container>
              <Grid item xs={1}>
                <Avatar src={profilepic}/>
              </Grid>
              <Grid item xs={11} sx={{marginTop:'auto',marginBottom:'auto',paddingLeft:'10px'}}>
                      <Typography >{authres.name}</Typography>
              </Grid>
              </Grid>
            
            </Grid>
            <Grid item xs={5}>
              <Follow id={postres.authorid} name={authres.name} list={following}/>
            </Grid>
            <Grid item xs={1}>
            <IconButton onClick={addBookmark}>
                 <BookmarkAddOutlinedIcon />
            </IconButton>
            </Grid>
          </Grid>
          
          <CardMedia
          component="img"
          height="240"
          image={cover}
          alt={postres.title}
        />
        <Typography gutterBottom variant="h5" component="div">
            {postres.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {parse(`${postres.post}`)}
          </Typography>
        </CardContent>
      <CardActions>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <Grid container>
            {tags.map((tag)=>(
                <Grid item sx={{marginTop:'auto',marginBottom:'auto', paddingRight:'5px'}}>
                    <Chip label={tag}></Chip>
                </Grid>
                ))}
            </Grid>
          </Grid> 
          <Grid item xs={4}></Grid>
          <Grid item xs={1}>
        <Button size="small" color="primary">
          Share
        </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={1}></Grid>
      </Grid>
  );
}
