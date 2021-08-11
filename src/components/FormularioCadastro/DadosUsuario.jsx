import { TextField, Button } from "@material-ui/core";
import { React, useState } from "react";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({email,senha});
      }}
    >
      <TextField
        id="email"
        label="Email"
        type="Email"
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
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
