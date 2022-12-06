import React ,{useState, useEffect} from 'react';
import { Snackbar,Alert, Button, Grid, Avatar, Typography, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Infobar=(props)=>{

  const [user,setUser]=useState({});
  const [items,setItems]=useState('');
    const name=user.name;
    const profilePhoto='http://localhost:5000/'+user.profilePic;
    const numberOfFollowers=0;
    const numberofArticles=items;
    const id=props.id;

    const fetchData=()=>{
      axios.post('/profile/reader',{id:id}).then(res=>{
          console.log(res.data);
          setUser(res.data.userInfo);
          setItems(res.data.savedCount);
      })
  }

  useEffect(()=>{
      fetchData()
  },[])
    
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
                        <Link to={`/profile/user/${localStorage.getItem('user')}/following`} style={{textDecoration:'none'}}>
                        <Typography sx={{margin:'auto',color:'black',textDecoration:'none'}}>
                            Following &nbsp;&nbsp;
                        {numberOfFollowers}
                        </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={3} sx={{margin:'auto'}}>
                        <Link to={`/profile/user/${localStorage.getItem('user')}/saved`} style={{textDecoration:'none'}}>
                        <Typography sx={{margin:'auto',color:'black',textDecoration:'none'}}>
                            Saved Items&nbsp;&nbsp;
                        {numberofArticles}
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


export default Infobar;