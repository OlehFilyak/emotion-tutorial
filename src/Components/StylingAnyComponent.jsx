import React from "react";
import styled from "@emotion/styled";

function StylingAnyComponent() {
  const Basic = ({ className }) => (
    <div className={className}>
      Створили компонент і стилізували його, передавши в ClassName відповідні
      стилі стилі
    </div>
  );

  const Fancy = styled(Basic)`
    color: hotpink;
  `;
  return (
    <div>
      <Fancy />
    </div>
  );
}

export default StylingAnyComponent;
