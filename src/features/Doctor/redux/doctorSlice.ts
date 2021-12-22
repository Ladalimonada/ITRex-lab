import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

export const deleteAppointment = createAsyncThunk(
  'doctor/deleteAppointment',
  async (id: string) => {
    const response = await doctorService.deleteAppointment(id);
    return response.data;
  },
);

export const updateResolution = createAsyncThunk(
  'doctor/updateResolution',
  async ({ resolution, resolutionID }: UpdateResolutionParams) => {
    const response = await doctorService.updateResolution(resolution, resolutionID);
    return response.data;
  },
);

export const updateAppointment = createAsyncThunk(
  'doctor/updateAppointment',
  async ({ status, appointmentID }: UpdateAppointmentParams) => {
    const response = await doctorService.updateAppointment(status, appointmentID);
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

export const fetchResolutions = createAsyncThunk(
  'doctor/fetchResolutions',
  async () => {
    const response = await doctorService.resolutions();
    return response.data;
  },
);

export const deleteResolution = createAsyncThunk(
  'doctor/deleteResolution',
  async (id: string) => {
    const response = await doctorService.deleteResolution(id);
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
    builder.addCase(fetchAppointments.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(
      fetchAppointments.fulfilled,
      (state, action) => ({
        ...state, doctorAppointments: action.payload, loading: false, error: null,
      }),
    );
    builder.addCase(
      fetchAppointments.rejected,
      (state, action) => ({ ...state, error: action.error.message, loading: false }),
    );

    builder.addCase(deleteAppointment.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(
      deleteAppointment.fulfilled,
      (state, action) => ((successNotify(DICTIONARY.toastMessages.deleteAppointmentSucces), {
        ...state, deletedAppointment: action.payload, loading: false, error: null,
      })),
    );
    builder.addCase(
      deleteAppointment.rejected,
      (state, action) => ((errorNotify(DICTIONARY.toastMessages.commonError), { ...state, error: action.error.message, loading: false })),
    );

    builder.addCase(createResolution.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(
      createResolution.fulfilled,
      (state, action) => ((successNotify(DICTIONARY.toastMessages.createResolution), {
        ...state, resolution: action.payload, loading: false, error: null,
      })),
    );
    builder.addCase(
      createResolution.rejected,
      (state, action) => ((errorNotify(DICTIONARY.toastMessages.commonError), { ...state, error: action.error.message, loading: false })),
    );

    builder.addCase(fetchResolutions.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(
      fetchResolutions.fulfilled,
      (state, action) => ({
        ...state, doctorResolutions: action.payload, loading: false, error: null,
      }),
    );
    builder.addCase(
      fetchResolutions.rejected,
      (state, action) => ((errorNotify(DICTIONARY.toastMessages.commonError), { ...state, error: action.error.message, loading: false })),
    );

    builder.addCase(deleteResolution.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(
      deleteResolution.fulfilled,
      (state, action) => ((successNotify(DICTIONARY.toastMessages.deleteResolutionSucces), {
        ...state, deletedResolution: action.payload, loading: false, error: null,
      })),
    );
    builder.addCase(
      deleteResolution.rejected,
      (state, action) => ((errorNotify(DICTIONARY.toastMessages.commonError), { ...state, error: action.error.message, loading: false })),
    );

    builder.addCase(updateResolution.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(
      updateResolution.fulfilled,
      (state, action) => ((successNotify(DICTIONARY.toastMessages.updateResolutionSucces), {
        ...state, updatedResolution: action.payload, loading: false, error: null,
      })),
    );
    builder.addCase(
      updateResolution.rejected,
      (state, action) => ((errorNotify(DICTIONARY.toastMessages.commonError), { ...state, error: action.error.message, loading: false })),
    );

    builder.addCase(updateAppointment.pending, (state) => ({ ...state, loading: true, error: null }));
    builder.addCase(
      updateAppointment.fulfilled,
      (state, action) => ((successNotify(DICTIONARY.toastMessages.updateAppointmentSucces), {
        ...state, updatedAppointment: action.payload, loading: false, error: null,
      })),
    );
    builder.addCase(
      updateAppointment.rejected,
      (state, action) => ((errorNotify(DICTIONARY.toastMessages.commonError), { ...state, error: action.error.message, loading: false })),
    );
  },
});

export default doctorSlice.reducer;
