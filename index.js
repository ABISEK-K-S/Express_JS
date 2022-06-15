const express = require("express");
const http = require("http");
const dishRouter = require("./router/dish_router");
const promoRouter = require("./router/promo_router");
const leaderRouter = require("./router/leader_router");

const hostname = "localhost";
let port = 3000;
const app = express();

app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`server is running on ${port}`);
});
