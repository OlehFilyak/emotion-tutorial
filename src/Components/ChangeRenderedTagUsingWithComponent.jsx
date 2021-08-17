import React from "react";
import styled from "@emotion/styled";

function ChangeRenderedTagUsingWithComponent() {
  const Section = styled.section`
    background: #333;
    color: #fff;
  `;

  const Aside = Section.withComponent("aside");

  return (
    <div>
      <Section>Component section</Section>
      <Aside>
        Стилі, які створені в компоненті section застосували і до іншого
        компонента
      </Aside>
    </div>
  );
}

export default ChangeRenderedTagUsingWithComponent;
