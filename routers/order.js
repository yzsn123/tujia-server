const express = require("express");
const Order = require("../model/Order");
const router = express.Router();

//存储订单信息
router.get('/buy', (req,res) => {
    let { val } = req.query;
    let userid = req.session.userInfo._id
    Order.add(val, userid)
    .then(result => {
        res.json({
            message: 'ok',
            code: 0,
            data: result
        })
    })
})

//获取订单信息
router.get('/done', (req,res) => {
    let userid = req.session.userInfo._id;
    Order.find(userid)
    .then(result => {
        res.json({
            message: 'ok',
            code: 0,
            data: result
        })
    })
})

module.exports = router;
