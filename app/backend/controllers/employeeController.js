const employees = require("../models/employeeModel");

const getAllEmployees = (req, res) => {
  res.json(employees);
};

const getEmployeeById = (req, res) => {
  const employee = employees.find((emp) => emp.id === Number(req.params.id));

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  res.json(employee);
};

const createEmployee = (req, res) => {
  const newEmployee = {
    id: employees.length + 1,
    name: req.body.name,
    role: req.body.role,
    department: req.body.department,
    status: req.body.status || "Active",
  };

  employees.push(newEmployee);
  res.status(201).json(newEmployee);
};

const updateEmployee = (req, res) => {
  const employee = employees.find((emp) => emp.id === Number(req.params.id));

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  employee.name = req.body.name || employee.name;
  employee.role = req.body.role || employee.role;
  employee.department = req.body.department || employee.department;
  employee.status = req.body.status || employee.status;

  res.json(employee);
};

const deleteEmployee = (req, res) => {
  const index = employees.findIndex((emp) => emp.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Employee not found" });
  }

  const deletedEmployee = employees.splice(index, 1);

  res.json({
    message: "Employee deleted successfully",
    employee: deletedEmployee[0],
  });
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};