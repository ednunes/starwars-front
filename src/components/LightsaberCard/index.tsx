import { Lightsaber } from '../Lightsaber';
import * as S from './styles';

function LightsaberCard({ content }: { content: JSX.Element }) {
  return (
    <S.LightsaberCard>
      <Lightsaber />
      <S.Card>{content}</S.Card>
      <Lightsaber />
    </S.LightsaberCard>
  );
}

export default LightsaberCard;
