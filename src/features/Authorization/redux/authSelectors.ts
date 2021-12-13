import { RootState } from '../../../store/store';

export const auth = ((state:RootState) => state.auth);

export const userProfile = ((state:RootState) => auth(state) &&  auth(state).profile);

export const userProfileLoading = ((state:RootState) => auth(state).loading);