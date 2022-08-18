import axios from "axios";
import {API_URL, API_TOKEN} from "@env";

const $api = axios.create({
	baseURL: API_URL
});

// Attach API token to axios request
$api.interceptors.request.use(config => {
	config.params = {
		client_id: API_TOKEN,
		...config.params
	};

	return config;
});

export default $api;
