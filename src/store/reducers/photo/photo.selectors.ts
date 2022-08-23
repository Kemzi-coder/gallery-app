import {RootState} from "../../index";

export const getIsPhotoFetching = (state: RootState) =>
	state.photoState.isFetching;

export const getPhotoUrl = (state: RootState) =>
	state.photoState.photo.urls.regular;

export const getPhotoHasError = (state: RootState) => state.photoState.hasError;
