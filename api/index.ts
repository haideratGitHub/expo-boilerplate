import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL, TOKEN } from "@helpers/constants";

const instance = axios.create({
	baseURL: BASE_URL,
});

instance.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem(TOKEN);

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default instance;
