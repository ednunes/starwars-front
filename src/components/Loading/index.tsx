import Translator from '~/utils/Translator';
import { ReactComponent as XWing } from '../../assets/icons/xwing.svg';
import { Title } from '../StyledComponents/styles';
import * as S from './styles';

export default function Loading() {
  return (
    <S.Container>
      <S.Content>
        <XWing />
      </S.Content>
      <S.TextContent>
        <Title>
          <Translator>loading</Translator>
        </Title>
        <S.DotAnimation>
          <div></div>
          <div></div>
          <div></div>
        </S.DotAnimation>
      </S.TextContent>
    </S.Container>
  );
}
