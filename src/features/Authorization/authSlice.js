import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../../services/auth.service';

export const createUser = createAsyncThunk(
  'auth/createUser',
  async (params) => {
    const response = await authService.register(params);
    if (response.data && response.data.access_token && response.data.refresh_token) {
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('refreshToken', response.data.refresh_token);
    }
    return response.data;
  },
);

export const logInUser = createAsyncThunk(
  'auth/logIn',
  async (params) => {
    const response = await authService.login(params);
    if (response.data && response.data.access_token && response.data.refresh_token) {
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('refreshToken', response.data.refresh_token);
    }
    return response.data;
  },
);

export const getUserProfile = createAsyncThunk(
  'auth/profile',
  async () => {
    const response = await authService.profile();
    if (response.data && response.data.role_name) {
      localStorage.setItem('userRole', response.data.role_name);
    }
    return response.data;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null, profile: null, loading: false, error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(createUser.fulfilled,
      (state, action) => ({
        ...state, token: action.payload, loading: false, error: null,
      }));
    builder.addCase(createUser.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }));

    builder.addCase(logInUser.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(logInUser.fulfilled,
      (state, action) => ({
        ...state, token: action.payload, loading: false, error: null,
      }));
    builder.addCase(logInUser.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }));

    builder.addCase(getUserProfile.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(getUserProfile.fulfilled,
      (state, action) => ({
        ...state, profile: action.payload, loading: false, error: null,
      }));
    builder.addCase(getUserProfile.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }));
  },
});

export default authSlice.reducer;
