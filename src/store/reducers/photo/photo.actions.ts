import Photo from "../../../types/entities/photo";
import PhotoActionTypes from "./photo.constants";
import {SetHasError, SetIsFetching, SetPhoto} from "./photo.types";

export const setPhoto = (payload: Photo): SetPhoto => ({
	payload,
	type: PhotoActionTypes.SET_PHOTO
});

export const setIsFetching = (payload: boolean): SetIsFetching => ({
	payload,
	type: PhotoActionTypes.SET_IS_FETCHING
});

export const setHasError = (payload: boolean): SetHasError => ({
	payload,
	type: PhotoActionTypes.SET_HAS_ERROR
});
