const express = require("express");
const router = express.Router();
const casosController = require("../controllers/casosController");
const {
  newCasoValidation,
  updateCasoValidation,
  partialUpdateCasoValidation,
} = require("../utils/casosValidations");

router.get("/casos/search", casosController.filter);
router.get("/casos/:caso_id/agente", casosController.getAgenteByCasoId);
router.get("/casos/:id", casosController.getCasosById);
router.get("/casos", casosController.getAllCasos);
router.post("/casos", casosController.createCaso);
router.put("/casos/:id", casosController.updateCaso);
router.patch("/casos/:id", casosController.updatePartialCaso);
router.delete("/casos/:id", casosController.deleteCaso);

module.exports = router;
