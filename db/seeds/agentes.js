/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("agentes").del();
  await knex("agentes").insert([
    {
      id: 1,
      nome: "Larissa Moura",
      dataDeIncorporacao: "2005-03-22",
      cargo: "delegado",
    },
    {
      id: 2,
      nome: "Carlos Meireles",
      dataDeIncorporacao: "2000-01-05",
      cargo: "inspetor",
    },
    {
      id: 3,
      nome: "Bruno Tavares",
      dataDeIncorporacao: "2023-01-15",
      cargo: "inspetor",
    },
  ]);
};
