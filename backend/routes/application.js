const express = require("express");
const applicationController = require("../controllers/applicationController");
const router = express.Router();

router.get("/history/", applicationController.getAllApplicationHistory);
router.get("/", applicationController.getAllCurrentApplication);
router.put("/:id/", applicationController.updateApprovalApplication);

module.exports = router;