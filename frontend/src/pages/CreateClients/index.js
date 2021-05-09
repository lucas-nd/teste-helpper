import React from "react";
import { Container } from "./styles";
import brandImg from "../../assets/helpper-brand.png";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function CreateClients() {
  const history = useHistory();

  async function handleCreateClient(values) {
    const data = {
      name: values.name,
      email: values.email,
      cpfCnpj: values.cpfCnpj,
      phone: { number: values.phone },
      address: {
        cep: values.cep,
        logradouro: values.logradouro,
        number: values.number,
        district: values.district,
        city: values.city,
        state: values.state,
      },
    };

    try {
      await api.post("", data);
      toast.success("Cliente inserido com sucesso.");
      setTimeout(() => history.push("/"), 5000);
    } catch (err) {
      toast.error(
        "Não foi possivel inserir o cliente, o email já está em uso."
      );
    }
  }

  return (
    <div className="page">
      <ToastContainer />
      <Container>
        <div className="header">
          <h1>Cadastrar</h1>
          <img src={brandImg} alt=""></img>
        </div>
        <div className="content">
          <Formik
            initialValues={{
              name: "",
              email: "",
              cpfCnpj: "",
              phone: "",
              cep: "",
              logradouro: "",
              number: "",
              district: "",
              city: "",
              state: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(3, "O nome precisa possuir mais de 3 caracteres")
                .required("Precisamos dessa informação."),
              email: Yup.string()
                .email("Email inválido")
                .required("Precisamos dessa informação."),
              cpfCnpj: Yup.string()
                .min(9, "Mínimo 9 digítos, informe apenas os digítos")
                .max(14, "Máximo de 14 digítos, informe apenas os digítos")
                .required("Precisamos dessa informação."),
              phone: Yup.string()
                .min(11, "Mínimo 11 digítos, informe apenas os digítos")
                .max(11, "Máximo de 11 digítos, informe apenas os digítos")
                .required("Precisamos dessa informação."),
              cep: Yup.string()
                .min(8, "Mínimo 8 digítos, informe apenas os digítos")
                .max(8, "Máximo de 8 digítos, informe apenas os digítos")
                .required("Precisamos dessa informação."),
              logradouro: Yup.string()
                .min(3, "O nome precisa possuir mais de 3 caracteres")
                .required("Precisamos dessa informação."),
              number: Yup.string()
                .min(1, "O nome precisa possuir mais de 3 caracteres")
                .required("Precisamos dessa informação."),
              district: Yup.string()
                .min(3, "O nome precisa possuir mais de 3 caracteres")
                .required("Precisamos dessa informação."),
              city: Yup.string()
                .min(3, "O nome precisa possuir mais de 3 caracteres")
                .required("Precisamos dessa informação."),
              state: Yup.string()
                .min(3, "O nome precisa possuir mais de 3 caracteres")
                .required("Precisamos dessa informação."),
            })}
            onSubmit={(values) => {
              handleCreateClient(values);
            }}
          >
            {(props) => (
              <Form className="form">
                <div className="form-group">
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Nome do cliente"
                  />
                  <ErrorMessage component="p" className="error" name="name" />
                </div>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail do cliente"
                />
                <ErrorMessage component="p" className="error" name="email" />
                <Field
                  id="cpfCnpj"
                  name="cpfCnpj"
                  type="text"
                  placeholder="CPF ou CNPJ do cliente"
                />
                <ErrorMessage component="p" className="error" name="cpfCnpj" />
                <Field
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Telefone do cliente"
                />
                <ErrorMessage component="p" className="error" name="phone" />

                <div className="input-group">
                  <p>Endereço do cliente</p>
                  <div className="input-line">
                    <Field id="cep" name="cep" type="text" placeholder="CEP" />
                    <ErrorMessage component="p" className="error" name="cep" />
                    <Field
                      id="logradouro"
                      name="logradouro"
                      type="text"
                      placeholder="Logradouro"
                    />
                    <ErrorMessage
                      component="p"
                      className="error"
                      name="logradouro"
                    />
                  </div>
                  <div className="input-line">
                    <Field
                      id="number"
                      name="number"
                      type="text"
                      placeholder="Número"
                    />
                    <ErrorMessage
                      component="p"
                      className="error"
                      name="number"
                    />
                    <Field
                      id="district"
                      name="district"
                      type="text"
                      placeholder="Bairro"
                    />
                    <ErrorMessage
                      component="p"
                      className="error"
                      name="district"
                    />
                  </div>
                  <div className="input-line">
                    <Field
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Cidade"
                    />
                    <ErrorMessage component="p" className="error" name="city" />
                    <Field
                      id="state"
                      name="state"
                      type="text"
                      placeholder="Estado"
                    />
                    <ErrorMessage
                      component="p"
                      className="error"
                      name="state"
                    />
                  </div>
                </div>

                <button type="submit">Cadastrar</button>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  );
}
