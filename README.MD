# Social Media and Link Management Application

## Project Description and Objective
This project is designed for managing social media links and related information. The application is developed following atomic design principles and includes the use of directives, pipes, guards, resolvers, and more. The primary goal of this project is to perform CRUD operations on social media links. The backend is implemented with Node.js, providing login and CRUD APIs. As a bonus feature, clicking on a row in the link table redirects the user to the corresponding URL, allowing for direct visits to the site. Information about visited links is stored locally and displayed under "Recently Visited" on the right side of the homepage.

## Technologies and Tools
- **Frontend**: Angular, Bootstrap, PrimeNG, RxJS, TypeScript, HTML, SCSS
- **Backend**: Node.js, Express, PostgreSQL (via Docker)

## Installation Instructions

### Backend Setup

#### 1. Set Up the PostgreSQL Database with Docker

A Docker Compose file has been provided to set up the PostgreSQL database:

1. Ensure Docker and Docker Compose are installed on your machine.

2. Navigate to the backend directory where the `backend/docker-compose.yml` file is located.

3. Run the following command to start the PostgreSQL database:

    ```bash
    docker-compose up -d
    ```

    This will start the PostgreSQL container, create a database named `social_media_links`, and initialize the database schema using the SQL file located at `backend/sql/create_tables.sql`.

4. Verify that the database is running and properly initialized:

    - You can connect to the database using any PostgreSQL client with the following credentials:
      - **Host**: `localhost`
      - **Port**: `5432`
      - **User**: `postgres`
      - **Password**: `yourpassword`
      - **Database**: `social_media_links`

    - Alternatively, you can use the following command to connect via `psql` (PostgreSQL command line tool):
      ```bash
      psql -h localhost -U postgres -d social_media_links
      ```

5. To inspect the tables, you can run:

    ```sql
    SELECT * FROM links;
    SELECT * FROM users;
    ```

#### 2. Install Node.js Dependencies

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Install the required packages:

    ```bash
    npm install
    ```

3. Start the backend server:

    ```bash
    node index.js
    ```

    The API will be running at `http://localhost:3000/api/links`.

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the required packages:
    ```bash
    npm install
    ```

3. Start the Angular application:
    ```bash
    npm start
    ```
    or
    ```bash
    ng serve
    ```

4. Open your browser and go to `http://localhost:4200`.

## Project Architecture
The project consists of two main components: the frontend and the backend. The frontend handles user interface and interactions, while the backend manages data and API operations.

### Frontend

#### Atomic Design Structure
The frontend is structured according to atomic design principles and includes the following component categories:
- **Atom Components**: `Button`, `Input`, `FilterButton`
- **Molecule Components**: `SearchBar`, `SocialButton`, `LoginAnimation`, `VisitedLink`
- **Organism Components**: `LoginForm`, `Navbar`, `Table`
- **Template Components**: `MainTemplate`
- **Page Components**: `HomePage`, `LoginPage`

#### Directive and Pipe Usage
Custom directives and pipes are used to create dynamic and reusable code structures. A directive ensures that links start with `http://` or `https://`. A pipe displays social media names in uppercase. A `Search` pipe is used for filtering the table.

### Backend

#### API Endpoints
The backend API provides the following endpoints:
- **POST** `/api/login`: Validates login credentials to access the main page.
- **GET** `/api/links`: Retrieves all social media links.
- **POST** `/api/links`: Adds a new social media link.
- **PUT** `/api/links/:id`: Updates the social media link with the specified ID.
- **DELETE** `/api/links/:id`: Deletes the social media link with the specified ID.

#### Database Design
The database includes the `links` table for storing social media links with the following fields:
- `id`: Auto-incremented primary key.
- `name`: Name of the social media platform.
- `url`: The link URL.
- `description`: Description of the link.

The `users` table is used for user login information:
- `id`: Auto-incremented primary key.
- `username`: Username.
- `password`: User password.

### Postman Collection
A Postman collection is included in the project for testing API requests. To import this collection into Postman:
1. Open Postman.
2. Click the "Import" button in the top left corner.
3. Choose "Upload Files".
4. Select and upload the `link-management.postman_collection.json` file from `src/assets/postman-collections`.

By following these steps, you can easily test the API requests in Postman.

