import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doctorService } from '../../services/doctor.service';

export const getAppointments = createAsyncThunk(
  'doctor/getAppointments',
  async (params) => {
    const response = await doctorService.patients(params);
    return response.data;
  },
);

const doctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    doctorappointments: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAppointments.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(getAppointments.fulfilled,
      (state, action) => ({
        ...state, doctorappointments: action.payload, loading: false, error: null,
      }));
    builder.addCase(getAppointments.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }));
  },
});

export default doctorSlice.reducer;
