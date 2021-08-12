import { React, useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../context/validacoesCadastro";
import UseErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = UseErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        id="email"
        label="Email"
        type="Email"
        name="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="senha"
        label="Senha"
        type="password"
        name="senha"
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
