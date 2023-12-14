import axios from 'axios';
import { useToken } from '../../store';
import { AuthApi } from '../auth';

const api = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
})

const get = async(url: string) => await api.get(url);
const post = async(url: string, params: any ) => await api.post(url, params);
const put = async(url: string, params: any ) => await api.put(url, params);
const del = async(url: string) => await api.delete(url);

api.interceptors.request.use(async config => {
    const token = useToken.getState().token;
    const url = config?.url
    const isLogin = url?.includes('login')
    if(token.length > 0 && !isLogin) {
        config.headers.Authorization = `Bearer ${token}`
    }
    if (token.length <= 0 && !isLogin) {
        const newToken = await AuthApi()
        if(newToken) {
            config.headers.Authorization = `Bearer ${newToken}`
            useToken.getState().setToken(newToken)
        }
    }

    console.log(config.headers.Authorization)

    return config
})

export const API = {
    get: get,
    post: post,
    put: put,
    delete: del
}
