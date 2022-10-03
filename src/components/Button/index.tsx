import * as S from './styles';

function Button({ text, handleClick }: { text: JSX.Element; handleClick: () => void }) {
  return <S.Button onClick={handleClick}>{text}</S.Button>;
}

export default Button;
