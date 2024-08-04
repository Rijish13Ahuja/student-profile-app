import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudentData } from '../redux/actions';
import './ProfileDetails.css';

const ProfileDetails = ({ onEdit }) => {
  const dispatch = useDispatch();
  const studentData = useSelector((state) => state.studentData);

  useEffect(() => {
    dispatch(fetchStudentData());
  }, [dispatch]);

  if (!studentData) return <div>Loading...</div>;

  return (
    <div className="profile-details">
      <h1>Student Profile</h1>
      <h2>Personal Information</h2>
      <p>Name: {studentData.name}</p>
      <p>Age: {studentData.age}</p>
      <p>Email: {studentData.email}</p>
      <p>Contact: {studentData.contact}</p>

      <h2>Educational History</h2>
      <ul>
        {studentData.education.map((edu, index) => (
          <li key={index}>
            {edu.institution} - {edu.degree} ({edu.year})
          </li>
        ))}
      </ul>

      <h2>Enrolled Courses</h2>
      <ul>
        {studentData.courses.map((course, index) => (
          <li key={index}>
            {course.name} - Instructor: {course.instructor}, Duration: {course.duration}
          </li>
        ))}
      </ul>

      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
};

export default ProfileDetails;
