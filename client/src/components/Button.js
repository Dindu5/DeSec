import styled, { css } from "styled-components";

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 0.9rem 1.4rem;
  background: var(--main-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.6s;
  color: var(--white);
  font-family: var(--main-font);
  margin: auto;

  ${(props) =>
    props.danger &&
    css`
      background-color: #e41749;
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: #f85959;
    `}

  &:hover,
  &:focus {
    transform: translateY(-4px);
    transition: all 0.6s;
    outline: none;
  }
`;

export default Button;
