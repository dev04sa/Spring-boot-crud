# CRUD Application using Vite and Spring Boot

This is a simple CRUD (Create, Read, Update, Delete) application built using Vite for the frontend and Spring Boot for the backend.

## Overview

The application provides a user interface to perform CRUD operations on a database. It consists of two main components:

- Frontend: Built with Vite, a modern frontend tooling. It provides the user interface for interacting with the CRUD functionalities.
- Backend: Built with Spring Boot, a powerful Java-based framework. It handles the business logic and data persistence for the application.

## Prerequisites

Make sure you have the following installed before running the application:

- Node.js and npm: To run the frontend built with Vite.
- Java Development Kit (JDK): To run the Spring Boot backend.

## Installation

### Frontend

1. Navigate to the `emp_crud` directory.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

### Backend

1. Navigate to the `crud_app` directory.
2. Import the project into your favorite IDE (Eclipse, IntelliJ, etc.).
3. Build and run the project.

## Usage

Once both the frontend and backend are running, you can access the application in your browser. By default, the frontend server runs on port 5173, and the backend server runs on port 8080.

Open your browser and navigate to `http://localhost:5173` to use the CRUD application.

## API Documentation

The backend exposes RESTful APIs to perform CRUD operations on employee records. Here are the available endpoints:

- `GET /api/employee`: Retrieve all employees.
- `GET /api/employee/{id}`: Retrieve a specific employee by ID.
- `POST /api/employee`: Create a new employee.
- `PUT /api/employee/{id}`: Update an existing employee.
- `DELETE /api/employee/{id}`: Delete an employee by ID.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
