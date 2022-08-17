import $api from "../axios";

class PhotosAPI {
	static fetchAll() {
		return $api.get("photos");
	}
}

export default PhotosAPI;
