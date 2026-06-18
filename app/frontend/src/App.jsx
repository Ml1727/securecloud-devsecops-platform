import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://fuzzy-fiesta-7vwr6r4q9v7w2ppq4-5000.app.github.dev/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>SecureCloud</h2>
        <p>DevSecOps Platform</p>

        <nav>
          <a>Dashboard</a>
          <a>Employees</a>
          <a>Deployments</a>
          <a>Server Health</a>
          <a>Security</a>
          <a>Monitoring</a>
        </nav>
      </aside>

      <main className="main">
        <header>
          <h1>Employee Portal Dashboard</h1>
          <p>Internal DevOps dashboard connected to PostgreSQL backend API.</p>
        </header>

        <section className="cards">
          <div className="card">
            <h3>Total Employees</h3>
            <p>{employees.length}</p>
          </div>

          <div className="card">
            <h3>Backend API</h3>
            <p>Online</p>
          </div>

          <div className="card">
            <h3>Database</h3>
            <p>PostgreSQL</p>
          </div>
        </section>

        <section className="table-section">
          <h2>Employees</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.role}</td>
                  <td>{employee.department}</td>
                  <td>{employee.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;