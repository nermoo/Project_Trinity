import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography, Chip, Autocomplete } from '@mui/material';
import { useState, useEffect } from 'react';
import TagsList from './tagslist';
import { setTaglist } from '../../actions';
import { useDispatch } from 'react-redux';

export default function Tags() {

    const [tags,setTags]=useState([]);
    const [tag,setTag]=useState();
    const [open, setOpen] = useState(false);
    const dispatch=useDispatch();
    console.log(tag);
    console.log(tags);
    dispatch(setTaglist(tags));

    const addTag=(e)=>{
        setTags([...tags,tag])
        setTag("");
        console.log(tags);
        
        
    }
    const handleDelete = (tagToDelete) => () => {
      setTags((tags) => tags.filter((tag) => tag !== tagToDelete));
      dispatch(setTaglist(tags));
    };




  return (
  <Grid container>
    <Grid item xs={2}>
        
      <Autocomplete

open={open}
onOpen={() => {
  // only open when in focus and inputValue is not empty
  if (tag) {
    setOpen(true);
  }
}}
onClose={() => setOpen(false)}
tag={tag}
onInputChange={(e, value, reason) => {
  setTag(value);

  // only open when inputValue is not empty after the user typed something
  if (!value) {
    setOpen(false);
  }
}}


      fullWidth
      autoHighlight
        id="free-solo-2-demo"
        Clearable
        value={tag}
        options={TagsList.map((option) => option.Name)} 
        renderInput={(params) => (
          
          <TextField
            id="standard-basic" 
            {...params}
            label="Enter a keyword"
            margin="normal"
            variant="standard"
            InputProps={{ ...params.InputProps, type: 'search' }}
            // onChange={apiFtecher}
            // onBlur={(e)=>setTag(e.target.value)}
          />
          

        )}
      />
        </Grid>   

        <Grid sx={{marginTop:'auto'}} item xs={1}>
            
      <Button  onKeyDown={addTag} onClick={addTag}>+</Button>
            </Grid>   

      <Grid contaner sx={{marginTop:'auto'}}>
      <Grid  item>
          <Typography>
              {tags.map((tag)=>( 
                  <Chip label={tag} key={tag} sx={{marginLeft:'10px'}} onDelete={ handleDelete(tag)}></Chip>
              ))}
              
          </Typography>
      </Grid>
      </Grid>
  </Grid>
      
    
  );
}
