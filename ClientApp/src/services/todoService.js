import axios from "axios";
import { NotificationManager } from 'react-notifications';

const API = 'api/Todo'

export const getAll = () => {
    return axios
        .get(API, { headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }})
        .then(response => {
            return response.data
        })
        .catch(error => {
            return NotificationManager.error(error.message);
        });
};

export const postFunc = async body => {
    return axios
        .post(API, body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return NotificationManager.error(error.message);
        });
};

export const deleteFunc = async id => {
    return axios
        .delete(`${API}/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return NotificationManager.error(error.message);
        });
};
