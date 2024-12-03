const initialState = {
  errorMsg: '',
  isSuccess: false,
  isLoading: false,
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_PENDING = 'LOGIN_PENDING';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isSuccess: action.payload,
        isLoading: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        errorMsg: action.payload,
        isLoading: false,
      };
    case LOGIN_PENDING:
      return {
        ...initialState,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default reducer;
