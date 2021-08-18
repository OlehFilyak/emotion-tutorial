/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function WithCss() {
  const hotpink = css({
    color: "hotpink",
  });
  return (
    <div>
      <p css={hotpink}>
        Стилі застосовані через css, куди передано об'єкт стилів
      </p>
    </div>
  );
}

export default WithCss;
