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
import Translator from '~/utils/Translator';
import Loading from '~/components/Loading';

export default function MoviePage() {
  const params = useParams();
  const [{ data, isLoading }]: any = useFetch(`films/${params.movieId}`, [], getMovie);

  function getMovieContent(movie) {
    return (
      <>
        <TitleContainer>
          <S.Column>
            <Title>{movie.title}</Title>
            <S.Text>
              <Translator>movie.episode</Translator> {convertNumberToRomanNumeral(movie.episode_id)}
            </S.Text>
          </S.Column>
          <S.Column>
            <TitleDescription>
              <Translator>generical.edited_at</Translator>: {movie.edited}
            </TitleDescription>
            <TitleDescription>
              <Translator>generical.created_at</Translator>: {movie.created}
            </TitleDescription>
          </S.Column>
        </TitleContainer>
        <S.Grid>
          <S.Sinopse>
            <Subtitle>
              <Translator>movie.opening</Translator>
            </Subtitle>
            <S.Text>{movie.opening_crawl}</S.Text>
          </S.Sinopse>
          <S.List>
            <Subtitle>
              <Translator>movie.appear_in_this_movie</Translator>
            </Subtitle>
            <S.LinksGrid>
              <S.CharactersColumn>
                <Subsubtitle>
                  <Translator>pages.characters</Translator>
                </Subsubtitle>
                <S.Column>{getList(movie.characters, 'characters')}</S.Column>
              </S.CharactersColumn>
              <S.SpeciesColumn>
                <Subsubtitle>
                  <Translator>pages.species</Translator>
                </Subsubtitle>
                <S.Column>{getList(movie.species, 'species')}</S.Column>
              </S.SpeciesColumn>
              <S.VehiclesColumn>
                <Subsubtitle>
                  <Translator>pages.vehicles</Translator>
                </Subsubtitle>
                <S.Column>{getList(movie.vehicles, 'vehicles')}</S.Column>
              </S.VehiclesColumn>
              <S.StarshipsColumn>
                <Subsubtitle>
                  <Translator>pages.starships</Translator>
                </Subsubtitle>
                <S.Column>{getList(movie.starships, 'starships')}</S.Column>
              </S.StarshipsColumn>
              <S.PlanetsColumn>
                <Subsubtitle>
                  <Translator>pages.planets</Translator>
                </Subsubtitle>
                <S.Column>{getList(movie.planets, 'planets')}</S.Column>
              </S.PlanetsColumn>
            </S.LinksGrid>
          </S.List>
          <S.Technique>
            <Subtitle>
              <Translator>movie.datasheet</Translator>
            </Subtitle>
            <S.ColumnsLayout>
              <S.Column>
                <Subsubtitle>
                  <Translator>movie.director</Translator>
                </Subsubtitle>
                <S.Text>{movie.director}</S.Text>
              </S.Column>
              <S.Column>
                <Subsubtitle>
                  <Translator>movie.producer</Translator>
                </Subsubtitle>
                {(movie.producer || []).map((prod) => (
                  <S.Text key={prod}>{prod}</S.Text>
                ))}
              </S.Column>
              <S.Column>
                <Subsubtitle>
                  <Translator>movie.release_date</Translator>
                </Subsubtitle>
                <S.Text>{movie.release_date}</S.Text>
              </S.Column>
            </S.ColumnsLayout>
          </S.Technique>
        </S.Grid>
      </>
    );
  }

  return isLoading ? <Loading /> : getMovieContent(data);
}
