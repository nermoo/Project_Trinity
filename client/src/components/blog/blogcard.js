import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardMedia, Chip, Grid } from '@mui/material';
import { styled } from '@mui/system';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import axios from 'axios';
import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';


const Title=styled(Typography,{
    name:'Title'
})({
    color:'red',
    marginRight:'auto',
    marginLeft:'auto',
    backgroundColor:'sivler',
    fontSize:'25px'
})
const CoverImage=styled(CardMedia,{
    name:'coverImage'
})({
    marginTop:'auto',
    marginBottom:'auto'
})


export default function BlogCard(props) {


    const [postres,setRes]=useState('');
    const [authres,setAuth]=useState('');
    const [tags,setTags]=useState([]);
    const [content,setContent]=useState('');
    const id=props.id;
    const fetchData=async ()=>{
        axios.post('http://localhost:5000/blog/post',{id:id}).then(res=>{
            
            setRes(res.data.post);
            setTags(res.data.tags);
            setContent(res.data.content)
            axios.post('http://localhost:5000/blog/author',{id:res.data.post.authorid}).then(Ares=>{
                setAuth(Ares.data)
            })
        })
    
    }


    useEffect(()=>{
        fetchData();    
    },[]);

    const months=['January','February','March','April','May','June','July','August','September','Octomber','November','December'];
    const image='http://localhost:5000/posts/'+postres.image;
    const title=postres.title;
    const userName=authres.name;
    const day=postres.day;
    const month=months[postres.month];
    const date=day+" "+month;
    const profilepic='http://localhost:5000/'+authres.image;
    
  return (
      <Grid container spacing={2}  sx={{marginTop:'10px'}}>
          {/* <Grid item xs={1}></Grid> */}
          <Grid item xs={12}>
              <Card variant="outlined">
                  
              <Grid container>
                  <Grid item xs={8}>
                  <Grid container sx={{paddingTop:'10px',paddingLeft:'16px'}}>
                      <Avatar src={profilepic}/>
                      <Typography sx={{marginTop:'auto',marginBottom:'auto',paddingLeft:'10px'}}>{userName}</Typography>
                  </Grid>
                      <CardContent>
                          <Link to={`/posts/${id}`}>
                            <Title sx={{color:'black'}}>
                                {title}
                            </Title>
                          </Link>
                        <Typography>
                        {content} 
                        </Typography>
                      </CardContent>
                      <CardActions>
                          <Grid container>
                              <Grid item xs={2} sx={{ marginTop:'auto',marginBottom:'auto'}}>
                          <Typography sx={{paddingLeft:'8px',color:'gray', fontSize:'small'}}>{date}</Typography>
                              </Grid>
                              
                              {tags.map((tag)=>(
                                  <Grid item sx={{paddingRight:'10px'}}>
                                      <Chip label={tag}></Chip>
                                  </Grid>
                               
                              ))}
                              <Grid item>
                                <BookmarkAddOutlinedIcon/>
                              </Grid>
                              
                          </Grid>
                      </CardActions>
                  </Grid>

                  <Grid item xs={4}  sx={{margin:'auto',padding:'5px'}}>
                      <CoverImage 
                      component="img"
                      height="150"
                      image={image}
                      alt={title}
                      ></CoverImage>
                      </Grid>   
              </Grid>
              </Card>
            {/* <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">aravinad kolitha</Card>
            </Box> */}
          </Grid>
          {/* <Grid item xs={1}></Grid> */}

      </Grid>
  );
}

