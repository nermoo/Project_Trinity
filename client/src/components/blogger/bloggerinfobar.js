import React,{ useEffect,useState, useContext } from 'react';
import { Grid, Avatar,Typography,Card } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../../context';


const BloggerInfobar=(props)=>{

    const [blogger,setBlogger]=useState({});
    const [activeTab,setActiveTab]= useState('')
    const name=blogger.name;
    const profilePhoto='http://localhost:5000/'+blogger.profilePic;
    const numberOfFollowers=props.followers;
    const numberofArticles=props.articles;
    const id=props.id;
    console.log(activeTab);

    
    const fetchData=()=>{
        axios.post('http://localhost:5000/profile/blogger',{id:id}).then(res=>{
            setBlogger(res.data.userInfo);
        })
    }

    useEffect(()=>{
        fetchData()
        if(window.location.pathname.includes('articles')){
            setActiveTab('articles');
        }else{
            setActiveTab('followers');
        }
    },[activeTab])

    return(
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Card sx={{marginBottom:'10px'}}> 
                <Grid container>
                    <Grid item xs={1}>
                    <Avatar sx={{margin:'10px',marginLeft:'auto',marginRight:'auto'}} alt="Travis Howard" src={profilePhoto} />
                    </Grid>
                    <Grid item xs={4} sx={{margin:'auto'}}>
                    <Typography>
                            {name}
                    </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3} sx={{margin:'auto'}}>
                        <Link to={`/profile/blogger/${localStorage.getItem('user')}/followers`} style={{textDecoration:'none'}} >
                        <Typography sx={{margin:'auto',color:'black',textDecoration:'none'}} onClick={()=>setActiveTab('Followers')}>
                            <span style={activeTab=='followers'?{borderBottom:'2px solid black', paddingBottom:'2px'}:{}}>
                            Followers &nbsp;&nbsp;
                            {numberOfFollowers}
                            </span>
                        </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={3} sx={{margin:'auto'}}>
                        <Link to={`/profile/blogger/${localStorage.getItem('user')}/articles`} style={{textDecoration:'none'}} >
                        <Typography sx={{margin:'auto',color:'black',textDecoration:'none'}} onClick={()=>setActiveTab('Articles')}>
                            <span  style={activeTab=='articles'?{borderBottom:'2px solid black', paddingBottom:'2px'}:{}}>
                            Articles&nbsp;&nbsp;
                        {numberofArticles}
                            </span>
                        </Typography>
                        </Link>
                    </Grid>
                </Grid>
                </Card>
                
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    );

}


export default BloggerInfobar;