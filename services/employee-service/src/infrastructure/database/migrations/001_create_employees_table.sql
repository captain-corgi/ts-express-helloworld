-- Migration: Create employees table
CREATE TABLE IF NOT EXISTS employees (
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    start_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL
);
