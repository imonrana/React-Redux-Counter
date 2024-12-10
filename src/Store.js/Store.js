import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../Slice/CounterSlice"

// create a redux sote.
/* step : 
1. import configureStore from "reduxjs/tollkit"
2. export configureStore and make object then write a key reducer and make him object
done.
*/


export default configureStore({
    reducer:{
        counter: counterReducer
    }
})