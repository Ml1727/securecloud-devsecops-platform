const pool = require("../config/db");

const getAllEmployees = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM employees ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Database error", error: error.message });
  }
};

module.exports = {
  getAllEmployees,
};