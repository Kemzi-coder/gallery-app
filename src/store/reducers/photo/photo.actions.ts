import Photo from "../../../types/entities/photo";
import PhotoActionTypes from "./photo.constants";
import {SetPhoto, SetIsFetching} from "./photo.types";

export const setPhoto = (payload: Photo): SetPhoto => ({
	payload,
	type: PhotoActionTypes.SET_PHOTO
});

export const setIsFetching = (payload: boolean): SetIsFetching => ({
	payload,
	type: PhotoActionTypes.SET_IS_FETCHING
});
