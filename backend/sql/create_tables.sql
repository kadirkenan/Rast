-- Create the 'users' table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create the 'links' table if it doesn't exist
CREATE TABLE IF NOT EXISTS links (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert an initial admin user
INSERT INTO users (username, password) VALUES ('admin', 'adminpassword') ON CONFLICT DO NOTHING;
