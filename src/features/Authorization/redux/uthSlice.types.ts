export interface UserProfileModel {
  id: string,
  first_name: string,
  last_name: string,
  photo: string,
  role_name: string
}

export interface InitialStateTypes {
  token: null | string,
  profile: null | UserProfileModel,
  loading: boolean,
  error: null | string
}