const Application = require("../models/application");

class ApplicationController {
  getAllApplicationHistory = async (req, res) => {
    const result = await Application.getAllApplicationHistory();
    res.json(result);
  };
  getAllCurrentApplication = async (req, res) => {
    const result = await Application.getAllCurrentApplication();
    res.json(result);
  };
  updateApprovalApplication = async (req, res) => {
    const id = req.params.id;
    const status = req.body.status;
    const roomID = req.body.roomID;
    const studentID = req.body.studentID;

    const result = await Application.updateApprovalApplication(id, status, studentID, roomID);
    res.json(result);
  };
}

module.exports = new ApplicationController();