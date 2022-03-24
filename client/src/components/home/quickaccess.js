import React,{useEffect, useState} from 'react';
import { Grid, Card, Stack, Chip, Avatar, Typography } from '@mui/material';
import axios from 'axios';
import { setTaglist } from '../../actions';



const Quick=()=>{

    const [qtags,setQtags]=useState([]);
    const [qauth,setQauth]=useState([]);
    
    const fetchData= async()=>{
         axios.get('http://localhost:5000/quick/tags').then(qres=>{
            setQtags(qres.data.tags);
            
            
        })

        axios.get('http://localhost:5000/quick/auth').then(qres=>{
            console.log(qres.data);
            setQauth(qres.data.authors);
            
        })
    }
    
    useEffect(()=>{
        fetchData();
    },[])
    return(
        <>
        
        <Grid container>
              <Grid item xs={1}></Grid>  
              <Grid item xs={10}>
              <Card sx={{height:'100%',border:'none',boxShadow:'none'}}>
            <Grid container sx={{marginTop:'10px'}}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>Top Tags</Grid>
                <Grid item xs={1}></Grid>   
             </Grid>
             <Grid container sx={{marginTop:'10px',marginBottom:'30px'}}>
                <Grid item xs={1}></Grid>     
                <Grid item >
                    <Stack sx={{fontSize:'11px'}} spacing={1}>
                        
                        {qtags.map((tag)=>( 
                            <span>
                            <Chip size="small" label={tag._id} key={tag} sx={{}}/> x [ {tag.count} ]
                            </span>
                        ))}
                        
                    </Stack>
                    </Grid>     
                <Grid item xs={1}></Grid>     
             </Grid>
             <Grid container>
             <Grid item xs={1}></Grid>
                <Grid item xs={10}>Top Authors</Grid>
                <Grid item xs={1}></Grid>      
             </Grid>
             <Grid container sx={{marginTop:'10px'}}>
                <Grid item xs={1}></Grid>     
                <Grid item xs={10}>
                    <Stack>
                        {qauth.map((author)=>(
                            <Card sx={{marginBottom:'10px'}} variant='outlined'>
                            <Grid container>
                                <Grid item xs={2}>
                                <Avatar sx={{width: 24, height: 24, margin:'10px',marginLeft:'auto',marginRight:'auto'}} alt={author.name} src={`http://localhost:5000/${author.profilePic}`}/>
                                </Grid>
                                <Grid sx={{marginTop:'auto',marginBottom:'auto'}} item xs={10}>
                                    <Typography sx={{fontSize:'13px'}}>
                                    {author.name.charAt(0).toUpperCase() +author.name.slice(1)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        
                        
                        </Card>
                        ))
                        }
                    </Stack>
                    </Grid>     
                <Grid item xs={1}></Grid>     
             </Grid>
             <Grid container>
                <Grid item></Grid>     
             </Grid>
             </Card>
                  </Grid>  
              <Grid item xs={1}></Grid>  
                
            </Grid>
        
        </>
    );
}

export default Quick;