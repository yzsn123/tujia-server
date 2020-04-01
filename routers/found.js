const express = require("express");
const Mock = require("mockjs");
const router = express.Router();

router.get("/", (request, response) => {
  response.json(
    Mock.mock({
      message: "ok",
      code: 0,
      data: [
        {
          tag: "精选",
          "list|20": [
            {
              address: function() {
                return Mock.Random.county();
              },
              img: function() {
                return Mock.Random.image("450x310", Mock.Random.color());
              },
              "title": "@ctitle(15,55)",
              "headImg":function() {
                return Mock.Random.image("60x60", Mock.Random.color());
              },
              "username":'@cname()',
              "num|9-999":1
            }
          ]
        },
        {
          tag: "收藏热榜",
          "list|20": [
            {
              address: function() {
                return Mock.Random.county();
              },
              img: function() {
                return Mock.Random.image("450x310", Mock.Random.color());
              },
              "title": "@ctitle(15,55)",
              "headImg":function() {
                return Mock.Random.image("60x60", Mock.Random.color());
              },
              "username":'@cname()',
              "num|9-999":1
            }
          ]
        },
        {
          tag: "冬日暖宿",
          "list|20": [
            {
              address: function() {
                return Mock.Random.county();
              },
              img: function() {
                return Mock.Random.image("450x310", Mock.Random.color());
              },
              "title": "@ctitle(15,55)",
              "headImg":function() {
                return Mock.Random.image("60x60", Mock.Random.color());
              },
              "username":'@cname()',
              "num|9-999":1
            }
          ]
        },
        {
          tag: "民宿片场",
          "list|20": [
            {
              address: function() {
                return Mock.Random.county();
              },
              img: function() {
                return Mock.Random.image("450x310", Mock.Random.color());
              },
              "title": "@ctitle(15,55)",
              "headImg":function() {
                return Mock.Random.image("60x60", Mock.Random.color());
              },
              "username":'@cname()',
              "num|9-999":1
            }
          ]
        },
        {
          tag: "亲子好房",
          "list|20": [
            {
              address: function() {
                return Mock.Random.county();
              },
              img: function() {
                return Mock.Random.image("450x310", Mock.Random.color());
              },
              "title": "@ctitle(15,55)",
              "headImg":function() {
                return Mock.Random.image("60x60", Mock.Random.color());
              },
              "username":'@cname()',
              "num|9-999":1
            }
          ]
        },
        {
          tag: "出去嗨",
          "list|20": [
            {
              address: function() {
                return Mock.Random.county();
              },
              img: function() {
                return Mock.Random.image("450x310", Mock.Random.color());
              },
              "title": "@ctitle(15,55)",
              "headImg":function() {
                return Mock.Random.image("60x60", Mock.Random.color());
              },
              "username":'@cname()',
              "num|9-999":1
            }
          ]
        }
      ]
    })
  );
});


module.exports = router;