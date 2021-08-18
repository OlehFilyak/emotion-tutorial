/** @jsxImportSource @emotion/react */

function MediaQueries() {
  return (
    <div
      css={{
        color: "darkorchid",
        "@media(min-width: 420px)": {
          color: "orange",
        },
      }}
    >
      Колір - оранджевий на великому екрані і оранджевий на малому екрані
    </div>
  );
}

export default MediaQueries;
