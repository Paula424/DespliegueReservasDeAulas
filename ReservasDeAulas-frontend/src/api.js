import axios from 'axios';
const API_URL = 'http://localhost:8080';
export const login = (data) => axios.post(`${API_URL}/auth/login`, data);
export const getAulas = () => axios.get(`${API_URL}/aulas`);
export const getReservas = () => axios.get(`${API_URL}/reservas`);
export const createReserva = (data) => axios.post(`${API_URL}/reservas`, data);