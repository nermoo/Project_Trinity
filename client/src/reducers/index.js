import { combineReducers } from "redux";
import tupdate from './addtags';
import postupdate from './post';
import logstatus from "./login";



const allReducers= combineReducers({
    tupdate,
    postupdate,
    logstatus
});


export default allReducers;