/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Composition1() {
  const base = css`
    color: hotpink;
  `;

  return (
    <div>
      <div
        css={css`
          ${base};
          background-color: #eee;
        `}
      >
        Стиль кольору взято передано через інтерполяцію. Створено композицію
        стилів.
      </div>
    </div>
  );
}

export default Composition1;
