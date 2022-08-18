import $api from "../axios";
import {GetPhotosParams} from "../types/APIs/photos";

class PhotosAPI {
	static fetchAll(params: GetPhotosParams) {
		return $api.get("photos", {
			params: {page: params.page, per_page: params.perPage}
		});
	}

	static fetchOneById(id: string) {
		return $api.get(`photos/${id}`);
	}
}

export default PhotosAPI;
