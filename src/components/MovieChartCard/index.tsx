import Translator from '~/components/Translator';
import * as Global from '~/components/StyledComponents/styles';
import { getList } from '~/utils/utils';
import { MovieLink } from '~/utils/types';
import { PieChart, Pie, Cell } from 'recharts';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

export default function MovieChartCard({ movies }: { movies: MovieLink[] }) {
  const { t } = useTranslation();
  const total_movies_number_ = 6;
  const movies_number = movies?.length ? movies.length : 0;
  const movies_number_percent = (movies_number / total_movies_number_) * 100;

  const data = [
    { name: 'movies_number', value: movies_number, color: 'var(--secondary)' },
    {
      name: 'total_movies_number_',
      value: total_movies_number_ - movies_number,
      color: 'var(--background)',
    },
  ];

  const legend = `${movies_number_percent.toFixed(2)}% (${movies_number} ${t(
    'generical.of',
  )} ${total_movies_number_} ${t('pages.movies')})`;

  return (
    <Global.BasicCard>
      <Global.Subtitle>
        <Translator>generical.appearances_in_movies</Translator>
      </Global.Subtitle>
      <S.ChartContainer>
        <PieChart width={200} height={200}>
          <Pie data={data} labelLine={false} outerRadius={80} dataKey='value'>
            {data.map((entry) => (
              <Cell key={`cell-${entry.name}`} fill={entry.color} stroke={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <S.ChartLegend>{legend}</S.ChartLegend>
      </S.ChartContainer>
      <Global.Subsubtitle>
        <Translator>generical.appears_in</Translator>
      </Global.Subsubtitle>
      {getList(movies, 'movies', 'title')}
    </Global.BasicCard>
  );
}
