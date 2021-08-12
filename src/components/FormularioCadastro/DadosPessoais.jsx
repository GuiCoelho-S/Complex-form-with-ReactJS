import { React,  useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../context/validacoesCadastro";
import UseErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = UseErros(validacoes);

  


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }
        
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        name="nome"
        fullWidth
        margin="normal"
        required
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        name="sobrenome"
        required
        fullWidth
        margin="normal"
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
      />

      <TextField
        id="cpf"
        name="cpf"
        label="CPF"
        type="number"
        fullWidth
        margin="normal"
        required
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={validarCampos}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            color="primary"
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            color="primary"
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
