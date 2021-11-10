import axios from 'axios';
import config from './config';

const api = axios.create({
    baseURL: config.BASE_URL, // process.env.REACT_APP_BACKEND_URL || config.BASE_URL,
    timeout: 50000,
    headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
    async (config) => {
        // if (storedAuthToken !== null) config.headers.authorization = `Bearer ${storedAuthToken}`;
        // config.headers['push-token'] = deviceId;
        // config.cancelToken = new CancelToken(c => {
        //   cancel = c;
        // });
        console.log('-> Request: ', config);
        return config;
    },
    (error) => {
        // stopLoading();
        return Promise.reject(error.response);
    }
);

api.interceptors.response.use(
    (response) => {
        //   if (typeof response.headers.authorization !== 'undefined')
        // updateAuthToken(response.headers.authorization);
        console.log('-> Response: ', response.data);
        //   stopLoading();
        return response;
    },
    (error) => {
        //   if (axios.isCancel(error)) {
        // 	console.log('-> Request canceled', error.message);
        // 	return stopLoading();
        //   }
        //   const errorMessage = errorHandler(error);
        console.log('-> Error', error.response);
        //   stopLoading();
        throw error;
    }
);

export default api;
