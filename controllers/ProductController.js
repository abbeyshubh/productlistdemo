const details = require("../models/products.model");
const httpStatus = require("http-status");

exports.createProducts = async (req, res, next) => {
  try {
    const body = req.body;

    Details = await new details(body);
    const detail = await Details.save((error, data) => {
      if (error) {
        console.log(error);
        return res.status(httpStatus.BAD_REQUEST).json({
          message: "Error in saving Product detail",
        });
      } else {
        return res
          .status(httpStatus.OK)
          .json({ message: "Details Saved Successfully", data });
      }
    });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err.message);
  }
};
exports.getProducts = async (req, res, next) => {
  try {
    const detail = await details
      .find()
      .select("productName price productImage");
    return res.status(httpStatus.OK).json({ data: detail });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err.message);
  }
};
exports.getProductDetailsById = async (req, res, next) => {
  try {
    console.log(req.body.id);
    const detail = await details.find({ _id: req.body.id });
    return res.status(httpStatus.OK).json({ data: detail[0] });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err.message);
  }
};
// exports.updateCats = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const body = req.body;

//     if (!id) {
//       return res
//         .status(httpStatus.UNPROCESSABLE_ENTITY)
//         .json({ message: "Id is missing" });
//     }
//     if (!body) {
//       return res
//         .status(httpStatus.UNPROCESSABLE_ENTITY)
//         .json({ message: "Details needs to be filled" });
//     }
//     const detail = await details.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: body
//       },
//       { new: true }
//     );

//     if (detail) {
//       res.status(httpStatus.OK).json({
//         message: "Details Updated Successfully",
//         status: "success",
//         details: detail
//       });
//     }
//   } catch (err) {
//     res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err.message);
//       }
// };
