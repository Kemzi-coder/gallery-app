import * as photosActs from "../store/reducers/photos/photos.actions";
import * as photoActs from "../store/reducers/photo/photo.actions";
import PhotosAPI from "../APIs/photos.api";
import {AppDispatch} from "../store";
import {GetPhotosParams} from "../types/APIs/photos";

class PhotosService {
	static fetchAll(params: GetPhotosParams) {
		// Use different actions on the first and subsequent fetches
		const setIsFetching = (isFetching: boolean) =>
			params.page === 1
				? photosActs.setIsFetching(isFetching)
				: photosActs.setIsFetchingMore(isFetching);

		return async (dispatch: AppDispatch) => {
			dispatch(photosActs.setHasError(false));
			dispatch(setIsFetching(true));
			try {
				const response = await PhotosAPI.fetchAll(params);
				dispatch(photosActs.addPhotos(response.data));

				const totalCount = parseInt(response.headers["x-total"], 10);
				dispatch(photosActs.setTotalCount(totalCount));
			} catch (e) {
				dispatch(photosActs.setHasError(true));
				console.log(e);
			} finally {
				dispatch(setIsFetching(false));
			}
		};
	}

	static refresh(params: GetPhotosParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(photosActs.setHasError(false));
			dispatch(photosActs.setIsFetching(true));
			try {
				const response = await PhotosAPI.fetchAll(params);
				dispatch(photosActs.setPhotos(response.data));

				const totalCount = parseInt(response.headers["x-total"], 10);
				dispatch(photosActs.setTotalCount(totalCount));
			} catch (e) {
				dispatch(photosActs.setHasError(true));
				console.log(e);
			} finally {
				dispatch(photosActs.setIsFetching(false));
			}
		};
	}

	static fetchOneById(id: string) {
		return async (dispatch: AppDispatch) => {
			dispatch(photoActs.setHasError(false));
			dispatch(photoActs.setIsFetching(true));
			try {
				const response = await PhotosAPI.fetchOneById(id);
				dispatch(photoActs.setPhoto(response.data));
			} catch (e) {
				dispatch(photoActs.setHasError(true));
				console.log(e);
			} finally {
				dispatch(photoActs.setIsFetching(false));
			}
		};
	}
}

export default PhotosService;
