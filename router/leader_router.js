const express = require("express");
const bodyParser = require("body-parser");
let leaderId = null;

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the leaders to you!");
  })

  .post((req, res, next) => {
    res.end(
      "Will add the leader: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /leaders");
  })

  .delete((req, res, next) => {
    res.end("Deleting all leaders");
  });

leaderRouter
  .route("/:leaderId?")
  .all((req, res, next) => {
    leaderId = req.params.leaderId;
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.send(`Will send the leader:${leaderId} to you!`);
  })

  .post((req, res, next) => {
    res.end(
      `Will add the leader:${leaderId}:${req.body.name} with details:${req.body.description}`
    );
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.send(
      `Updating the leader:${req.params.leaderId}\nWill update the leader:${req.body.name} with details:${req.body.description}`
    );
  })
  .delete((req, res, next) => {
    res.end(`Deleting the leader:${req.params.leaderId}`);
  });

module.exports = leaderRouter;
