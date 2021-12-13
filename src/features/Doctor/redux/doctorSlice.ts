import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doctorService } from '../../../services/doctor.service';

export const getAppointments = createAsyncThunk(
  'doctor/getAppointments',
  async () => {
    const response = await doctorService.patients();
    return response.data;
  },
);

interface DoctorAppointmentsModel {
  id: string,
  reason: string,
  note: string,
  patient_id: string,
  doctor_id: string,
  visit_date: string,
  status: string,
  patient: {
    last_name: string,
    first_name: string,
    id: string,
    photo: string
  }
}

interface InitialStateTypes {
  doctorappointments: null | { 
    appointments: DoctorAppointmentsModel[] },
  loading: boolean,
  error: null | string
}


const initialState = {
  doctorappointments:null,
  loading: false,
  error: null,
} as InitialStateTypes;

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(getAppointments.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(
      getAppointments.fulfilled,
      (state, action) => ({
        ...state, doctorappointments: action.payload, loading: false, error: null,
      }),
    );
    builder.addCase(
      getAppointments.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }),
    );
  },
});

export default doctorSlice.reducer;
