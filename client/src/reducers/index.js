import { combineReducers } from "redux";
import tupdate from './addtags';
import postupdate from './post';



const allReducers= combineReducers({
    tupdate,
    postupdate
});


export default allReducers;