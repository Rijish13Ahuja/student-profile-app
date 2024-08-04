import { SET_STUDENT_DATA } from './actions';

const initialState = {
  studentData: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STUDENT_DATA:
      return { ...state, studentData: action.payload };
    default:
      return state;
  }
};

export default rootReducer;