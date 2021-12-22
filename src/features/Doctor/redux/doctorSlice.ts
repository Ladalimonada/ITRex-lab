import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { doctorService } from '../../../services/doctor.service';
import { InitialStateTypes, UpdateResolutionParams, UpdateAppointmentParams } from './doctorSlice.types';
import { errorNotify, successNotify } from '../../../components';
import { DICTIONARY } from '../../../shared/dictionary';

export const fetchAppointments = createAsyncThunk(
  'doctor/fetchAppointments',
  async () => {
    const response = await doctorService.patients();
    return response.data;
  },
);

export const fetchResolutions = createAsyncThunk(
  'doctor/fetchResolutions',
  async () => {
    const response = await doctorService.resolutions();
    return response.data;
  },
);

export const deleteAppointment = createAsyncThunk(
  'doctor/deleteAppointment',
  async (id: string, thunkAPI) => {
    const response = await doctorService.deleteAppointment(id);
    thunkAPI.dispatch(fetchAppointments());
    return response.data;
  },
);

export const updateResolution = createAsyncThunk(
  'doctor/updateResolution',
  async ({ resolution, resolutionID }: UpdateResolutionParams, thunkAPI) => {
    const response = await doctorService.updateResolution(resolution, resolutionID);
    thunkAPI.dispatch(fetchResolutions());
    return response.data;
  },
);

export const updateAppointment = createAsyncThunk(
  'doctor/updateAppointment',
  async ({ status, appointmentID }: UpdateAppointmentParams, thunkAPI) => {
    const response = await doctorService.updateAppointment(status, appointmentID);
    thunkAPI.dispatch(fetchAppointments());
    return response.data;
  },
);

export const createResolution = createAsyncThunk(
  'doctor/createResolution',
  async (body: {}) => {
    const response = await doctorService.createResolution(body);
    return response.data;
  },
);

export const deleteResolution = createAsyncThunk(
  'doctor/deleteResolution',
  async (id: string, thunkAPI) => {
    const response = await doctorService.deleteResolution(id);
    thunkAPI.dispatch(fetchResolutions());
    return response.data;
  },
);


const initialState: InitialStateTypes = {
  doctorAppointments: null,
  loading: false,
  error: null,
  deletedAppointment: null,
  updatedAppointment: null,
  resolution: null,
  doctorResolutions: null,
  deletedResolution: null,
  updatedResolution: null,
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(
      fetchAppointments.fulfilled,
      (state, action) => ({
        ...state, doctorAppointments: action.payload, loading: false, error: null,
      }),
    );

    builder.addCase(
      deleteAppointment.fulfilled,
      (state, action) => ((successNotify(DICTIONARY.toastMessages.deleteAppointmentSucces), {
        ...state, deletedAppointment: action.payload, loading: false, error: null,
      })),
    );

    builder.addCase(
      createResolution.fulfilled,
      (state, action) => ((successNotify(DICTIONARY.toastMessages.createResolution), {
        ...state, resolution: action.payload, loading: false, error: null,
      })),
    );

    builder.addCase(
      fetchResolutions.fulfilled,
      (state, action) => ({
        ...state, doctorResolutions: action.payload, loading: false, error: null,
      }),
    );

    builder.addCase(
      deleteResolution.fulfilled,
      (state, action) => ((successNotify(DICTIONARY.toastMessages.deleteResolutionSucces), {
        ...state, deletedResolution: action.payload, loading: false, error: null,
      })),
    );

    builder.addCase(
      updateResolution.fulfilled,
      (state, action) => ((successNotify(DICTIONARY.toastMessages.updateResolutionSucces), {
        ...state, updatedResolution: action.payload, loading: false, error: null,
      })),
    );

    builder.addCase(
      updateAppointment.fulfilled,
      (state, action) => ((successNotify(DICTIONARY.toastMessages.updateAppointmentSucces), {
        ...state, updatedAppointment: action.payload, loading: false, error: null,
      })),
    );

    builder.addMatcher(isAnyOf(updateAppointment.rejected, updateResolution.rejected, deleteResolution.rejected, fetchResolutions.rejected, createResolution.rejected, fetchAppointments.rejected),
      (state, action) => ((errorNotify(DICTIONARY.toastMessages.commonError), { ...state, error: action.error.message, loading: false })),
    );
    builder.addMatcher(isAnyOf(updateAppointment.pending, updateResolution.pending, deleteResolution.pending, fetchResolutions.pending, createResolution.pending, fetchAppointments.pending),
      (state) => ({ ...state, loading: true, error: null }));
  },

});

export default doctorSlice.reducer;
