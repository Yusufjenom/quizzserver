const { Router } = require("express");
const router = Router();

/** import controllers */
const {getQuestions, insertQuestions, dropQuestions, getResult,
    storeResult, dropResult} = require('../controller/controller.js');

/** Questions Routes API */

router.route('/questions')
        .get(getQuestions) /** GET Request */
        .post(insertQuestions) /** POST Request */
        .delete(dropQuestions) /** DELETE Request */

router.route('/result')
        .get(getResult)
        .post(storeResult)
        .delete(dropResult)

module.exports = router;