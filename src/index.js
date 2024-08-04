import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const initialData = {
  name: "Rijish Ahuja",
  age: 22,
  email: "rhythm00ahuja@gmail.com",
  contact: "8860472997",
  education: [
    { institution: "University A", degree: "B.tech", year: 2023 },
    { institution: "University B", degree: "M.tech", year: 2024 }
  ],
  courses: [
    { name: "Course A", instructor: "Instructor A", duration: "3 months" },
    { name: "Course B", instructor: "Instructor B", duration: "6 months" }
  ]
};

if (!localStorage.getItem('studentData')) {
  localStorage.setItem('studentData', JSON.stringify(initialData));
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
