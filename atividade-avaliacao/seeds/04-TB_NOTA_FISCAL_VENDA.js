/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_NOTA_FISCAL_VENDA').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('TB_NOTA_FISCAL_VENDA').insert([
    {id: 111, código: "534", data: "07/05", valorNota: "85,00", cliente_id: "1", itens_id: "11"},
    {id: 222, código: "758", data: "11/06", valorNota: "25,50", cliente_id: "2", itens_id: "22"},
    {id: 333, código: "828", data: "11/07", valorNota: "26,60", cliente_id: "3", itens_id: "33"}
  ]);
})
};
