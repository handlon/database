const Platform = require("../models/platform");

exports.getAllPlatform = async (req, res, next) => {
  try {
    const data = await Platform.find();
    if (data && data.length !== 0) {
      return res.status(200).send({
        message: "paltforms foud!",
        payload: data,
      });
    }

    res.status(404).send({
      message: "platforms not found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.getPlatformById = async (req, res, next) => {
  try {
    const data = await Platform.findById(req.params.id);
    if (data) {
      return res.status(200).send({
        message: " platform found!!!!!!",
        payload: data,
      });
    }

    res.status(404).send({
      message: "platform not found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.createPlatform = async (req, res, next) => {
  try {
    const data = new Platform({
      name: req.body.name,
      date: req.body.date,
      producer: req.body.producer,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        message: "platform created",
        payload: result,
      });
    }
    res.status(404).send({
      message: "platform not created",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.updatePlatform = async (req, res, next) => {
  try {
    const data = {
      name: req.body.name,
      date: req.body.date,
      producer: req.body.producer,
    };
    const result = await Platform.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        message: "platform updated",
        payload: result,
      });
    }
    res.status(404).send({
      message: "platform not updated",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.deletePlatform = async (req, res, next) => {
  try {
    
    const result = await Platform.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        message: "platform deleted",
        payload: result,
      });
    }
    res.status(404).send({
      message: "platform not deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
