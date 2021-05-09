import React from "react";
import { Form } from "./styles";
import brandImg from "../../assets/helpper-brand.png";

export default function CreateClients() {
  return (
    <div className="page">
      <Form>
        <div className="header">
          <h1>
            Bem-Vindo, <br /> Helpper
          </h1>
          <img src={brandImg} alt=""></img>
        </div>
        <div className="content">
          <form
            onSubmit={() => {
              return "teste";
            }}
          >
            <input placeholder="Nome do cliente" />
            <input type="email" placeholder="E-mail do cliente" />
            <input placeholder="CPF ou CNPJ do cliente" />
            <input placeholder="Telefone do cliente" />

            <div className="input-group">
              <p>Endereço do cliente</p>
              <div className="input-line">
                <input placeholder="CEP" />
                <input placeholder="Logradouro" />
              </div>
              <div className="input-line">
                <input placeholder="Número" />
                <input placeholder="Bairro" />
              </div>
              <div className="input-line">
                <input placeholder="Cidade" />
                <input placeholder="Estado" />
              </div>
            </div>

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </Form>
    </div>
  );
}
