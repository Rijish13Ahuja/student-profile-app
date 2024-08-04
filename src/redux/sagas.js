import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_STUDENT_DATA, UPDATE_STUDENT_DATA, setStudentData } from './actions';
import { getStudentData, setStudentData as saveStudentData } from '../utils/localStorage';

function* fetchStudentDataSaga() {
  try {
    const data = yield call(getStudentData);
    yield put(setStudentData(data));
  } catch (error) {
    console.error('Error fetching student data:', error);
  }
}

function* updateStudentDataSaga(action) {
  try {
    yield call(saveStudentData, action.payload);
    yield put(setStudentData(action.payload));
  } catch (error) {
    console.error('Error updating student data:', error);
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_STUDENT_DATA, fetchStudentDataSaga);
  yield takeLatest(UPDATE_STUDENT_DATA, updateStudentDataSaga);
}