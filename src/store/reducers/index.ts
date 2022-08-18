import {combineReducers} from "redux";
import photosReducer from "./photos";
import photoReducer from "./photo";

const rootReducer = combineReducers({
	photosState: photosReducer,
	photoState: photoReducer
});

export default rootReducer;
