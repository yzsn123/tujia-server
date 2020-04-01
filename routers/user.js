const express = require('express')
const User = require('../model/User')
const router = express.Router()


router.get('/login', (req, res) => {
    const { tel, pwd } = req.query;
    User.add(tel,pwd)
    .then(()=>{
        User.findByTel({ tel, pwd })
            .then((result) => {
                req.session.userInfo = result;
                res.json({
                    code: 0,
                    message: 'ok',
                    tel,
                    pwd
                })
            }).catch(() => {
                res.json({
                    code: -1,
                    message: '密码错误'
                })
            })
    }).catch( error => {
        res.json({
            code: -2,
            message: error
        })
    })
})

module.exports = router;