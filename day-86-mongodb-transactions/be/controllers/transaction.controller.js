const Users = require("../models/Users");
const Address = require("../models/ShippingAddress");
const Product = require("../models/Product");

exports.createTransaction = async (req, res) => {
  try {
    const session = await Users.startSession();
    session.startTransaction();
    const product = await Product.updateOne(
      {
        _id: "642256ea67882b1c2947d55b",
      },
      {
        $inc: { quantity: -2 },
      },
      { session }
    );
    const user = await Users.create(req.body.user, { session });
    const shippingAddress = await Address.create(req.body.shippingAddress, {
      session,
    });
    await session.commitTransaction();
    session.endSession();
    res.json({ status: true, user, shippingAddress, product });
  } catch (error) {
    res.json({
      status: false,
      error,
    });
  }
};

// exports.createTransactionWithOutSession = async (req, res) => {
//   try {
//     const user = await Users.create(req.body.user);
//     const shippingAddress = await Address.create({
//       address: req.body.shippingAddress,
//       user_id: user._id,
//     });
//     res.json({ status: true, user, shippingAddress });
//   } catch (error) {
//     res.json({ status: false, error });
//   }
// };

exports.createTransactionWithOutSession = async (req, res) => {
  try {
    // const product = await Product.updateOne(
    //   {
    //     _id: "642256ea67882b1c2947d55b",
    //   },
    //   {
    //     $inc: { quantity: -2 },
    //   }
    // );
    // const user = await Users.create(req.body.user);
    // const shippingAddress = await Address.create({
    //   address: req.body.shippingAddress,
    //   user_id: user._id,
    // });
    res.json({ status: true, user, shippingAddress, product });
  } catch (error) {
    res.json({ status: false, error });
  }
};
