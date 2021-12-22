import { toast } from 'react-toastify';
import { ReactComponent as errorPic } from '../../img/alert.svg';
import { ReactComponent as successPic } from '../../img/check-circle.svg';

export const successNotify = (message: string) => {
  toast.success(message, {
    theme: 'colored',
    icon: successPic,
  });
};

export const errorNotify = (message: string) => {
  toast.error(message, {
    theme: 'colored',
    icon: errorPic,
  });
};