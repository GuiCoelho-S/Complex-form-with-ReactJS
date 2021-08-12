import { React, useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../context/validacoesCadastro";


function DadosUsuario({ aoEnviar}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });

  const validacoes = useContext(ValidacoesCadastro);

  function validarCampos(event){
    const {name, value} = event.target
    
    const novoEstado = {...erros}
    novoEstado[name] = validacoes[name](value); 
    setErros(novoEstado);
  }

  function possoEnviar(){

      for (let campo in erros){
        if(!erros[campo].valido){
          return false
        }
      }
      return true
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
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
