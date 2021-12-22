export const DICTIONARY = {
  roles: {
    doctor: 'Doctor',
    patient: 'Patient',
  },
  authForm: {
    signUp: 'Sign Up',
    signIn: 'Sign In',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    haveAccount: 'Already have an account?',
    dontHaveAccount: 'Don’t have an account?',
    restorePassword: 'Restore Password',
    restorePasswordText: 'Please use your email address, and we’ll send you the link to reset your password',
    sentResetLink: 'Send Reset Link',
    forgotPassword: 'Forgot password?',
  },
  pageName: {
    myPatients: 'My Patients',
    myAppointments: 'My Appointments',
    makeAppointment: 'Make an appointment',
    resolutions: 'Resolutions',
    appointments: 'Appointments',
    patients: 'Patients',
    profile: 'Profile',
  },
  newAppointment: {
    createAppointment: 'Create an appointment',
    selectDoctor: 'Select a doctor and define the reason of your visit',
    selectDay: 'Choose a day for an appointment',
    selectTime: 'Select an available timeslot',
    submit: 'Submit',
  },
  newAppointmentLabels: {
    occupation: 'Occupation',
    doctorsName: 'Doctor’s Name',
    visitReason: 'Reason for the visit',
    note: 'Note',
  },
  newAppointmentPlaseholders: {
    occupation: 'Please select the doctors specialization',
    doctorsName: 'Select the doctor',
    visitReason: 'Indicate the reason of your visit',
    note: 'Leave a note if needed',
  },
  validationErrors: {
    occupation: 'Please select the doctors specialization',
    doctorsName: 'Please select the doctor',
    visitReason: 'Please indicate the reason of your visit',
    note: 'Please add the note to the appointment',
    time: 'Please choose the available time slot',
    max100Simbols: 'Must be shorter than 100 symbols',
    emailNotValid: 'The email must be a valid email adress',
    emailRequired: 'Email is required',
    passNotValid: 'Password must contain a capital letter and be at least 8 characters long',
    passRequired: 'Password is required',
    firstNameNotValid: 'First Name contains unsupported characters',
    firstNameRequiered: 'First Name is required',
    lastNameNotValid: 'Last Name contains unsupported characters',
    lastNameRequiered: 'Last Name is required',
    passConfirmRequiered: 'Password confirmation is required',
    passConfirmMatch: 'Passwords don`t match',
    resolutionRequiered: 'Resolution is requiered',
  },
  page404: {
    textTop: 'Oops...',
    text:'We can’t seem to find the page you are looking for.',
  },
  toastMessages: {
    commonError: 'Something went wrong. Please try again',
    createAppointmentSucces: 'Appointment was succesfully created',
    logInError: 'You have entered an invalid username or password',
    signUpError: 'User already exist',
    deleteAppointmentSucces: 'Appointment was succesfully deleted',
    createResolution: 'Resolution was succesfully created',
    deleteResolutionSucces: 'Resolution was succesfully deleted',
    updateResolutionSucces: 'Resolution was succesfully updated',
    updateAppointmentSucces: 'Appointment was succesfully updated',
  },
  menu: {
    createResolution: 'Create a resolution',
    editResolution: 'Edit the resolution',
    editAppointment: 'Edit the appointment',
    delete: 'Delete',
  },
  modalWindow: {
    createResolution: 'Create a Resolution',
    updateResolution: 'Update the Resolution',
    updateAppointment: 'Update the Appointment',
    resolution: 'Resolution',
    appointment: 'Appointment',
    cancel: 'Cancel',
    create: 'Create',
    save: 'Save',
  },
  appointmentStatus: {
    confirmed: 'Appointment is confirmed',
    canceled: 'Appointment is canceled',
    waiting: 'Waiting for confirmation', 
  },
};
