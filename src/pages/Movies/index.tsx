import MovieContent from '~/components/CardContents/MovieContent';
import CardList from '~/components/CardList';
import { getMovieList } from '~/utils/requests';

function MoviesPage() {
  function getCard(content) {
    return <MovieContent content={content} />;
  }

  return <CardList text='movies' getCard={getCard} formatData={getMovieList} resource='films' />;
}

export default MoviesPage;
