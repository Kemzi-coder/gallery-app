import {RootState} from "../../index";

export const getPhotos = (state: RootState) => state.photosState.photos;

export const getIsPhotosFetching = (state: RootState) =>
	state.photosState.isFetching;

export const getIsMorePhotosFetching = (state: RootState) =>
	state.photosState.isFetchingMore;

export const getPhotosPage = (state: RootState) => state.photosState.page;

export const getPhotosPerPage = (state: RootState) => state.photosState.perPage;

export const getPhotosTotalCount = (state: RootState) =>
	state.photosState.totalCount;
