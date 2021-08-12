import { React, Component } from "react";

import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validarCPF, validarSenha } from "./components/models/cadastro";
import ValidacoesCadastro from "./components/context/validacoesCadastro";
class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h4" align="center" gutterBottom component="h1">
          Formulário Cadastro
        </Typography>

        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha }}>
             <FormularioCadastro aoEnviar={aoEnviarForm} />
         
          </ValidacoesCadastro.Provider>
        
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
