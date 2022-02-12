import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../../actions';
import { useNavigate } from 'react-router-dom';


const Logout=()=>{
    
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const logout=()=>{
        localStorage.clear();
        dispatch(login());
        navigate('/auth');

    }

    return(
        <>
        <Button onClick={logout}>Logout</Button>
        </>
    );
}


export default Logout;