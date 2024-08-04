import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStudentData } from '../redux/actions';

const ProfileEdit = ({ onCancel }) => {
  const dispatch = useDispatch();
  const studentData = useSelector((state) => state.studentData);
  const [formData, setFormData] = useState(studentData);

  useEffect(() => {
    setFormData(studentData);
  }, [studentData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...formData.education];
    newEducation[index][field] = value;
    setFormData({ ...formData, education: newEducation });
  };

  const handleCourseChange = (index, field, value) => {
    const newCourses = [...formData.courses];
    newCourses[index][field] = value;
    setFormData({ ...formData, courses: newCourses });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudentData(formData));
    onCancel();
  };

  if (!formData) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="profile-edit">
      <h1>Edit Profile</h1>

      <h2>Personal Information</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" />

      <h2>Educational History</h2>
      {formData.education.map((edu, index) => (
        <div key={index}>
          <input
            value={edu.institution}
            onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
            placeholder="Institution"
          />
          <input
            value={edu.degree}
            onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
            placeholder="Degree"
          />
          <input
            value={edu.year}
            onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
            placeholder="Year"
          />
        </div>
      ))}

      <h2>Enrolled Courses</h2>
      {formData.courses.map((course, index) => (
        <div key={index}>
          <input
            value={course.name}
            onChange={(e) => handleCourseChange(index, 'name', e.target.value)}
            placeholder="Course Name"
          />
          <input
            value={course.instructor}
            onChange={(e) => handleCourseChange(index, 'instructor', e.target.value)}
            placeholder="Instructor"
          />
          <input
            value={course.duration}
            onChange={(e) => handleCourseChange(index, 'duration', e.target.value)}
            placeholder="Duration"
          />
        </div>
      ))}

      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ProfileEdit;
