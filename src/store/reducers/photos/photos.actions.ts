import ActionTypes from "./photos.constants";
import {
	SetIsFetching,
	SetIsFetchingMore,
	SetPage,
	AddPhotos,
	SetTotalCount
} from "./photos.types";
import Photo from "../../../types/entities/photo";

export const addPhotos = (payload: Photo[]): AddPhotos => ({
	payload,
	type: ActionTypes.ADD_PHOTOS
});

export const setIsFetching = (payload: boolean): SetIsFetching => ({
	payload,
	type: ActionTypes.SET_IS_FETCHING
});

export const setIsFetchingMore = (payload: boolean): SetIsFetchingMore => ({
	payload,
	type: ActionTypes.SET_IS_FETCHING_MORE
});

export const setPage = (payload: number): SetPage => ({
	payload,
	type: ActionTypes.SET_PAGE
});

export const setTotalCount = (payload: number): SetTotalCount => ({
	payload,
	type: ActionTypes.SET_TOTAL_COUNT
});
