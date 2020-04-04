const mongoose = require('mongoose');

const userInfo = mongoose.model('userInfo', new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    name: String,
    sex: String,
    birth: String,
    hometown: String,
    oftenLive: String,
    img: String
}))

//添加信息
module.exports.add = async (obj,userid) => {
    console.log(obj)
    let o = JSON.parse(obj);
    let info = new userInfo({
        user: userid,
        name: o.username,
        sex: o.sex,
        birth: o.birdth,
        hometown: o.hometown,
        oftenLive: o.oftenLive,
        img: o.img
    })
    console.log(o.username,userid);
    let result = await info.save();
    return result;
}

//修改信息
module.exports.update = async (userid,obj) => {
    let o = JSON.parse(obj);
    let result = await userInfo.updateMany({
        user: userid
    }, {
        $set: {
            name: o.name,
            sex: o.sex,
            birth: o.birth,
            hometown: o.hometown,
            oftenLive: o.oftenLive,
            img: o.img
        }
    });
    // {multi:true}
    // console.log(result);
    return result;
}
//查询信息
module.exports.find = async (userid) => {
    let info = await userInfo.find({
        user: userid
    });
    return info;
}