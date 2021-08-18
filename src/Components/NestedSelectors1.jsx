/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

function NestedSelectors1() {
  const paragraph = css`
    color: turquoise;

    a {
      border-bottom: 1px solid currentColor;
      cursor: pointer;
    }
  `;
  return (
    <p css={paragraph}>
      Some text.
      <a>
        Приклад стилів вкладеного селектору, що застосовується тільки для
        дочірніх елементів
      </a>
    </p>
  );
}

export default NestedSelectors1;
