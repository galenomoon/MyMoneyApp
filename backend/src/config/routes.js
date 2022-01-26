const express = require("express");

module.exports = function (server) {
  //Set base URL for each route
  const router = express.Router();
  server.use("/api", router);

  //Route Payment Cycle
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
};
