import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { appointmentService } from '../../../services/patient.service';
import { successNotify, errorNotify } from '../../../components';
import { DICTIONARY } from '../../../shared/dictionary';
import { InitialStateTypes } from './patientSlice.types';


export const fetchDoctors = createAsyncThunk(
  'appointment/fetchDoctors',
  async (params: string) => {
    const response = await appointmentService.doctors(params);
    return response.data;
  },
);

export const fetchFreeTime = createAsyncThunk(
  'appointment/fetchFreeTime',
  async (params: {}) => {
    const response = await appointmentService.freeTime(params);
    return response.data;
  },
);

export const createAppointment = createAsyncThunk(
  'appointment/createAppointment',
  async (params: {}) => {
    const response = await appointmentService.appointment(params);
    return response.data;
  },
);

export const fetchAppointments = createAsyncThunk(
  'appointment/fetchAppointments',
  async () => {
    const response = await appointmentService.patientAppointments();
    return response.data;
  },
);

export const fetchResolutions = createAsyncThunk(
  'appointment/fetchResolutions',
  async () => {
    const response = await appointmentService.patientResolutions();
    return response.data;
  },
);

const initialState:InitialStateTypes = {
  doctors: [],
  freeTime: [],
  appointment: {},
  patientAppointments: null,
  loading: false,
  error: null,
  patientResolutions: null,
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDoctors.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(fetchDoctors.fulfilled, (state, action) => ({
      ...state, doctors: action.payload, loading: false, error: null,
    }),
    );
    builder.addCase(
      fetchDoctors.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }),
    );

    builder.addCase(fetchFreeTime.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(
      fetchFreeTime.fulfilled,
      (state, action) => ({
        ...state, freeTime: action.payload, loading: false, error: null,
      }),

    );
    builder.addCase(
      fetchFreeTime.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }),
    );

    builder.addCase(
      createAppointment.pending,
      (state) => ({ ...state, loading: true, error: null }),
    );
    builder.addCase(
      createAppointment.fulfilled,
      (state, action) => ((successNotify(DICTIONARY.toastMessages.createAppointmentSucces),
      { ...state, appointment: action.payload, loading: false, error: null,
      })),
    );
    builder.addCase(
      createAppointment.rejected,
      (state, action) => ((errorNotify(DICTIONARY.toastMessages.commonError),
      { ...state, error: action.error.message, loading: false })),
    );

    builder.addCase(
      fetchAppointments.pending,
      (state) => ({ ...state, loading: true, error: null }),
    );
    builder.addCase(
      fetchAppointments.fulfilled,
      (state, action) => ({
        ...state, patientAppointments: action.payload, loading: false, error: null,
      }),
    );
    builder.addCase(
      fetchAppointments.rejected, 
      (state, action) => ({ ...state, error: action.error.message, loading: false }),
    );
    builder.addCase(
      fetchResolutions.pending,
      (state) => ({ ...state, loading: true, error: null }),
    );
    builder.addCase(
      fetchResolutions.fulfilled,
      (state, action) => ({
        ...state, patientResolutions: action.payload, loading: false, error: null,
      }),
    );
    builder.addCase(
      fetchResolutions.rejected, 
      (state, action) => ({ ...state, error: action.error.message, loading: false }),
    );
  },

});

export default appointmentSlice.reducer;
