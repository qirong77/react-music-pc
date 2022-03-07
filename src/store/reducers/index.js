import { combineReducers } from "redux";
import { newAlbum } from '../reducers/browser'
import {searchResult} from '../reducers/home'
import {categories} from '../reducers/category'
const rootReducer = combineReducers({
    test:(state = 0,action) => state,
    newAlbum,
    searchResult,
    categories
})
export default rootReducer