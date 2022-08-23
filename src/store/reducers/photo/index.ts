import {PhotoAction, PhotoInitialState} from "./photo.types";
import PhotoActionTypes from "./photo.constants";

export const initialState: PhotoInitialState = {
	photo: {
		description: "",
		urls: {small: null, regular: null},
		user: {name: "", profile_image: {medium: null}},
		id: ""
	},
	hasError: false,
	isFetching: false
};

const photoReducer = (state = initialState, action: PhotoAction) => {
	switch (action.type) {
		case PhotoActionTypes.SET_PHOTO:
			return {...state, photo: action.payload};
		case PhotoActionTypes.SET_IS_FETCHING:
			return {...state, isFetching: action.payload};
		case PhotoActionTypes.SET_HAS_ERROR:
			return {...state, hasError: action.payload};
		default:
			return state;
	}
};

export default photoReducer;
