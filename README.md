# Login-Logout Page with Bcrypt, JWT, and React

This project demonstrates how to build a secure login-logout page using Node.js, Express, Bcrypt, JWT, and React. It aims to provide a robust authentication system for your web application.

## Dependencies

### Backend (Node.js)

- [Express](https://www.npmjs.com/package/express): A Node.js framework for building web applications.
- [Bcrypt](https://www.npmjs.com/package/bcrypt): A library for securely hashing passwords.
- [Cookie-parser](https://www.npmjs.com/package/cookie-parser): Middleware for parsing cookies in HTTP requests.
- [Cors](https://www.npmjs.com/package/cors): Middleware for handling Cross-Origin Resource Sharing.
- [Dotenv](https://www.npmjs.com/package/dotenv): A library for loading environment variables.
- [JSON Web Token (JWT)](https://www.npmjs.com/package/jsonwebtoken): A mechanism for secure user authentication.
- [Mongoose](https://www.npmjs.com/package/mongoose): A MongoDB ODM library for interacting with the database.
- [Nodemon](https://www.npmjs.com/package/nodemon): A utility for auto-restarting the Node.js application when files change.
- [Email-validator](https://www.npmjs.com/package/email-validator): A library for validating email addresses.

### Frontend (React)

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React-DOM](https://www.npmjs.com/package/react-dom): A library for rendering React components in the browser.
- [React-Router-DOM](https://www.npmjs.com/package/react-router-dom): A library for handling routing in a React application.
- [Axios](https://www.npmjs.com/package/axios): A promise-based HTTP client for making API requests.

## Getting Started

To start the application, follow these steps:

### Backend:

1. Clone the project repository to your local machine.
2. Navigate to the `backend` directory using your command line interface.
3. Run `npm install` to install the required Node.js packages.
4. Create a `.env` file and configure it with the necessary environment variables, such as the database connection URI and JWT secret key.
5. Run `npm start` or `nodemon start` to start the Express server.

### Frontend:

1. Navigate to the `frontend` directory within the project folder.
2. Run `npm install` to install the required React packages.
3. Start the React development server with `npm start`.

This will launch the development server for the frontend and the backend. You can access the application by opening a web browser and navigating to the specified URL (usually `http://localhost:3000` for the React frontend).

## Usage

The application allows users to register, log in, and log out securely. It handles token-based authentication using JWT and stores user data in a MongoDB database. You can use the provided libraries and technologies to expand the functionality of the login-logout page as needed for your project.

`This project also ensures the authentication of the user by the encryption of the user credentials`
