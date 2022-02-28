import React,{useState, useEffect} from 'react';
import { Grid,Card,Stack, CardContent, Typography } from '@mui/material';
import Comment from './comment';
import axios from 'axios';
import Commentedit from './commentedit';


const Comments=(props)=>{

    const blogid=props.id;
    console.log(blogid);
    const [comments,setComments]=useState([]);
    const fetchData=()=>{
        axios.post('http://localhost:5000/comments/get',{id:blogid})
    }


    useEffect(()=>{
        fetchData();
    },[])
    
    return(
        <>
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
                <Commentedit id={blogid}/>
            <Stack
                sx={{marginTop:'10px'}}
                direction="column"
                justifyContent="flex-end"
                alignItems="start"
                spacing={1}
                >
                    
                        <Card variant='outlined'>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={10}>
                                        <Typography sx={{color:'gray',marginBottom:'5px'}}>
                                            Aravinda nawarathna
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1}></Grid>
                                </Grid>
                                <Typography sx={{marginRight:'5px'}}>
                                content is good  and there are something. is good  and there is notheing to say anymore
                                </Typography>
                                <Typography sx={{fontSize:'10px',marginTop:'5px',color:'gray'}}>
                                 january 12
                                </Typography>
                            </CardContent>
                        
                        </Card>
                    
                        <Card variant='outlined'>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={10}>
                                        <Typography sx={{color:'gray',marginBottom:'5px'}}>
                                            Aravinda nawarathna
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1}></Grid>
                                </Grid>
                                <Typography sx={{marginRight:'5px'}}>
                                content is good  and there are something. is good  and there is notheing to say anymore
                                </Typography>
                                <Typography sx={{fontSize:'10px',marginTop:'5px',color:'gray'}}>
                                 january 12
                                </Typography>
                            </CardContent>
                        
                        </Card>
                    
                        <Card >
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={10}>
                                        <Typography sx={{color:'gray',marginBottom:'5px'}}>
                                            Aravinda nawarathna
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1}></Grid>
                                </Grid>
                                <Typography sx={{marginRight:'5px'}}>
                                content is good  and there are something. is good  and there is notheing to say anymore
                                </Typography>
                                <Typography sx={{fontSize:'10px',marginTop:'5px',color:'gray'}}>
                                 january 12
                                </Typography>
                            </CardContent>
                        
                        </Card>
                    
                </Stack>
            </Grid>
        </Grid>
        </>
    );
}


export default Comments;