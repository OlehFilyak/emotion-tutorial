/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

function Button() {
  const Button = styled.button`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `;

  return (
    <>
      <Button>Компонент кнопки створений за допомогою emotion</Button>
    </>
  );
}

export default Button;
