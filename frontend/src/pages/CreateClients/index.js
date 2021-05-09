import React, { useState } from "react";
import { Container } from "./styles";
import brandImg from "../../assets/helpper-brand.png";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

export default function CreateClients() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const history = useHistory();

  async function handleCreateClient(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      cpfCnpj,
      phone: { number: phone },
      address: {
        cep,
        logradouro,
        number,
        district,
        city,
        state,
      },
    };

    try {
      await api.post("", data);
      alert("Cliente inserido com sucesso.");
      history.push("/");
    } catch (err) {
      alert("Não foi possivel inserir o cliente.");
    }
  }

  return (
    <div className="page">
      <Container>
        <div className="header">
          <h1>Cadastrar</h1>
          <img src={brandImg} alt=""></img>
        </div>
        <div className="content">
          <form onSubmit={handleCreateClient}>
            <input
              placeholder="Nome do cliente"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail do cliente"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="CPF ou CNPJ do cliente"
              value={cpfCnpj}
              onChange={(e) => setCpfCnpj(e.target.value)}
            />
            <input
              placeholder="Telefone do cliente"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <div className="input-group">
              <p>Endereço do cliente</p>
              <div className="input-line">
                <input
                  placeholder="CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                />
                <input
                  placeholder="Logradouro"
                  value={logradouro}
                  onChange={(e) => setLogradouro(e.target.value)}
                />
              </div>
              <div className="input-line">
                <input
                  placeholder="Número"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <input
                  placeholder="Bairro"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div className="input-line">
                <input
                  placeholder="Cidade"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  placeholder="Estado"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
            </div>

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </Container>
    </div>
  );
}
