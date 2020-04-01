const express = require("express");
const Mock = require("mockjs");
const router = express.Router();
const { baseHost, basePort } = require("../utils/config");
const baseUrl = `${"http"}://${baseHost}:${basePort}`;

const randomArray = require("../utils/randomArray");

const discount = ["新房特惠", "连住特惠", "新手立减", "今日甩卖", "任性价5折"];
const suggest = [
  "闪订",
  "快速开票",
  "超赞新房",
  "优选",
  "超赞房东",
  "行李寄存",
  "品牌名宿"
];
const trip = [
  "做饭方便",
  "携宠旅游",
  "聚会轰趴",
  "商务差旅",
  "全家出游",
  "浪漫约会",
  "长住省心"
];
router.get("/grass", (request, response) => {
  response.json(
    Mock.mock({
      message: "ok",
      code: 0,
      data: {
        count: 50,
        "list|10": [
          {
            "discount|1": [
              "新房特惠",
              "连住特惠",
              "新手立减",
              "今日甩卖",
              "任性价5折"
            ],
            address: function() {
              return Mock.Random.county();
            },
            img: function() {
              return Mock.Random.image("450x310", Mock.Random.color());
            },
            title: "@ctitle(15,55)",
            "room|1-5": 1,
            "bed|1-3": 1,
            "person|2-8": 1,
            "price|99-999": 1,
            "count|3-5.1": 1
          }
        ]
      }
    })
  );
});
router.get("/searchList", (request, response) => {
  response.json(
    Mock.mock({
      message: "ok",
      code: 0,
      "list|25": [
        {
          "num|1-25": 1,
          img: baseUrl + "/static/img/@num",
          title: "@ctitle(6,25)",
          "room|1-6": 1,
          "bed|1-10": 1,
          "personCount|1-10": 1,
          "grade|1-4.1": 1,
          discount: function() {
            return randomArray(discount, 2);
          },
          suggest: function() {
            return randomArray(suggest, 2);
          },
          trip: function() {
            return randomArray(trip, 2);
          },
          "oldPrice|99-999": 1,
          "newPrice|21-99": 1
        }
      ]
    })
  );
});
module.exports = router;
