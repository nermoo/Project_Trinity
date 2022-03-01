import { combineReducers } from "redux";
import tupdate from './addtags';
import postupdate from './post';
import logstatus from "./login";
import following from './following';
import Stateupdate from './update';



const allReducers= combineReducers({
    tupdate,
    postupdate,
    logstatus,
    following,
    Stateupdate
});


export default allReducers;