import React from "react";
import styled from "@emotion/styled";

function NestingComponents() {
  const Example = styled("p")`
    color: lightgreen;
    & > span {
      color: hotpink;
    }
  `;

  return (
    <div>
      <Example>
        Це є <span>елемент стилізований за допомогою вкладення стилів</span>.
      </Example>
    </div>
  );
}

export default NestingComponents;
