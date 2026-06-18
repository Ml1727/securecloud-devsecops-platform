const getHealthStatus = (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "SecureCloud Backend API",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
};

module.exports = { getHealthStatus };