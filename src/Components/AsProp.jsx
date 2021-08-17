import styled from "@emotion/styled";

function AsProp() {
  const Button = styled.button`
    color: hotpink;
  `;

  return (
    <div>
      <Button as="a" href="https://github.com/emotion-js/emotion">
        Використали стилі із компонента кнопки передавши тип елементу -
        посилання як проп (Посилання на Emotion)
      </Button>
    </div>
  );
}

export default AsProp;
