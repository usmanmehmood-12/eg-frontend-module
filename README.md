# Full Stack Test Task -- Front-end

## Description

This is the frontend for a user sign up and sign in App with a welcome page **_(screenshots below)_** which includes JWT authentication & authorization. Built with React, Material-UI and Typescript.

## Installation & Available Scripts

In the project directory, you can run:

1. Clone this repository

2. Install the dependencies:

```bash
   npm install
```

3. Run the app locally:

```bash
    npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## **_Features:_**

- **Web Frontend**

1. Create a responsive web application using React.js.
2. Design an intuitive and user-friendly user interface.
3. Ensure that the web application communicates effectively with the chosen backend technology (Nest.js).

- **User Authentication**

1. Implement user registration functionality, including user information collection (email, name, password). JWT implemented on backend.
2. Create a sign-up page for new users.
3. Create a login and signup page for registered users.
4. Welcome/Dashboard page secured with protected route.

- **Sign up page:**
Created a signup form with the following fields: email, name, and password. After
successful signup, users is redirected to the application page.

- **Password requirements:**
• Minimum length of 8 characters
• Contains at least 1 letter.
• Contains at least 1 number.
• Contains at least 1 special character.

- **Sign in page:**
Created a sign-in form with fields for email and password.

- **Application page:**
Created a page displaying a welcome message: "Welcome to the application."

## **_Technologies Used:_**

1. **React**: Frontend framework to build the user interface.
2. **Material-UI**: Component library for a consistent and beautiful design.
3. **React Router**: For navigation between different app views (e.g., signup, login and welcome page etc).
4. **Context API**: For state management (AuthContext).
5. **Prettier**: For code formatting.
6. **Axios**: Promise-based HTTP client for making API requests to the backend, simplifying request handling, and response management.
7. **Formik**: A React library for managing forms, handling form state, validation, and submission.
8. **Yup**: JavaScript schema validation library for validating form data and ensuring correct input.

## Error Handling

The app includes error handling mechanisms to ensure smooth user experience:

- **Form Validation**:

  - Ensures required fields (like name, email, password) are filled before submission.

- **Signup & Login Exception/Error Handling**:
  - Display relevant error messages for unsuccessful signup & login attempts.

## Screenshots of the application

- User Signin: ![signin page](https://github.com/user-attachments/assets/ae0c6365-21b9-437d-889c-d7cb7d41fee4)
- User Signup: ![signup page](https://github.com/user-attachments/assets/0fbb4688-472e-45b1-9aa2-399f4dd3dd4c)
- Welcome Page: ![welcome page](https://github.com/user-attachments/assets/a2d24542-a231-4a6e-964b-9120d482f843)


### ***Env:***
```bash
# App Domain
REACT_APP_API_URL=http://localhost:3001/

```
