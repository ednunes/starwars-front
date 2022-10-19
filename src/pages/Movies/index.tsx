import MovieContent from '~/components/CardContents/MovieContent';
import GenericListPage from '~/pages/GenericListPage';
import { getMovieList } from '~/utils/requests';
import { MovieCard } from '~/utils/types';

function MoviesPage() {
  function getCard(content: MovieCard) {
    return <MovieContent content={content} />;
  }

  return (
    <GenericListPage
      text='pages.movies'
      getCard={getCard}
      formatData={getMovieList}
      resource='films'
    />
  );
}

export default MoviesPage;
