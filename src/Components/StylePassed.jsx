/** @jsxImportSource @emotion/react */
// import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

function Text() {
  const color = "darkgreen";

  return (
    <>
      <div
        css={{
          backgroundColor: "hotpink",
          "&:hover": {
            color: "lightgreen",
          },
        }}
      >
        Цьому тексту передані стилі через об'єкт
      </div>

      <div
        css={css`
          background-color: hotpink;
          &:hover {
            color: ${color};
          }
        `}
      >
        Цьому тексту передані стилі через шаблонну строку
      </div>
    </>
  );
}

export default Text;
