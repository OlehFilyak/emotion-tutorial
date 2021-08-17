/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Composition2() {
  const danger = css`
    color: red;
  `;

  const base = css`
    background-color: darkgreen;
    color: turquoise;
  `;
  return (
    <div>
      <div>
        <div css={base}></div>
        <div css={[danger, base]}>
          Створено масив для комбінування стилів і той який передано останній,
          буде і мати потрібний колір
        </div>
        <div css={[base, danger]}>
          Тут буде червоний, бо він останній в масиві, хот в потоці коду він
          вище
        </div>
      </div>
    </div>
  );
}

export default Composition2;
