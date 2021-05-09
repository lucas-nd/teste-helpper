import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import brandImg from "../../assets/helpper-brand.png";
import api from "../../services/api";

export default function ReadClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get("").then((response) => {
      setClients(response.data);
    });
  }, []);

  return (
    <div className="page">
      <Container>
        <div className="header">
          <h1>Clientes</h1>
          <img src={brandImg} alt=""></img>
        </div>
        <div className="content">
          {clients.map((client) => (
            <div className="info-client" key={client.id}>
              <div className="info">
                <strong>Name: </strong> {client.name}
              </div>
              <div className="info">
                <strong>Email: </strong> {client.email}
              </div>
              <div className="info">
                <strong>Cpf/Cnpj: </strong> {client.cpfCnpj}
              </div>
              {client.phone.map((phone) => (
                <div key={phone.id}>
                  <div className="info">
                    <strong>Telefone: </strong> {phone.number}
                  </div>
                </div>
              ))}
              {client.address.map((address) => (
                <div key={address.id}>
                  <div className="info">
                    <strong>Cep: </strong> {address.cep}
                  </div>
                  <div className="info">
                    <strong>Logradouro: </strong> {address.logradouro}
                  </div>
                  <div className="info">
                    <strong>Número: </strong> {address.number}
                  </div>
                  <div className="info">
                    <strong>Bairro: </strong> {address.district}
                  </div>
                  <div className="info">
                    <strong>Cidade: </strong> {address.city}
                  </div>
                  <div className="info">
                    <strong>Estado: </strong> {address.state}
                  </div>
                </div>
              ))}
              <button>Deletar</button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
