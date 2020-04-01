const mongoose = require("mongoose");

const User = mongoose.model(
  "user",
  new mongoose.Schema({
    tel: {
      type: String,
      required: true
    },
    pwd: {
      type: String,
      required: true
    }
  })
);

// 新增
module.exports.add = async (tel, pwd) => {
  const res = await User.findOne({ tel });
  if (!res) {
    const user = new User({ tel, pwd });
    return await user.save();
  } else {
    return true;
  }
};

// 查询
module.exports.findByTel = async ({ tel, pwd }) => {
  const res = await User.findOne({ tel, pwd });
  if (res) {
    return res;
  } else {
      throw new Error('密码错误');
  }
};
