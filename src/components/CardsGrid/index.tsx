import LightsaberCard from '../LightsaberCard';
import * as S from './styles';

export default function CardsGrid({ list, getCard }) {
  return (
    <S.Grid>
      {list.map((item) => (
        <LightsaberCard key={item.url} content={getCard(item)} />
      ))}
    </S.Grid>
  );
}
