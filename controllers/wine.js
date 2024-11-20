const wine = require("../models/wine");

exports.getAllwine = async (req, res, next) => {
  try {
    const data = await wine.find();
    if (data && data.length !== 0) {
      return res.status(200).send({
        message: "wine found!!!!!!",
        payload: data,
      });
    }

    res.status(404).send({
      message: "wine not found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.getwineById = async (req, res, next) => {
  try {
    const data = await wine.findById(req.params.id);
    if (data) {
      return res.status(200).send({
        message: " wine found!!!!!!",
        payload: data,
      });
    }

    res.status(404).send({
      message: "wine not found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.createwine = async (req, res, next) => {
  try {
    const data = new wine({
      name: req.body.name,
      type: req.body.type,
      amount: req.body.amount,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        message: "wine created",
        payload: result,
      });
    }
    res.status(404).send({
      message: "wine not created",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.updatewine = async (req, res, next) => {
  try {
    const data = {
        name: req.body.name,
        type: req.body.type,
        amount: req.body.amount,
    };
    const result = await wine.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        message: "wine updated",
        payload: result,
      });
    }
    res.status(404).send({
      message: "wine not updated",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.deletewine = async (req, res, next) => {
  try {
    
    const result = await wine.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        message: "wine deleted",
        payload: result,
      });
    }
    res.status(404).send({
      message: "wine not deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};