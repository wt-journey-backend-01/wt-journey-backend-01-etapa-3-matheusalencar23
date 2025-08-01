const agentesRepository = require("../repositories/agentesRepository");
const { AppError } = require("../utils/errorHandler");

async function getAllAgentes(req, res) {
  const cargo = req.query.cargo;
  const sort = req.query.sort;

  const filter = {};
  if (cargo) {
    filter.cargo = cargo;
  }

  const orderByMapping = {
    dataDeIncorporacao: ["dataDeIncorporacao", "asc"],
    "-dataDeIncorporacao": ["dataDeIncorporacao", "desc"],
  };
  let orderBy = orderByMapping[sort];

  const agentes = await agentesRepository.findAll(filter, orderBy);
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

async function createAgente(req, res) {
  const novoAgente = await agentesRepository.create(req.body);
  res.status(201).json(novoAgente);
}

module.exports = {
  getAllAgentes,
  getAgenteById,
  createAgente,
};
