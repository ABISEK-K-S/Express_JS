const express = require("express");
const bodyParser = require("body-parser");
let promoId = null;

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the promotions to you!");
  })

  .post((req, res, next) => {
    res.end(
      "Will add the promotion:" +
        req.body.name +
        " with details:" +
        req.body.description
    );
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })

  .delete((req, res, next) => {
    res.end("Deleting all promotions");
  });

promoRouter
  .route("/:promoId?")
  .all((req, res, next) => {
    promoId = req.params.promoId;
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.send(`Will send the promo:${promoId} to you!`);
  })

  .post((req, res, next) => {
    res.end(
      `Will add the promo:${promoId}:${req.body.name} with details:${req.body.description}`
    );
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.send(
      `Updating the promo:${req.params.promoId}\nWill update the promo:${req.body.name} with details:${req.body.description}`
    );
  })
  .delete((req, res, next) => {
    res.end(`Deleting the promo:${req.params.promoId}`);
  });

module.exports = promoRouter;
