import React from "react";

const ValidacoesCadastro = React.createContext({
  nome: semValidacao,
  sobrenome: semValidacao,
  cep: semValidacao,
});

function semValidacao(dados) {
  console.log(dados);
  return { valido: true, texto: "" };
}

export default ValidacoesCadastro;
