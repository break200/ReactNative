import React, { useEffect } from 'react';
import axios from 'axios';
// import AppConstants from './Action';


const dmOptions = {
    baseURL: 'https://~~~~~~~~',
    timeout: 10000,
    timeoutErrorMessage: 'TIME OUT',
    headers: {
        // Accept: 'application/json',
        // 'Content-Type': 'application/json;charset=UTF-8',
        // UserAgent: getUserAgnet(),
        // 'Accept-Language': getSystemLocale().replace('_', '-'),
    },
};
const defaultOptions = {
    baseURL: 'https://~~~~~~~~',
    timeout: 10000,
    timeoutErrorMessage: 'TIME OUT',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        UserAgent: '',
        'Accept-Language': ''.replace('_', '-'),
    },
};

const urlEncodeOptions = {
    baseURL: '',
    timeout: 10000,
    timeoutErrorMessage: 'TIME OUT',
    headers: {
        // Accept: 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        // UserAgent: getUserAgnet(),
        // 'Accept-Language': getSystemLocale().replace('_', '-'),
    },
};

const api = axios.create(defaultOptions);
const urlEncodeApi = axios.create(urlEncodeOptions);
// const uploadApi = axios.create(uploadOptions);
const dmApi = axios.create(dmOptions);

export { dmApi };
export default api;
