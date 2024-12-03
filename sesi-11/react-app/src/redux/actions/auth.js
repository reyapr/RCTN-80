import { LOGIN_FAILED, LOGIN_PENDING, LOGIN_SUCCESS } from '../reducers/auth';

const LOGIN_PENDING_ACTION = {
  type: LOGIN_PENDING,
};

const setLoginSuccess = (isSuccess) => ({
  type: LOGIN_SUCCESS,
  payload: isSuccess,
});

const setLoginFailed = (errorMsg) => ({
  type: LOGIN_FAILED,
  payload: errorMsg,
});

const callLogin = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@gmail.com' && password === 'admin') {
        resolve(true);
      } else {
        reject(new Error('Invalid email and password'));
      }
    }, 3500);
  });
};

export const login = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(LOGIN_PENDING_ACTION); // loading

    try {
      const isSuccessLogin = await callLogin({ email, password });
      dispatch(setLoginSuccess(isSuccessLogin));
    } catch (error) {
      dispatch(setLoginFailed(error.message));
    }
  };
};
