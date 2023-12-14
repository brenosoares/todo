import { Task } from '../../store';
import { API } from '../api';

export const GetCards = async () => {
    try {
        const response = await API.get('/cards')
        return response.data
    } catch (error) {
        return error
    }
}


export const AddCard = async (task: Task) => {
    try {
        const response = await API.post('/cards', task)
        return response.data
    } catch (error) {
        return error
    }
}

export const EditCard = async (task: Task) => {
    try {
        const response = await API.put(`/cards/${task.id}`, task)
        return response.data
    } catch (error) {
        return error
    }
}
export const DeleteCard = async (task: Task) => {
    try {
        const response = await API.delete(`/cards/${task.id}`)
        return response.data
    } catch (error) {
        return error
    }
}
