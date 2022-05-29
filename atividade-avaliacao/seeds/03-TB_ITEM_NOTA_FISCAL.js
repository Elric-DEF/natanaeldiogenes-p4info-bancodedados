/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_ITEM_NOTA_FISCAL').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('TB_ITEM_NOTA_FISCAL').insert([
    {id: 11, sequencial: '100', quantidade: "10", valor: "85,00", produto_id: "1111", notaFiscal_id: "111"},
    {id: 12, sequencial: '200', quantidade: "5", valor: "25,50", produto_id: "2222", notaFiscal_id: "222"},
    {id: 13, sequencial: '300', quantidade: "7", valor: "26,60", produto_id: "3333", notaFiscal_id: "333"}
  ]);
})
};
