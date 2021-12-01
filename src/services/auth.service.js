import { instance } from './instance';

const register = (body) => instance.post('/auth/registration', body);

const login = (body) => instance.post('/auth/login', body);

const profile = () => instance.get('/auth/profile');

export const authService = {
  register, login, profile,
};
