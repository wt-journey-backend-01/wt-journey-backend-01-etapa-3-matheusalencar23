/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("agentes", function (table) {
      table.increments("id").primary();
      table.string("nome").notNullable();
      table.date("dataDeIncorporacao").notNullable();
      table.string("cargo").notNullable();
    })
    .createTable("casos", function (table) {
      table.increments("id").primary();
      table.string("titulo").notNullable();
      table.text("descricao").notNullable();
      table.enu("status", ["aberto", "solucionado"]);
      table
        .integer("agente_id")
        .references("id")
        .inTable("agentes")
        .notNullable()
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("casos").dropTableIfExists("agentes");
};
