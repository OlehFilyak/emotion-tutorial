/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";

function Facepaint() {
  const breakpoints = [576, 768, 992, 1200];

  const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
  return (
    <div
      css={mq({
        color: ["green", "gray", "hotpink"],
      })}
    >
      Встановлення кольору тексту за допомогою медіаправил, шляхом перебору
      масиву
    </div>
  );
}

export default Facepaint;
