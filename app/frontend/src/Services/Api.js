import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
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

export const deleteCustomer = async (id, token) => {
  return api.delete('customers', {
    headers: {
      Authorization: token
    },
    params: {
      id,
    }
  })
}