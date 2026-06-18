CREATE TABLE IF NOT EXISTS employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL,
  department VARCHAR(100) NOT NULL,
  status VARCHAR(50) DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO employees (name, role, department, status)
VALUES
('John Doe', 'DevOps Engineer', 'Platform', 'Active'),
('Alice Smith', 'Cloud Engineer', 'Infrastructure', 'Active'),
('David Brown', 'Security Engineer', 'DevSecOps', 'On Leave');