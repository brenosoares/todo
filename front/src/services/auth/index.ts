import { API } from '../api';

export const AuthApi = async () => {
    try {
        const response = await API.post('/login', {"login":"letscode", "senha":"lets@123"})
        return response.data
    } catch (error) {
        return error
    }
}
