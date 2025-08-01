const agentesRepository = require("../repositories/agentesRepository");
const { AppError } = require("../utils/errorHandler");

async function getAllAgentes(req, res) {
  const agentes = await agentesRepository.findAll();
  res.json(agentes);
}

async function getAgenteById(req, res) {
  const id = req.params.id;
  const agente = await agentesRepository.findById(id);
  if (!agente) {
    throw new AppError(404, "Nenhum agente encontrado para o id especificado");
  }
  res.json(agente);
}

module.exports = {
  getAllAgentes,
  getAgenteById,
};
