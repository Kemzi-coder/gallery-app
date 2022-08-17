import ActionTypes from "./photos.constants";
import {SetIsFetching, SetPhotos} from "./photos.types";
import Photo from "../../../types/entities/photo";

export const setPhotos = (payload: Photo[]): SetPhotos => ({
	payload,
	type: ActionTypes.SET_PHOTOS
});

export const setIsFetching = (payload: boolean): SetIsFetching => ({
	payload,
	type: ActionTypes.SET_IS_FETCHING
});
