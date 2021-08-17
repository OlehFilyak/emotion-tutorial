/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

export const P = (props) => (
  <p
    text={props.text}
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: "1.5",
      fontFamily: "Sans-Serif",
      color: "black",
    }}
    {...props} // <- props contains the `className` prop
  >
    {props.text}
  </p>
);

export const ArticleText = (props) => (
  <P
    css={{
      fontSize: 14,
      fontFamily: "Georgia, serif",
      color: "darkgray",
    }}
    {...props} // <- props contains the `className` prop
  />
);

export const SmallArticleText = (props) => (
  <ArticleText
    css={{
      fontSize: 10,
    }}
    {...props} // <- props contains the `className` prop
  />
);

// .css-result {
// + margin: 0;
// - font-size: 12px;
// + line-height: 1.5;
// - font-family: 'sans-serif';
// - color: black;
// - font-size: 14px,
// + font-family: Georgia, serif,
// + color: darkgray;
// + font-size: 10px;
// }
