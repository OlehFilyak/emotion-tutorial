/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

function GlobalStyles() {
  return (
    <div>
      <Global
        styles={css`
          .some-class {
            color: hotpink !important;
          }
        `}
      />
      <Global
        styles={{
          ".some-class": {
            fontSize: 50,
            textAlign: "center",
          },
        }}
      />
      <div className="some-class">
        Глобальні стилі можна задати через компонент Global
      </div>
    </div>
  );
}

export default GlobalStyles;
