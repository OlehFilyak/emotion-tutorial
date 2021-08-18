/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

function ObjectStyles1() {
  const Button = styled.button(
    {
      color: "darkorchid",
    },
    (props) => ({
      fontSize: props.fontSize,
    })
  );

  return (
    <>
      <div
        css={{
          color: "darkorchid",
          backgroundColor: "lightgray",
        }}
      >
        {" "}
        Властивості передані об'єктом в camelCase
      </div>

      <Button fontSize={16}>
        Властивості передані пропом в camelCase і доставлені в об'єкт
      </Button>
    </>
  );
}

export default ObjectStyles1;
