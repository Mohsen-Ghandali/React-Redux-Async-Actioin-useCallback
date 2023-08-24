import { combineReducers } from "redux";
import ReducerAge from "./Age/ReducerAge";
import ReducerCounter from "./Counter/ReducerCounter";
import ReducerPosts from "./Posts/ReducerPosts";

const RootReducer = combineReducers({
    counterRoot: ReducerCounter,
    ageRoot: ReducerAge,
    postsRoot: ReducerPosts

})

export default RootReducer;