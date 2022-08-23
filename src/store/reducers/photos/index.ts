import PhotosActionTypes from "./photos.constants";
import {PhotosAction, PhotosInitialState} from "./photos.types";

export const initialState: PhotosInitialState = {
	photos: [],
	isFetching: false,
	isFetchingMore: false,
	perPage: 5,
	page: 1,
	totalCount: 0,
	orderBy: "latest",
	hasError: false
};

const photosReducer = (state = initialState, action: PhotosAction) => {
	switch (action.type) {
		case PhotosActionTypes.ADD_PHOTOS:
			return {
				...state,
				photos: [
					...state.photos,
					// Remove duplicate photos that are already in the state
					...action.payload.filter(
						item => !state.photos.some(p => item.id === p.id)
					)
				]
			};
		case PhotosActionTypes.SET_PHOTOS:
			return {...state, photos: action.payload};
		case PhotosActionTypes.SET_IS_FETCHING:
			return {...state, isFetching: action.payload};
		case PhotosActionTypes.SET_IS_FETCHING_MORE:
			return {...state, isFetchingMore: action.payload};
		case PhotosActionTypes.SET_PAGE:
			return {...state, page: action.payload};
		case PhotosActionTypes.SET_TOTAL_COUNT:
			return {...state, totalCount: action.payload};
		case PhotosActionTypes.SET_HAS_ERROR:
			return {...state, hasError: action.payload};
		default:
			return state;
	}
};

export default photosReducer;
