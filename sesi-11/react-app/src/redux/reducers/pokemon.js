
const initialState = {
  details: {
    name: null,
    avatar: null,
    height: null,
    weight: null,
  },
  list: [],
};

export const STORE_LIST = "STORE_LIST";
export const STORE_DETAILS = "STORE_DETAILS";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case STORE_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
