import Photo from "../../../types/entities/photo";
import {AppAction} from "../../../types/store";
import PhotoActionTypes from "./photo.constants";

export interface PhotoInitialState {
	photo: Photo;
	isFetching: boolean;
	hasError: boolean;
}

export type SetIsFetching = AppAction<
	typeof PhotoActionTypes.SET_IS_FETCHING,
	boolean
>;

export type SetPhoto = AppAction<typeof PhotoActionTypes.SET_PHOTO, Photo>;

export type SetHasError = AppAction<
	typeof PhotoActionTypes.SET_HAS_ERROR,
	boolean
>;

export type PhotoAction = SetIsFetching | SetPhoto | SetHasError;
