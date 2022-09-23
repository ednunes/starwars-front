import * as S from './styles';
function Button({ text, handleClick }) {
  return <S.Button onClick={handleClick}>{text}</S.Button>;
}

export default Button;
