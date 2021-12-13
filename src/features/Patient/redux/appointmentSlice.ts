import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { appointmentService } from '../../../services/appointment.service';

export const getDoctors = createAsyncThunk(
  'appointment/getDoctors',
  async (params:string) => {
    const response = await appointmentService.doctors(params);
    return response.data;
  },
);

export const getFreeTime = createAsyncThunk(
  'appointment/getFreeTime',
  async (params:{}) => {
    const response = await appointmentService.freeTime(params);
    return response.data;
  },
);

export const createAppointment = createAsyncThunk(
  'appointment/createAppointment',
  async (params:{}) => {
    const response = await appointmentService.appointment(params);
    return response.data;
  },
);

export const fetchAppointments = createAsyncThunk(
  'appointment/getAppointments',
  async () => {
    const response = await appointmentService.patientAppointments();
    return response.data;
  },
);

interface PatientsAppointmentsModel { 
  id: string,
  reason: string,
  note: string,
  patient_id: string,
  doctor_id: string,
  visit_date: string,
  status: string,
  doctor: {
    last_name: string,
    first_name: string,
    id: string,
    photo: string,
    specialization_name: string
  }
}

interface DoctorsModel {
  id:string, 
  last_name:string, 
  first_name:string
}

interface InitialStateTypes {
  doctors: DoctorsModel[] | null,
  freeTime: [] | null,
  appointment: {} | null,
  patientAppointments: null | {
    appointments: null | PatientsAppointmentsModel[] 
  },
  loading: boolean,
  error: null | string,
}

const initialState = {
  doctors: [],
  freeTime: [],
  appointment: {},
  patientAppointments: null,
  loading: false,
  error: null,
} as InitialStateTypes;

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(getDoctors.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(
      getDoctors.fulfilled,
      (state, action) => ({
        ...state, doctors: action.payload, loading: false, error: null,
      }),
    );
    builder.addCase(
      getDoctors.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }),
    );

    builder.addCase(getFreeTime.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(
      getFreeTime.fulfilled,
      (state, action) => ({
        ...state, freeTime: action.payload, loading: false, error: null,
      }),
    );
    builder.addCase(
      getFreeTime.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }),
    );

    builder.addCase(
      createAppointment.pending,
      (state) => ({ ...state, loading: true, error: null }),
    );
    builder.addCase(
      createAppointment.fulfilled,
      (state, action) => ({
        ...state, appointment: action.payload, loading: false, error: null,
      }),
    );
    builder.addCase(
      createAppointment.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }),
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
  },

});

export default appointmentSlice.reducer;
