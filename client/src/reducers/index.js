import { combineReducers } from "redux";
import tupdate from './addtags';
import postupdate from './post';
import logstatus from "./login";
import following from './following';



const allReducers= combineReducers({
    tupdate,
    postupdate,
    logstatus,
    following
});


export default allReducers;