# Student Profile App

This is a simple React application that displays and edits a student's profile, including personal details, educational history, and enrolled courses. The profile data is stored in the browser's local storage.

## Features

- **Profile Details Page:**
  - Displays student's personal information (name, age, email, and contact number).
  - Displays student's educational history (list of institutions attended, degrees earned, and years of attendance).
  - Displays student's enrolled courses (course name, instructor, and duration).
  - Provides an "Edit" button to navigate to the profile edit page.

- **Profile Edit Page:**
  - Allows editing of the student's personal information.
  - Allows adding, editing, and removing educational history.
  - Allows adding, editing, and removing enrolled courses.
  - Provides "Save" and "Cancel" buttons.

- **API Interaction:**
  - Fetches student data from local storage.
  - Updates student data in local storage.

## Tech Stack

- **Frontend:** React
- **State Management:** Redux
- **Side Effects Management:** Redux-Saga

## Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/student-profile-app.git
cd student-profile-app
