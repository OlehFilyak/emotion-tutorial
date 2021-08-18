import { jsx, css } from "@emotion/react";

function MediaQueries2() {
  return (
    <p
      css={css`
        font-size: 30px;
        @media (min-width: 420px) {
          font-size: 50px;
        }
      `}
    >
      Медіа запит в Emotion. Для малого екрану текст буде більший, не треба
      створювати селектор, досить просто медіа правило розмістити під звичайним.
    </p>
  );
}

export default MediaQueries2;
