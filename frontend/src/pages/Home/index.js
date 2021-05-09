import React from "react";
import { Container } from "./styles";
import brandImg from "../../assets/helpper-brand.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <Container>
        <div className="header">
          <h1>
            Bem-Vindo, <br /> Helpper
          </h1>
          <img src={brandImg} alt=""></img>
        </div>
        <div className="content">
          <Link className="button" to="/create">
            Cadastrar Clientes
          </Link>
          <Link className="button" to="/read">
            Visualizar Clientes
          </Link>
        </div>
      </Container>
    </div>
  );
}
