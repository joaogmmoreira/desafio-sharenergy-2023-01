import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const createSession = async (username, password) => {
  return api.post('/login', { username, password });
};

export const getCustomers = async () => {
  return api.get('/customers');
};