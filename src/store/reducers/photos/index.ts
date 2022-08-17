import Photo from "../../../types/entities/photo";
import ActionTypes from "./photos.constants";
import {SetIsFetching, SetPhotos} from "./photos.types";

interface PhotosInitialState {
	photos: Photo[];
	isFetching: boolean;
}

const initialState: PhotosInitialState = {
	photos: [],
	isFetching: false
};

type Actions = SetPhotos | SetIsFetching;

const rootReducer = (state = initialState, action: Actions) => {
	switch (action.type) {
		case ActionTypes.SET_PHOTOS:
			return {...state, photos: action.payload};
		case ActionTypes.SET_IS_FETCHING:
			return {...state, isFetching: action.payload};
		default:
			return state;
	}
};

export default rootReducer;
