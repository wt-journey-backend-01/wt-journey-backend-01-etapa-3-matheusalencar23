const db = require("../db/db");

async function findAll(filter = {}, orderBy = ["id", "asc"]) {
  try {
    const result = await db("agentes")
      .select("*")
      .where(filter)
      .orderBy(orderBy[0], orderBy[1]);
    return result;
  } catch (error) {
    console.error("Error fetching all agents:", error);
    throw error;
  }
}

async function findById(id) {
  try {
    const result = await db("agentes").select("*").where({ id }).first();
    return result;
  } catch (error) {
    console.error("Error fetching all agents:", error);
    throw error;
  }
}

async function create(agente) {
  try {
    const [newAgente] = await db("agentes").insert(agente).returning("*");
    return newAgente;
  } catch (error) {
    console.error("Error creating agent:", error);
    throw error;
  }
}

module.exports = {
  findAll,
  findById,
  create,
};
