const express = require('express');

const pingRouter = express.Router();
const pingController = require('../controllers/ping');

/**
 * Get a pong
 */
pingRouter.route('/').get(async (req, res) => {
    try {
        res.json(await pingController.ping());
    } catch (err) {
        console.error(err);
    }
});

module.exports = pingRouter;