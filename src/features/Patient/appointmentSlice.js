import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { appointmentService } from '../../services/appointment.service';

export const getDoctors = createAsyncThunk(
  'appointment/getDoctors',
  async (params) => {
    const response = await appointmentService.doctors(params);
    return response.data;
  },
);

export const getFreeTime = createAsyncThunk(
  'appointment/getFreeTime',
  async (params) => {
    const response = await appointmentService.freeTime(params);
    return response.data;
  },
);

export const createAppointment = createAsyncThunk(
  'appointment/createAppointment',
  async (params) => {
    const response = await appointmentService.appointment(params);
    return response.data;
  },
);

export const getAppointments = createAsyncThunk(
  'appointment/getAppointments',
  async (params) => {
    const response = await appointmentService.patientAppointments(params);
    return response.data;
  },
);

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: {
    doctors: [],
    freeTime: [],
    appointment: {},
    patientAppointments: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getDoctors.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(getDoctors.fulfilled,
      (state, action) => ({
        ...state, doctors: action.payload, loading: false, error: null,
      }));
    builder.addCase(getDoctors.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }));

    builder.addCase(getFreeTime.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(getFreeTime.fulfilled,
      (state, action) => ({
        ...state, freeTime: action.payload, loading: false, error: null,
      }));
    builder.addCase(getFreeTime.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }));

    builder.addCase(createAppointment.pending,
      (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(createAppointment.fulfilled,
      (state, action) => ({
        ...state, appointment: action.payload, loading: false, error: null,
      }));
    builder.addCase(createAppointment.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }));

    builder.addCase(getAppointments.pending,
      (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(getAppointments.fulfilled,
      (state, action) => ({
        ...state, patientAppointments: action.payload, loading: false, error: null,
      }));
    builder.addCase(getAppointments.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }));
  },

});

export default appointmentSlice.reducer;
