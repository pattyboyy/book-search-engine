# Book Search Engine

<img width="1269" alt="Screenshot 2024-07-30 at 9 39 28 PM" src="https://github.com/user-attachments/assets/b97554d7-1cce-459c-af86-66939cc78c6d">



## Description
This Book Search Engine is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that allows users to search for books using the Google Books API. Users can create accounts, save books to their profile, and manage their saved books. The application has been refactored from a RESTful API to a GraphQL API built with Apollo Server.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Features
- User authentication (signup and login)
- Book search functionality using Google Books API
- Save books to user profile
- View and manage saved books
- Responsive design for various screen sizes

## Technologies Used
- MongoDB
- Express.js
- React
- Node.js
- GraphQL
- Apollo Server
- JSON Web Tokens for authentication
- Bootstrap for styling
- Heroku for deployment

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/book-search-engine.git
    ```

2. Navigate to the project directory:
    ```bash
    cd book-search-engine
    ```

3. Install server dependencies:
    ```bash
    npm install
    ```

4. Navigate to the client directory and install client dependencies:
    ```bash
    cd client
    npm install
    ```

5. Return to the root directory:
    ```bash
    cd ..
    ```

6. Create a `.env` file in the root directory and add your MongoDB URI and JWT secret:
    ```env
    MONGODB_URI=your_mongodb_uri_here
    JWT_SECRET=your_jwt_secret_here
    ```

## Usage
To run the application locally:

1. From the root directory, start the server and client concurrently:
    ```bash
    npm run develop
    ```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000)
3. Sign up for an account or log in if you already have one
4. Search for books, save them to your profile, and manage your saved books

## Screenshots
[Include screenshots of key features or pages of your application here]

## Contributing
Contributions to improve the Book Search Engine are welcome. Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch:
    ```bash
    git checkout -b feature/AmazingFeature
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add some AmazingFeature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/AmazingFeature
    ```
5. Open a Pull Request

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Questions
If you have any questions about the project, please open an issue or contact me directly at patried7@gmail.com.
You can find more of my work at [Your GitHub Username](https://github.com/your-username).
