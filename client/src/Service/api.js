import axios from 'axios';
const Url = 'http://localhost:8080';

export const getTasks = async (id) => {
    id = id || '';
    return await axios.get(`${Url}/${id}`);
}

export const addTask = async (task) => {
    return await axios.post(`${Url}/add`, task);
}

export const deleteTask = async (id) => {
    return await axios.delete(`${Url}/${id}`);
}

export const editTask = async (id, task) => {
    return await axios.put(`${Url}/${id}`, task)
}
