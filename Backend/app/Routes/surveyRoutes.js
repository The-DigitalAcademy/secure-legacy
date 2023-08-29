const survey = require('../Controllers/surveyController')

const router = require("express").Router();


//for post all surveys
router.post("/", survey.createsurvey);
// GET route to fetch all surveys
router.get("/", survey.getAllSurveys);
router.put("/id", survey.updateSurvey);
router.delete('/surveys/:id',survey.deleteSurvey);

module.exports = router;