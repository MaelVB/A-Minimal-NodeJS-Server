const express = require('express');

const publicRouter = express.Router();

const pingRoute = require('./routes/ping');

publicRouter.use('/ping', pingRoute);

module.exports = publicRouter;