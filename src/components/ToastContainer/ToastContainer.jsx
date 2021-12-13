import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';

export const CustomToast = () => {
    <ToastContainer
    position="bottom-left"
    autoClose={10000}
    hideProgressBar
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    transition={Slide}
    style={''}
    limit={5}
    >
</ToastContainer>;
};