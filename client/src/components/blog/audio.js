import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Audio=(props)=>{
    const id=props.id;
    const source=`http://localhost:5000/audio/${id}.wav`;
    console.log(id);
    const [ares,setAres]=useState('');

    const fetchData=()=>{
        axios.post('http://localhost:5000/blog/audio',{id:id}).then(res=>{
            setAres(res.data);
        }
        )
    }

    useEffect(()=>{
        fetchData();
    },[]);
    return(
        <audio controls>
          <source src={source} type="audio/mpeg"/>
          
        </audio>
    );
}

export default Audio;