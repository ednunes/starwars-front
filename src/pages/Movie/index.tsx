import { useParams } from 'react-router-dom';
import {
  Title,
  Subtitle,
  TitleContainer,
  Subsubtitle,
  TitleDescription,
} from '~/components/StyledComponents/styles';
import { getMovie } from '~/utils/requests';
import useFetch from '~/hooks/useFetch';
import * as S from './styles';
import { convertNumberToRomanNumeral, getList } from '~/utils/utils';

export default function MoviePage() {
  const params = useParams();
  const [{ data, isLoading }]: any = useFetch(`films/${params.movieId}`, [], getMovie);

  function getMovieContent(movie) {
    return (
      <>
        <TitleContainer>
          <S.Column>
            <Title>{movie.title}</Title>
            <S.Text>Episode {convertNumberToRomanNumeral(movie.episode_id)}</S.Text>
          </S.Column>
          <S.Column>
            <TitleDescription>EDITED AT: {movie.edited}</TitleDescription>
            <TitleDescription>CREATED AT: {movie.created}</TitleDescription>
          </S.Column>
        </TitleContainer>
        <S.Grid>
          <S.Sinopse>
            <Subtitle>Sinopse</Subtitle>
            <S.Text>{movie.opening_crawl}</S.Text>
          </S.Sinopse>
          <S.List>
            <Subtitle>Appear in this movie</Subtitle>
            <S.LinksGrid>
              <S.CharactersColumn>
                <Subsubtitle>Characters</Subsubtitle>
                <S.Column>{getList(movie.characters, 'characters')}</S.Column>
              </S.CharactersColumn>
              <S.SpeciesColumn>
                <Subsubtitle>Species</Subsubtitle>
                <S.Column>{getList(movie.species, 'species')}</S.Column>
              </S.SpeciesColumn>
              <S.VehiclesColumn>
                <Subsubtitle>Vehicles</Subsubtitle>
                <S.Column>{getList(movie.vehicles, 'vehicles')}</S.Column>
              </S.VehiclesColumn>
              <S.StarshipsColumn>
                <Subsubtitle>Starships</Subsubtitle>
                <S.Column>{getList(movie.starships, 'starships')}</S.Column>
              </S.StarshipsColumn>
              <S.PlanetsColumn>
                <Subsubtitle>Planets</Subsubtitle>
                <S.Column>{getList(movie.planets, 'planets')}</S.Column>
              </S.PlanetsColumn>
            </S.LinksGrid>
          </S.List>
          <S.Technique>
            <Subtitle>Datasheet</Subtitle>
            <S.ColumnsLayout>
              <S.Column>
                <Subsubtitle>Director</Subsubtitle>
                <S.Text>{movie.director}</S.Text>
              </S.Column>
              <S.Column>
                <Subsubtitle>Productors</Subsubtitle>
                <S.Text>{movie.director}</S.Text>
              </S.Column>
              <S.Column>
                <Subsubtitle>Release date</Subsubtitle>
                <S.Text>{movie.release_date}</S.Text>
              </S.Column>
            </S.ColumnsLayout>
          </S.Technique>
        </S.Grid>
      </>
    );
  }

  return isLoading ? <h1>Loading...</h1> : getMovieContent(data);
}
