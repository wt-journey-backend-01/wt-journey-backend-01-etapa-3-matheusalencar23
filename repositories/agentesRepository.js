const db = require("../db/db");

async function findAll() {
  try {
    const result = await db("agentes").select("*");
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

module.exports = {
  findAll,
  findById,
};
