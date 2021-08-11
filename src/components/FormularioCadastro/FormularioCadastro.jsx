import { React, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import { Typography } from "@material-ui/core";

function FormularioCadastro() {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [
    <DadosUsuario aoEnviar={Proximo} />,
    <DadosPessoais aoEnviar={Proximo} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={aoEnviarForm} />,
    <Typography>Error, formulário não existente</Typography>,
  ];

  function Proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{formularios[etapaAtual]}</>;
}
export default FormularioCadastro;



function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}
