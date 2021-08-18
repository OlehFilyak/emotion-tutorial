/** @jsxImportSource @emotion/react */

function Fallbacks() {
  return (
    <div
      css={{
        background: ["red", "linear-gradient(#e66465, #9198e5)"],
        height: 100,
      }}
    >
      Визначено додатково властивість, для браузерів, які не підтримують
      лінійний градієнт. Для них колір фону буде червоний.
    </div>
  );
}

export default Fallbacks;
