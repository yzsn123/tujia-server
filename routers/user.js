const express = require("express");
const User = require("../model/User");
const UserInfo = require("../model/UserInfo");
const router = express.Router();

//登录注册
router.get("/login", (req, res) => {
  const { tel, pwd } = req.query;
  User.add(tel, pwd)
    .then(() => {
      User.findByTel({ tel, pwd })
        .then(result => {
          req.session.userInfo = result;
          res.json({
            code: 0,
            message: "ok",
            tel,
            pwd
          });
        })
        .catch(() => {
          res.json({
            code: -1,
            message: "密码错误"
          });
        });
    })
    .catch(error => {
      res.json({
        code: -2,
        message: error
      });
    });
});
//退出登录
router.get("/logout", (req, res) => {
  delete req.session.userInfo;
  res.json({
    message: "ok",
    code: 0
  });
});
//检查登录
router.get("/check_login", (req, res) => {
  if (req.session.userInfo && req.session.userInfo.tel) {
    res.json({
      code: 0,
      message: "ok",
      tel: req.session.userInfo.tel
    });
  } else {
    res.json({
      code: -1,
      message: "请重新登录"
    });
  }
});

//获取用户信息的
router.get("/getUserInfo", (req, res) => {
  let userid = req.session.userInfo._id;
  UserInfo.find(userid).then(result => {
    res.json({
      message: "ok",
      code: 0,
      data: result
    });
  });
});
//保存用户信息
router.get("/setUserInfo", (req, res) => {
  let { info } = req.query;
  let userid = req.session.userInfo._id;
  UserInfo.find(userid).then(result => {
    //如果之前有信息就修改
    if (result.length > 0) {
      UserInfo.update(userid, info).then(result => {
        res.json({
          message: "修改信息成功",
          code: 0,
          data: result
        });
      });
    } else {
      //没有就添加信息
      UserInfo.add(info, userid).then(() => {
        res.json({
          message: "添加信息成功",
          code: 0,
          data: result
        });
      });
    }
  });
});

module.exports = router;
