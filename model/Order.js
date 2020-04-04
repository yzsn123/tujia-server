const mongoose = require('mongoose');

const orderBuy = mongoose.model('orderBuy', new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    name: String,
    detail: Object,
    personNum: String,
    tel: String,
    houseNum: String
}))

//添加信息
module.exports.add = async (obj,userid) => {
    let o = JSON.parse(obj);
    let info = new orderBuy({
        user: userid,
        name: o.name,
        detail: o.detail,
        personNum: o.personNum,
        tel: o.tel,
        houseNum: o.houseNum
    })
    let result = await info.save();
    return result;
}

//查询信息
module.exports.find = async (userid) => {
    let info = await orderBuy.find({
        user: userid
    });
    return info;
}