import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `${token}`;
};

export const createSession = async (username, password) => {
  return api.post('/login', { username, password });
};

export const getCustomers = async (token) => {
  return api.get('/customers', {
    headers: {
      Authorization: token,
    }
  });
};

export const registerCustomer = (data) => {
  return api.post('/customers', {data});
};

export const apiDeleteCustomer = async (id, token) => {
  return api.delete('/customers', {
    data: {
      id
    },
  });
}