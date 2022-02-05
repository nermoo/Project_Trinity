import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardMedia, Chip, Grid } from '@mui/material';
import { styled } from '@mui/system';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';

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


export default function blogCard() {

    // const image='/IMG_5822.jpg';
    const image='https://picsum.photos/200/300';
    const userName="Aravinda kolitha Nawarathna"
    const date="Nov 12";
    const tags=['Javascript','React','Redux'];
  return (
      <Grid container spacing={2}  sx={{marginTop:'10px'}}>
          {/* <Grid item xs={1}></Grid> */}
          <Grid item xs={12}>
              <Card variant="outlined">
                  
              <Grid container>
                  <Grid item xs={8}>
                  <Grid container sx={{paddingTop:'10px',paddingLeft:'16px'}}>
                      <Avatar src="https://picsum.photos/200/300"/>
                      <Typography sx={{marginTop:'auto',marginBottom:'auto',paddingLeft:'10px'}}>{userName}</Typography>
                  </Grid>
                      <CardContent>
                        <Title sx={{color:'black'}}>
                            Learn react custom hooks
                        </Title>
                        <Typography>
                        loremIrure eu consequat consequat reprehenderit aute nulla deserunt excepteur qui. Aliquip ex 
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
                      alt="green iguana"
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
