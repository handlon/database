const watch = require("../models/watch");

exports.getAllwatch = async (req, res, next) => {
  try {
    const data = await watch.find();
    if (data && data.length !== 0) {
      return res.status(200).send({
        message: "watch found!!!!!!",
        payload: data,
      });
    }

    res.status(404).send({
      message: "watch not found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.getwatchById = async (req, res, next) => {
  try {
    const data = await watch.findById(req.params.id);
    if (data) {
      return res.status(200).send({
        message: " watch found!!!!!!",
        payload: data,
      });
    }

    res.status(404).send({
      message: "watch not found",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.createwatch = async (req, res, next) => {
  try {
    const data = new watch({
      brand: req.body.brand,
      type: req.body.type,
      price: req.body.price,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        message: "watch created",
        payload: result,
      });
    }
    res.status(404).send({
      message: "watch not created",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.updatewatch = async (req, res, next) => {
  try {
    const data = {
      brand: req.body.brand,
      type: req.body.type,
      price: req.body.price,
    };
    const result = await watch.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        message: "watch updated",
        payload: result,
      });
    }
    res.status(404).send({
      message: "watch not updated",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.deletewatch = async (req, res, next) => {
  try {
    
    const result = await watch.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        message: "watch deleted",
        payload: result,
      });
    }
    res.status(404).send({
      message: "watch not deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
