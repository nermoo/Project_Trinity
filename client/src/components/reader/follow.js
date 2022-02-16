import React,{useState} from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

const Follow=(props)=>{
    
    const [status,setStatus]=useState('Follow');
    const follower=localStorage.getItem('id');
    const following=props.id;
    const follow=()=>{
        console.log(`follow ${follower} follwing ${following}`);
    }

    return(
        <Button onClick={follow}>
            {status}
        </Button>
    );
}

export default Follow;