import axios from 'axios';

const API_BASE_URL = 'https://lar-eletro-service-ae58db1686af.herokuapp.com/';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export async function login(email: string, password: string) {
  return axios.post(
    'https://lar-eletro-service-ae58db1686af.herokuapp.com/login',
    { email, password },
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
};

export const createUser = async (name: string, email: string, password: string, contato: string) => {
  try {
    const response = await api.post('/create', { name, email, password, contato });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendContactMessage = async (name: string, email: string, contato: string, mensagem: string) => {
  try {
    const response = await api.post('/contact', { name, email, contato, mensagem });
    return response.data;
  } catch (error) {
    throw error;
  }
};