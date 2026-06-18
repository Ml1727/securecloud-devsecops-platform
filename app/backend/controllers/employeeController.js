const pool = require("../config/db");

const getAllEmployees = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM employees ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Database error", error: error.message });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM employees WHERE id = $1", [
      req.params.id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Database error", error: error.message });
  }
};

const createEmployee = async (req, res) => {
  try {
    const { name, role, department, status } = req.body;

    const result = await pool.query(
      "INSERT INTO employees (name, role, department, status) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, role, department, status || "Active"]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Database error", error: error.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { name, role, department, status } = req.body;

    const result = await pool.query(
      `UPDATE employees
       SET name = COALESCE($1, name),
           role = COALESCE($2, role),
           department = COALESCE($3, department),
           status = COALESCE($4, status)
       WHERE id = $5
       RETURNING *`,
      [name, role, department, status, req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Database error", error: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const result = await pool.query(
      "DELETE FROM employees WHERE id = $1 RETURNING *",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({
      message: "Employee deleted successfully",
      employee: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({ message: "Database error", error: error.message });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};