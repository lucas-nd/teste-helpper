import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 42px;

  height: 550px;
  max-width: 360px;
  width: 100%;

  background-color: #fff;
  color: #30334a;

  border-radius: 16px;
  border: none;

  .header {
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin: 0 16px 0 16px;
  }

  img {
    width: 90px;
    heigth: 90px;
  }

  input {
    margin-top: 8px;
  }

  form input {
    width: 100%;
    height: 30px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  .input-group {
    margin-top: 8px;
  }

  .input-group p {
    color: #30334a;
  }

  .input-group input {
    width: 45%;
  }

  .input-line {
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 100%;
    height: 40px;
    margin-top: 16px;
    background: #aeea00;
    border: 0;
    border-radius: 8px;
    color: #30334a;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    transition: filter 0.2s;
  }

  button:hover {
    filter: brightness(85%);
  }

  .content {
    height: 100%;
    overflow: auto;
  }

  .error {
    color: red;
  }

  .input-line .error {
    color: red;
  }
`;

export { Container };
