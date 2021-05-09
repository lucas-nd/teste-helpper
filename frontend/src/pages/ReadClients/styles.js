import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 42px;

  height: 500px;
  max-width: 450px;
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

  .info-client {
    padding-top: 16px;
  }

  .info {
    margin-bottom: 5px;
  }

  button {
    width: 100%;
    height: 40px;
    margin-top: 16px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
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
    overflow: auto;
  }
`;

export { Container };
