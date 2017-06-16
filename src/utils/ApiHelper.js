import axios from 'axios';
import LocalStorageService from '../services/LocalStorage';
import config from './AppConfig';

const initialHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
};

const formHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded'
};

const getHeaders = (isFormRequest) => {
    if (isFormRequest) {
        return Object.assign({}, formHeaders, {
            Authorization: `Bearer ${LocalStorageService.getAccessToken()}`
        });
    }
    return Object.assign({}, initialHeaders, {
        Authorization: `Bearer ${LocalStorageService.getAccessToken()}`
    });
};

const createQueryString = (params) => {
    const paramsKeys = Object.keys(params);
    let queryString = '';
    paramsKeys.forEach((key, index) => {
        queryString += index === 0 ? '?' : '&';
        if (Array.isArray(params[key])) {
            params[key].forEach((el, i) => {
                if (i > 0) {
                    queryString += '&';
                }
                queryString += `${encodeURIComponent(key)}=${encodeURIComponent(el)}`;
            });
        } else {
            queryString += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
        }
    });
    return queryString;
};

const CancelToken = axios.CancelToken;
const previousRequests = {};

class ApiHelper {

    static get(resourceUrl, params = {}, resourceId, preventLoader = false) {
        const id = resourceId ? `/${resourceId}` : '';
        const url = `${config.baseUrl}/${resourceUrl + id + createQueryString(params)}`;
        return axios({
            method: 'get',
            url,
            headers: getHeaders(),
            preventLoader
        });
    }

    static post(resourceUrl, newResource, cancelPrevious) {
        const url = `${config.baseUrl}/${resourceUrl}`;
        if (cancelPrevious && previousRequests[url]) {
            previousRequests[url].cancel();
        }
        return axios({
            method: 'post',
            cancelToken: new CancelToken((c) => {
                if (!previousRequests[url]) {
                    previousRequests[url] = {};
                }
                previousRequests[url].cancel = c;
            }),
            url,
            data: newResource,
            headers: getHeaders()
        });
    }

    static put(resourceUrl, updatedResource) {
        const id = updatedResource.id;
        const url = `${config.baseUrl}/${resourceUrl}/${id}`;
        return axios({
            method: 'put',
            url,
            data: updatedResource,
            headers: getHeaders()
        });
    }

    static remove(resourceUrl, resourceId) {
        const url = `${config.baseUrl}/${resourceUrl}/${resourceId}`;
        return axios({
            method: 'delete',
            url,
            headers: getHeaders()
        });
    }
}
