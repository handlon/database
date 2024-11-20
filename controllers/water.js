const water = require("../models/water");

exports.getAllwater = async (req, res, next) => {
  try {
    const data = await water.find();
    if (data && data.length !== 0) {
      return res.status(200).send({
        message: "water found!!!!!!",
        payload: data,
      });
    }

    res.status(404).send({
      message: "water not found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.getwaterById = async (req, res, next) => {
  try {
    const data = await water.findById(req.params.id);
    if (data) {
      return res.status(200).send({
        message: " water found!!!!!!",
        payload: data,
      });
    }

    res.status(404).send({
      message: "water not found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.createwater = async (req, res, next) => {
  try {
    const data = new water({
        amount: req.body.amount,
        type: req.body.type,
        taste: req.body.taste,
      
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        message: "water created",
        payload: result,
      });
    }
    res.status(404).send({
      message: "water not created",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.updatewater = async (req, res, next) => {
  try {
    const data = {
        amount: req.body.amount,
        type: req.body.type,
        taste: req.body.taste,
    };
    const result = await water.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        message: "water updated",
        payload: result,
      });
    }
    res.status(404).send({
      message: "water not updated",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.deletewater = async (req, res, next) => {
  try {
    
    const result = await water.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        message: "water deleted",
        payload: result,
      });
    }
    res.status(404).send({
      message: "water not deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};