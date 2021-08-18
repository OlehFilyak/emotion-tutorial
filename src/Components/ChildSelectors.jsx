/** @jsxImportSource @emotion/react */
import React from "react";

function ChildSelectors() {
  return (
    <div
      css={{
        color: "darkorchid",
        "& .name": {
          color: "orange",
        },
      }}
    >
      Застосовані стилі для селектора із відповідним className
      <div className="name">Тому цей текст оранджевий, а верхній ні</div>
    </div>
  );
}

export default ChildSelectors;
