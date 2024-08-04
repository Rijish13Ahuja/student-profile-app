export const getStudentData = () => {
    const data = localStorage.getItem('studentData');
    return data ? JSON.parse(data) : null;
  };
  
  export const setStudentData = (data) => {
    localStorage.setItem('studentData', JSON.stringify(data));
  };