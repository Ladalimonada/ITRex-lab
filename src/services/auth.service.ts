import { instance } from './instance';
import { AUTHSERVICE } from './apiUrlsConstant';

const register = (body:{}) => instance.post(AUTHSERVICE.register, body);

const login = (body:{}) => instance.post(AUTHSERVICE.login, body);

const profile = () => instance.get(AUTHSERVICE.profile);

export const authService = {
  register, login, profile,
};
