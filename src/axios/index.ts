import axios from "axios";
import {API_URL, API_TOKEN} from "@env";

const $api = axios.create({
	baseURL: API_URL
});

// Attach API token to axios request
$api.interceptors.request.use(config => {
	config.headers.Authorization = `Client-ID ${API_TOKEN}`;
	return config;
});

export default $api;
