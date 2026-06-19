const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const client = require("prom-client");

require("dotenv").config();

const healthRoutes = require("../routes/healthRoutes");
const employeeRoutes = require("../routes/employeeRoutes");

const app = express();

// Prometheus metrics
const register = new client.Registry();

client.collectDefaultMetrics({
  register,
});

register.setDefaultLabels({
  app: "securecloud-backend",
});

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/employees", employeeRoutes);

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
