import Translator from '~/utils/Translator';
import * as Global from '~/components/StyledComponents/styles';
import { getList } from '~/utils/utils';
import { MovieLink } from '~/utils/types';

export default function MovieChartCard({ movies }: { movies: MovieLink[] }) {
  return (
    <Global.BasicCard>
      <Global.Subtitle>
        <Translator>pages.movies</Translator>
      </Global.Subtitle>
      {getList(movies, 'movies', 'title')}
    </Global.BasicCard>
  );
}
