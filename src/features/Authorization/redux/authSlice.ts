import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { authService } from '../../../services/auth.service';
import { errorNotify } from '../../../components';
import { DICTIONARY } from '../../../shared/dictionary';
import { InitialStateTypes } from './uthSlice.types';

export const createUser = createAsyncThunk(
  'auth/createUser',
  async (params:{}) => {
    const response = await authService.register(params);
    if (response.data && response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
    }
    return response.data;
  },
);

export const logInUser = createAsyncThunk(
  'auth/logIn',
  async (params:{}) => {
    const response = await authService.login(params);
    if (response.data && response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
    }
    return response.data;
  },
);

export const fetchUserProfile = createAsyncThunk(
  'auth/profile',
  async () => {
    const response = await authService.profile();
    if (response.data && response.data.role_name) {
      localStorage.setItem('userRole', response.data.role_name);
    }
    return response.data;
  },
);

const initialState:InitialStateTypes = {
  token: null, 
  profile: null, 
  loading: false, 
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{},
  extraReducers: (builder) => {

    builder.addCase(createUser.fulfilled, (state, action) => ({
      ...state, token: action.payload, loading: false, error: null,
    }),
    );

    builder.addCase(logInUser.fulfilled, (state, action) => ({
      ...state, token: action.payload, loading: false, error: null,
    }),
    );

    builder.addCase(fetchUserProfile.fulfilled, (state, action) => ({
      ...state, profile: action.payload, loading: false, error: null,
    }),
    );

    builder.addMatcher(isAnyOf(fetchUserProfile.rejected, logInUser.rejected, createUser.rejected), 
      (state, action) => ((errorNotify(DICTIONARY.toastMessages.signUpError),
      { ...state, error: action.error.message, loading: false })));

    builder.addMatcher(isAnyOf(fetchUserProfile.pending, logInUser.pending, createUser.pending), 
      (state) => ({ ...state, loading: true, error: null }));
  },
});

export default authSlice.reducer;
