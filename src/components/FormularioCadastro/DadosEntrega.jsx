import { React, useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({aoEnviar}) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        type="number"
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        margin="normal"
        required
      />
      <TextField
        id="endereço"
        label="Endereço"
        type="text"
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="numero"
        label="Número"
        type="number"
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        margin="normal"
        required
      />
      <TextField
        id="estado"
        label="Estado"
        type="text"
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        margin="normal"
        required
      />
      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
