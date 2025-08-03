const express = require("express");
const router = express.Router();
const agentesController = require("../controllers/agentesController");

router.get("/agentes/:id", agentesController.getAgenteById);
router.get("/agentes", agentesController.getAllAgentes);
router.post("/agentes", agentesController.createAgente);
router.put("/agentes/:id", agentesController.updateAgente);
router.patch("/agentes/:id", agentesController.updatePartialAgente);
router.delete("/agentes/:id", agentesController.deleteAgente);

module.exports = router;
