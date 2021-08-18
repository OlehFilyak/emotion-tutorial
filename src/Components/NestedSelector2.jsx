/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

function NestedSelector2() {
  const paragraph = css`
    color: turquoise;

    header & {
      color: green;
    }
  `;
  return (
    <div>
      <header>
        <p css={paragraph}>
          Застосовані стилі до дочірнього елементу через вкладений селектор
        </p>
      </header>
      <p css={paragraph}>А це звичайний, не вкладений елемент</p>
    </div>
  );
}

export default NestedSelector2;
