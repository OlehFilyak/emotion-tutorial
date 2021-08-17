import styled from "@emotion/styled";

function ChangingBasedOnProps() {
  const Button = styled.button`
    color: ${(props) => (props.primary ? "hotpink" : "turquoise")};
  `;

  const Container = styled.div((props) => ({
    display: "flex",
    flexDirection: props.column && "column",
  }));
  return (
    <>
      <Container column>
        <Button>Це звичайна кнопка</Button>
        <Button primary>
          А ця кнопка стилізована задопомогою додавання props компоненту
        </Button>
      </Container>
    </>
  );
}

export default ChangingBasedOnProps;
