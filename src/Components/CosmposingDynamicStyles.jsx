import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

function CosmposingDynamicStyles() {
  const dynamicStyle = (props) =>
    css`
      color: ${props.color};
    `;

  const Container = styled.div`
    ${dynamicStyle};
  `;

  return (
    <div>
      <Container color="lightgreen">
        Стилі додані в компонент динамічно через пропси
      </Container>
    </div>
  );
}

export default CosmposingDynamicStyles;
