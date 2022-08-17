import axios from "axios";

const $api = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

$api.interceptors.request.use(config => {
	config.params = {
		...config.params,
		client_id: process.env.REACT_APP_API_TOKEN
	};

	return config;
});

export default $api;
