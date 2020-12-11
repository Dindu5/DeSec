import styled from "styled-components";

const DemoPageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  width: 100vw;
  background: #0e153a;

  h2 {
    transform: translateY(7rem);
    font-size: 2rem;
    color: #e2f3f5;
  }
  > h6 {
    font-size: 1.3rem;
    font-weight: 400;
    color: #e2f3f5;
    a {
      color: var(--main-color);
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

export default DemoPageWrap;
