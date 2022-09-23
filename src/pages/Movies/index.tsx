import MovieContent from '~/components/CardContents/MovieContent';
import CardList from '~/components/CardList';
import { getMovieList } from '~/utils/requests';
import { MovieCard } from '~/utils/types';

function MoviesPage() {
  function getCard(content: MovieCard) {
    return <MovieContent content={content} />;
  }

  return <CardList text='movies' getCard={getCard} formatData={getMovieList} resource='films' />;
}

export default MoviesPage;
