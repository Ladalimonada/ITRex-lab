import { Slide, ToastContainer } from 'react-toastify';

export const CustomToastContainer = ({ ...rest }) => {
  return (
        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Slide}
            {...rest} />
  );
}; 