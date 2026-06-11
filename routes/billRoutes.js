const router = require("express").Router();
const Bill = require("../models/Bill");

router.post("/", async (req, res) => {
  const bill = await Bill.create(req.body);
  res.json(bill);
});

router.get("/", async (req, res) => {
  const bills = await Bill.find();
  res.json(bills);
});

module.exports = router;