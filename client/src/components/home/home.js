import React,{useState,useEffect} from 'react';
import { Card, Grid } from '@mui/material';
import Blogcard from '../blog/blogcard';
import Scroll from 'react-scroll';
import axios from 'axios';
import Blogcon from './../blog/blogcontent';
import { Route,Routes } from 'react-router-dom';
import { setFollowing } from '../../actions';
import { useDispatch } from 'react-redux';
import Quick from './quickaccess';



const Home=()=>{

    const Element=Scroll.Element;
    // let innerHeight=window.innerHeight;
    const [ids,setIds]=useState([]);
    const dispatch=useDispatch();

    const fetchData=()=>{
        axios.get('http://localhost:5000/').then(res=>{
            setIds(res.data)
        })
        if(localStorage.getItem('role')==='writer'){
            axios.post('http://localhost:5000/following',{id:localStorage.getItem('id')}).then(res=>{
                console.log(res.data);
                dispatch(setFollowing(res.data));
            })
        }
    }
    console.log(ids);

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <Grid container>
            <Grid item xs={8}>
                <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                    <Element  className="element" id="containerElement" style={{
                        position: 'relative',
                        height:'600px',
                        overflow: 'scroll',
                        overflowX:'hidden',
                        scrollbarWidth:'none'
                        

                        
                        }}>
                        {ids.map(id=>{
                            return <Blogcard id={id}/>
                        })}
                    </Element>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Quick/>
                {/* <Route path=':id' element={<Blogcon/>}/> */}
            </Grid>
        </Grid>

    );

}

export default Home;