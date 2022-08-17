import {setIsFetching, setPhotos} from "../store/reducers/photos/photos.actions";
import PhotosAPI from "../api/photos.api";
import {AppDispatch} from "../store";

class PhotosService {
	static fetchAll() {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsFetching(true));
			try {
				const response = await PhotosAPI.fetchAll();
				console.log(response);
				setPhotos(response.data);
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsFetching(false));
			}
		}
	}
}

export default PhotosService;
