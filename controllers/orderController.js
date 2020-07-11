const details = require("../models/saveOrders.model");
const httpStatus = require("http-status");

exports.createOrders = async (req, res, next) => {
  try {
    const body = req.body;
    Details = await new details(body);
    const detail = await Details.save((error, data) => {
      if (error) {
        return res.status(httpStatus.BAD_REQUEST).json({
          message: "Error in saving Product detail",
          status: 400,
        });
      } else {
        return res.status(httpStatus.OK).json({
          message: "Order Created Successfully",
          status: 200,
        });
      }
    });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err.message);
  }
};
