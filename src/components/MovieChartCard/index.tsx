import Translator from '~/utils/Translator';
import * as Global from '~/components/StyledComponents/styles';
import { getList } from '~/utils/utils';
import { MovieLink } from '~/utils/types';
import * as S from './styles';

export default function MovieChartCard({ movies }: { movies: MovieLink[] }) {
  return (
    <S.BasicInfo>
      <Global.Subtitle>
        <Translator>pages.movies</Translator>
      </Global.Subtitle>
      {getList(movies, 'movies', 'title')}
    </S.BasicInfo>
  );
}
