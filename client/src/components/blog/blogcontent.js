import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, IconButton, Chip, Avatar, Snackbar, Alert } from '@mui/material';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import  BookmarkAddOutlinedIcon  from '@mui/icons-material/BookmarkAddOutlined';
import Comments from './comments';
import Audio from './audio';

export default function MultiActionAreaCard(props) {

  const params=useParams();
  const id=params.id;
  const [postres,setRes]=useState('');
  const [authres,setAuth]=useState('');
  const [name,setName]=useState('');
  const [followAlert,setFollowalt]=useState(false);
  const [unfollowAlert,setunFollowalt]=useState(false);
  const [clicked,setClick]=useState(false);
  const [flwbtn,setFlwbtn]=useState('Follow');
  const [followstatus,setFollowingstatus]=useState(false);
  const [tags,setTags]=useState([]);
  const cover='http://localhost:5000/posts/'+postres.image;
  const profilepic='http://localhost:5000/'+authres.image;
  const vertical='top';
  const horizontal='center';
  const fetchData=async ()=>{
    
        await axios.post('http://localhost:5000/blog/content',{id:id}).then(res=>{
            
            setRes(res.data.post);
            setTags(res.data.tags);
            axios.post('http://localhost:5000/blog/author',{id:res.data.post.authorid}).then(Ares=>{
                setAuth(Ares.data);
                setName(Ares.data.name)
                axios.post('http://localhost:5000/follow/status',{reader:localStorage.getItem('id'), author:res.data.post.authorid}).then(fres=>{
                  console.log(fres.data.status);
                  if(fres.data.status===true){
                    console.log('im here');
                    setFollowingstatus(true);
                    setFlwbtn('Following');
        
                  }
                })
            })
        })

    
    }

    const addBookmark=()=>{
      const user=localStorage.getItem('id');
      axios.post('http://localhost:5000/blog/saved',{userid:user,postid:id}).then(res=>{
          console.log(res.data);
      })
  }     
  
  
    const follow= ()=>{
      
      console.log(followstatus);
      if(followstatus===true){
          setFlwbtn('Following');
          axios.post('http://localhost:5000/follow',{follower:localStorage.getItem('id'),following:postres.authorid}).then(res=>{
              console.log(res.data.status);
              if(res.data.status===true){
                  setFollowalt(true)
              }
          })
      }
      if(followstatus===false){
          setunFollowalt(true);
          setFlwbtn('Follow');
          axios.post('http://localhost:5000/follow/unfollow',{follower:localStorage.getItem('id'),following:postres.authorid}).then(res=>{
              console.log(res.data.status);
              
          })
          
      }

      setClick(false);
      
  }

  const handleClick= ()=>{
    setFollowingstatus(status=>!status);
    setClick(true);
    
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setFollowalt(false);
    setunFollowalt(false);
  };

  useEffect(()=>{
    fetchData();
  },[id])

  useEffect(()=>{
    //methna follow status eka true da kyla btn eke name eka change krnda
    if(clicked===true){
      follow();

      console.log('clicked');
    }

  },[clicked])

  return (
    <>
      <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>

    <Card sx={{}}>
        
        <CardContent>
          <Grid container sx={{marginBottom:'10px'}}>
            <Grid item sx={{marginTop:'auto',marginBottom:'auto',paddingLeft:'10px'}} xs={6}>
            <Grid container>
              <Grid item xs={1}>
                <Avatar src={profilepic}/>
              </Grid>
              <Grid item xs={11} sx={{marginTop:'auto',marginBottom:'auto',paddingLeft:'10px'}}>
                      <Typography >{name.charAt(0).toUpperCase() +name.slice(1)}</Typography>
              </Grid>
              </Grid>
            
            </Grid>
            <Grid item xs={5}>
              <Button onClick={handleClick}>{flwbtn}</Button>
              {/* <Follow id={postres.authorid} name={authres.name} list={following} status={followstatus}/> */}
            </Grid>
            <Grid item xs={1}>
            <IconButton onClick={addBookmark}>
                 <BookmarkAddOutlinedIcon />
            </IconButton>
            </Grid>
          </Grid>
          <Audio id={id}/>
          <CardMedia
          component="img"
          height="240"
          image={cover}
          alt={postres.title}
        />
        <Typography sx={{marginTop:'10px'}} gutterBottom variant="h5" component="div">
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
        
          </Grid>
        </Grid>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={1}>
          <Snackbar anchorOrigin={{ vertical, horizontal}} autoHideDuration={3000} open={followAlert} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success"> Now you are following {authres.name}</Alert>
        </Snackbar>
        <Snackbar anchorOrigin={{ vertical, horizontal}} autoHideDuration={3000} open={unfollowAlert} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success"> Successfully unfollowed {authres.name}</Alert>
        </Snackbar>
          </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={11} sx={{marginTop:'10px'}}>
          <Typography sx={{fontSize:'15px'}}>
            Comments
          </Typography>
        </Grid>
      </Grid>
      <Comments id={id}/>
    </>
  );
}
