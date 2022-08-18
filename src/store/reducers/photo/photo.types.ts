import Photo from "../../../types/entities/photo";
import {AppAction} from "../../../types/store";
import PhotoActionTypes from "./photo.constants";

export interface PhotoInitialState {
	photo: Photo;
	isFetching: boolean;
}

export type SetIsFetching = AppAction<
	typeof PhotoActionTypes.SET_IS_FETCHING,
	boolean
>;

export type SetPhoto = AppAction<typeof PhotoActionTypes.SET_PHOTO, Photo>;

export type PhotoAction = SetIsFetching | SetPhoto;
