const restful = require("node-restful");
const mongoose = restful.mongoose;

const creditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
});

const debtSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Informe o valor do débito!'] },
  value: { type: Number, min: 0, required: true },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ["PAID", "PENDING", "SCHEDULED"],
  },
});

const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: String, min: 1, max: 12, required: true },
  year: { type: String, min: 1970, max: 2100, required: true },
  credit: [creditSchema],
  debt: [debtSchema],
});

module.exports = restful.model("BillingCycle", billingCycleSchema);
