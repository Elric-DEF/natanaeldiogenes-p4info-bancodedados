/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_PRODUTO').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('TB_PRODUTO').insert([
    {id: 1111, codigo: '321', descricao: "Macarrão", valor: 8.50},
    {id: 2222, codigo: '831', descricao: "Sal", valor: 5.10},
    {id: 3333, codigo: '463', descricao: "Bolacha", valor: 3.80}
  ]);
})
};
