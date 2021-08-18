/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

function MediaQueries3() {
  const breakpoints = [576, 768, 992, 1200];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  return (
    <div>
      <div
        css={{
          color: "green",
          [mq[0]]: {
            color: "gray",
          },
          [mq[1]]: {
            color: "hotpink",
          },
        }}
      >
        Застосовано медіазапит, збережений в константах. Стилі передано масивом.
      </div>
      <p
        css={css`
          color: green;
          ${mq[0]} {
            color: gray;
          }
          ${mq[1]} {
            color: hotpink;
          }
        `}
      >
        Застосовано медіазапит, збережений в константах. Стилі передано
        шаблонною строкою.
      </p>
    </div>
  );
}

export default MediaQueries3;
