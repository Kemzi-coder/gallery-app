import {AppAction} from "../../../types/store";
import PhotosActionTypes from "./photos.constants";
import Photo from "../../../types/entities/photo";
import {PhotosOrderBy} from "../../../types/APIs/photos";

export interface PhotosInitialState {
	photos: Photo[];
	isFetching: boolean;
	isFetchingMore: boolean;
	perPage: number;
	page: number;
	totalCount: number;
	orderBy: PhotosOrderBy;
}

export type AddPhotos = AppAction<typeof PhotosActionTypes.ADD_PHOTOS, Photo[]>;

export type SetPhotos = AppAction<typeof PhotosActionTypes.SET_PHOTOS, Photo[]>;

export type SetIsFetching = AppAction<
	typeof PhotosActionTypes.SET_IS_FETCHING,
	boolean
>;

export type SetIsFetchingMore = AppAction<
	typeof PhotosActionTypes.SET_IS_FETCHING_MORE,
	boolean
>;

export type SetPage = AppAction<typeof PhotosActionTypes.SET_PAGE, number>;

export type SetTotalCount = AppAction<
	typeof PhotosActionTypes.SET_TOTAL_COUNT,
	number
>;

export type PhotosAction =
	| AddPhotos
	| SetPhotos
	| SetIsFetching
	| SetPage
	| SetTotalCount
	| SetIsFetchingMore;
