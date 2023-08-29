const Survey = require("../Models/surveyModel");

const createsurvey = async (req, res) => {
  try {
    const { surveyQuestion, description, title } = req.body;
    const data = {
      surveyQuestion,
      description,
      title,
    };

    const survey = await Survey.create(data);
    console.log("survey-1", survey);

    //if survey details is captured
    if (survey) {
      console.log(
        "survey-2",
        JSON.stringify(survey, null, 2),
        "title",
        JSON.stringify(title, null, 2)
      );

      //send survey details
      return res.status(201).send(survey);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

// Update a survey record in the database
const updateSurvey = async (req, res) => {
  try {
    const { id } = req.params;
    const { surveyQuestion, description, title } = req.body;

    // Find the survey by id
    const survey = await Survey.findByPk(id);

    if (!survey) {
      return res.status(404).json({ message: "Survey not found." });
    }

    // Update the survey properties
    survey.surveyQuestion = surveyQuestion;
    survey.description = description;
    survey.title = title;

    // Save the updated survey
    await survey.save();

    return res.status(200).json(survey);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Fetch all surveys from the database
const getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.findAll();

    if (surveys.length === 0) {
      return res.status(404).json({ message: "No surveys found." });
    }

    return res.status(200).json(surveys);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Delete a survey record from the database
const deleteSurvey = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the survey by id
      const survey = await Survey.findByPk(id);
  
      if (!survey) {
        return res.status(404).json({ message: "Survey not found." });
      }
  
      // Delete the survey
      await survey.destroy();
  
      return res.status(200).json({ message: "Survey deleted successfully." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error." });
    }
  };
  

module.exports = {
  createsurvey,
  deleteSurvey,
  getAllSurveys,
  updateSurvey,
};