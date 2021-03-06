import styled from "styled-components";

const Form = styled.form`
  width: 350px;
  margin: auto;
  @media only screen and (max-width: 580px) {
    width: 85%;
  }
  div {
    margin-top: 1.5rem;
    width: 100%;

    input {
      width: 100%;
      padding: 0.8rem 0.8rem;
      border: none;
      border-radius: 5px;
      outline: none;
      background-color: #e2f3f5;
    }
    label {
      font-size: 0.9rem;
      font-family: var(--main-font);
      font-weight: 600;
      margin-bottom: 0.5rem;
      display: block;
      color: #e2f3f5;
    }
  }
  p {
    color: red;
    text-align: center;
    margin-top: 1rem;
    font-weight: 600;
  }

  button {
    margin-top: 2rem;
  }
`;

export default Form;
