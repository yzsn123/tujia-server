const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();

var store = new MongoDBStore({
  uri: "mongodb://localhost:27017/tujia",
  collection: "session"
});

// Catch errors
store.on("error", function(error) {
  console.log(error);
});

app.use(
  session({
    secret: "secret",
    name: "login_session",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true
  })
);

app.use(express.urlencoded({urlencoded: false}));
app.use(express.json());


app.use("/api/home", require("./routers/home"));
app.use("/api/found", require("./routers/found"));
app.use("/api/user", require("./routers/user"));
app.use("/api/order", require("./routers/order"))
app.use("/static", express.static("./static"));
mongoose.connect(
  "mongodb://localhost:27017/tujia",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  error => {
    if (error) {
      console.log("数据库连接失败");
      console.log(error);
    } else {
      console.log("数据库连接成功");

      app.listen(
        {
          hostname: "localhost",
          port: 9000
        },
        error => {
          if (!error) {
            console.log("服务器启动成功");
          } else {
            console.log("服务器启动失败");
          }
        }
      );
    }
  }
);
