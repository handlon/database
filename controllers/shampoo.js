const shampoo = require("../models/shampoo");

exports.getAllshampoo = async (req, res, next) => {
  try {
    const data = await shampoo.find();
    if (data && data.length !== 0) {
      return res.status(200).send({
        message: "paltforms foud!",
        payload: data,
      });
    }

    res.status(404).send({
      message: "shampoos not found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.getshampooById = async (req, res, next) => {
  try {
    const data = await shampoo.findById(req.params.id);
    if (data) {
      return res.status(200).send({
        message: " shampoo found!!!!!!",
        payload: data,
      });
    }

    res.status(404).send({
      message: "shampoo not found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.createshampoo = async (req, res, next) => {
  try {
    const data = new shampoo({
      name: req.body.name,
      price: req.body.price,
      antidandruff: req.body.antidandruff,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        message: "shampoo created",
        payload: result,
      });
    }
    res.status(404).send({
      message: "shampoo not created",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.updateshampoo = async (req, res, next) => {
  try {
    const data = {
      name: req.body.name,
      price: req.body.price,
      antidandruff: req.body.antidandruff,
    };
    const result = await shampoo.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        message: "shampoo updated",
        payload: result,
      });
    }
    res.status(404).send({
      message: "shampoo not updated",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.deleteshampoo = async (req, res, next) => {
  try {
    
    const result = await shampoo.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        message: "shampoo deleted",
        payload: result,
      });
    }
    res.status(404).send({
      message: "shampoo not deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
