/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_CLIENTE').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('TB_CLIENTE').insert([
    {id: 1, código: '10', cpfcnpj: '563.782.152-16', nome: "Cleidison", TipoCliente: "Pessoa_Fisica"},
    {id: 2, código: '20', cpfcnpj: '771.103.812-54', nome: "Juberaldo", TipoCliente: "Pessoa_Fisica"},
    {id: 3, código: '30', cpfcnpj: '76.453.365/0001-66', nome: "Roberto", TipoCliente: "Pessoa_Juridica"}
  ]);
  })
};
