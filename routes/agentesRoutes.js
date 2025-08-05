const express = require("express");
const router = express.Router();
const agentesController = require("../controllers/agentesController");
const {
  newAgenteValidation,
  updateAgenteValidation,
  partialUpdateAgenteValidation,
} = require("../utils/agentesValidations");

router.get("/agentes/:id/casos", agentesController.getCasosByAgenteId);
router.get("/agentes/:id", agentesController.getAgenteById);
router.get("/agentes", agentesController.getAllAgentes);
router.post("/agentes", newAgenteValidation, agentesController.createAgente);
router.put(
  "/agentes/:id",
  updateAgenteValidation,
  agentesController.updateAgente
);
router.patch(
  "/agentes/:id",
  partialUpdateAgenteValidation,
  agentesController.updatePartialAgente
);
router.delete("/agentes/:id", agentesController.deleteAgente);

module.exports = router;
