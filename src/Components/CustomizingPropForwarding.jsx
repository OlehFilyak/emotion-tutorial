import React from "react";
import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";

function CustomizingPropForwarding() {
  const H1 = styled("h1", {
    shouldForwardProp: (prop) => isPropValid(prop) && prop !== "color",
  })((props) => ({
    color: "hotpink",
    backgroundColor: `${props.backgroundColor}`,
  }));

  return (
    <div>
      <H1 color="lightgreen" backgroundColor="blue">
        Заблокована зміна коліру тексту через пропи (інвалідація)
      </H1>
    </div>
  );
}

export default CustomizingPropForwarding;
