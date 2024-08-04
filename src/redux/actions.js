export const FETCH_STUDENT_DATA = 'FETCH_STUDENT_DATA';
export const SET_STUDENT_DATA = 'SET_STUDENT_DATA';
export const UPDATE_STUDENT_DATA = 'UPDATE_STUDENT_DATA';

export const fetchStudentData = () => ({ type: FETCH_STUDENT_DATA });
export const setStudentData = (data) => ({ type: SET_STUDENT_DATA, payload: data });
export const updateStudentData = (data) => ({ type: UPDATE_STUDENT_DATA, payload: data });