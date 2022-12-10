import React from 'react';
import { Grid, Card, Avatar, Typography } from '@mui/material';
import Scroll from 'react-scroll';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Link } from 'react-router-dom';
import NoDataSreen from '../common/nodatascreen';





const Articles =(props)=>{


    const Element=Scroll.Element;
    const months=['January','February','March','April','May','June','July','August','September','Octomber','November','December'];
    const Articles=props.List;
    const upvotes=78;
    console.log(props.List);
    return(
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                {Articles.length===0? 
                <NoDataSreen type='Articles'/>:
                (
                    <Element  className="element" id="containerElement" style={{
                        position: 'relative',
                        height:'590px',
                        overflow: 'scroll',
                        overflowX:'hidden',
                        scrollbarWidth:'none'
                        
              
                        
                      }}>
                      {Articles.map(article=>{
                          return(
                              <Grid container>
                          <Grid item xs={1}></Grid>
                          <Grid item xs={10}>
                          
                          
                              
                                  <Card sx={{marginBottom:'10px',marginTop:'10px'}} variant='outlined'>
                                  <Grid container>
                                      <Grid item xs={8}>
                                          <Link to={`/posts/${article.data._id}`} style={{textDecoration:'none'}}>
                                          <Typography underline='none' sx={{margin:'10px',fontSize:{},color:'black',textDecoration:'none'}}>
                                              {article.data.title}
                                          </Typography>
                                          </Link>
                                      <Typography sx={{color:'gray', fontSize:'14px',margin:'10px'}} >
                                          Published on {months[article.data.month]}&nbsp; {article.data.day}
                                      </Typography>
                                      </Grid>
                                      <Grid sx={{marginTop:'auto',marginBottom:'auto'}} item xs={1}>
                                          <Grid container>
                                              <Grid item>
                                                  <ArrowUpwardIcon sx={{fontSize:{xs:'small'}}}/>
                                              </Grid>
                                              <Grid item>
                                                  <Typography>{upvotes}</Typography>
                                                  </Grid>
                                          </Grid>
                                       
                                      </Grid>
                                      <Grid item xs={1} sx={{margin:'auto'}}>
                                          <Grid container>
                                              <Grid item sx={{marginRight:'5px'}}>< ChatBubbleOutlineIcon/></Grid>
                                              <Grid item>{article.comments}</Grid>
                                          </Grid>
                                          
                                      </Grid>
                                  </Grid>
                              
                              
                              </Card>
                          
                          
                     
                              
                          </Grid>
                          <Grid item xs={1}></Grid>
                      </Grid>
                          );
                      })}
              
                      </Element>
                )
                }
                
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
    );
}

export default Articles;