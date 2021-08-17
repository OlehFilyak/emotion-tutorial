import React from "react";
import styled from "@emotion/styled";

function ObjectStyles() {
  const H1 = styled.h1(
    {
      fontSize: 20,
    },
    (props) => ({ color: props.color })
  );
  return (
    <div>
      <H1 color="lightgreen">Колір тексту передано через пропси в об'єкт</H1>
    </div>
  );
}

export default ObjectStyles;
