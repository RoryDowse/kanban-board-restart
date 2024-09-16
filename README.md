[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Kanban Board

## Description

The motivation for this project was to enhance the security of a Kanban board application by integrating JSON Web Tokens (JWTs) for authentication. This addition ensures that only authorized users can access and manage their tasks, thereby protecting sensitive information. By implementing JWT-based authentication, I aimed to provide a secure and seamless user experience, addressing the need for reliable user access control. Through this project, I learned how to effectively manage JWTs for both secure login and session handling, and gained experience in deploying a secure application to Render.

Deployed Link: https://kanban-board-ox3a.onrender.com/

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. Clone the repository
2. Install the dependencies
3. Run `npm run build`
4. Run `npm run seed`
5. Run `npm run start`

## Usage

1. Run the application on the local server or from the deployed link.
2. Click 'login', enter the user credentials, and submit the form.
3. View the Kanban Board, add a New Ticket, Edit, or Delete a ticket.
4. To add a New Ticket, select "New Ticket" and enter the Ticket Name, Ticket Status, Ticket Description, and User's ID and submit the ticket.
5. To edit a ticket, select "Edit Ticket" and enter the Ticket Name, Ticket Status, Ticket Description and submit the ticket.
6. To delete a ticket, select "Delete Ticket"
7. To logout, select "Logout"

![Screenshot](assets/images/screenshot.png)

## License

This project is licensed under the MIT license.

## Contributing

## Third-Party Assets

- **[React](https://github.com/facebook/react)** - JavaScript library for building user interfaces.
- **[JSON Web Tokens (JWT)](https://github.com/auth0/node-jsonwebtoken)** - Implementation of JWT for authentication.
- **[Insomnia](https://github.com/Kong/insomnia)** - Tool for API testing and debugging.
- **[Render](https://github.com/render)** - Platform for deploying and managing web applications.
- **[Deploy with Render and PostgreSQL guide](https://coding-boot-camp.github.io/full-stack/render/deploy-with-render-and-postgresql)** - Instructions for deploying with Render and PostgreSQL.

## Tests

## Testing Instructions and Examples

### 1. **Testing the Server API**

To ensure that the server API is functioning correctly, use Insomnia or any similar API testing tool.

#### Using Insomnia

1. **Import API Requests:**

   - Download and unzip the [Insomnia request collection](https://static.bc-edx.com/coding/software-dev/14-Full-Stack-React/assets/Insomnia_M14_Challenge.zip).
   - Open Insomnia and import the JSON file to load the request collection.

2. **Test Authentication Endpoints:**

   - **Login Request:**

     - Method: `POST`
     - URL: `http://localhost:5000/api/auth/login`
     - Body:
       ```json
       {
         "username": "your_username",
         "password": "your_password"
       }
       ```
     - Check for a successful response with a JWT token.

   - **Protected Resource Request:**
     - Method: `GET`
     - URL: `http://localhost:5000/api/protected-resource`
     - Headers:
       ```json
       {
         "Authorization": "Bearer <your_jwt_token>"
       }
       ```
     - Verify that the request is authenticated and returns the expected data.

### 2. **Testing the Client Application**

#### Manual Testing

1. **Run the Application:**

   - Start the development server for the client:
     ```bash
     cd client
     npm start
     ```

2. **Verify Login Functionality:**

   - Navigate to `http://localhost:3000/login`.
   - Enter valid credentials and ensure successful redirection to the Kanban board.
   - Enter invalid credentials and check for appropriate error messages.

3. **Test Kanban Board Operations:**

   - Add, edit, and delete tasks to ensure that the Kanban board updates as expected.
   - Move tasks between columns and verify that changes are reflected correctly.

4. **Test Logout Functionality:**
   - Click the "Logout" button and ensure that you are redirected to the login page and the JWT is removed from local storage.

## Questions

Please visit my GitHub profile: https://github.com/RoryDowse.<br>
For additional questions, please contact me at: rorydowse@hotmail.com.
