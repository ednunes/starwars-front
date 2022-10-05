import { useParams } from 'react-router-dom';
import * as Global from '~/components/StyledComponents/styles';
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
        <Global.TitleContainer>
          <S.Column>
            <Global.Title>{movie.title}</Global.Title>
            <S.EpisodeText>
              <Translator>movie.episode</Translator> {convertNumberToRomanNumeral(movie.episode_id)}
            </S.EpisodeText>
          </S.Column>
          <S.Column>
            <Global.TitleDescription>
              <Translator>generical.edited_at</Translator>: {movie.edited}
            </Global.TitleDescription>
            <Global.TitleDescription>
              <Translator>generical.created_at</Translator>: {movie.created}
            </Global.TitleDescription>
          </S.Column>
        </Global.TitleContainer>
        <S.Grid>
          <S.Sinopse>
            <Global.Subtitle>
              <Translator>movie.opening</Translator>
            </Global.Subtitle>
            <S.Text>{movie.opening_crawl}</S.Text>
          </S.Sinopse>
          <S.List>
            <Global.Subtitle>
              <Translator>movie.appear_in_this_movie</Translator>
            </Global.Subtitle>
            <S.LinksGrid>
              <S.CharactersColumn>
                <Global.Subsubtitle>
                  <Translator>pages.characters</Translator>
                </Global.Subsubtitle>
                <S.Column>{getList(movie.characters, 'characters')}</S.Column>
              </S.CharactersColumn>
              <S.SpeciesColumn>
                <Global.Subsubtitle>
                  <Translator>pages.species</Translator>
                </Global.Subsubtitle>
                <S.Column>{getList(movie.species, 'species')}</S.Column>
              </S.SpeciesColumn>
              <S.VehiclesColumn>
                <Global.Subsubtitle>
                  <Translator>pages.vehicles</Translator>
                </Global.Subsubtitle>
                <S.Column>{getList(movie.vehicles, 'vehicles')}</S.Column>
              </S.VehiclesColumn>
              <S.StarshipsColumn>
                <Global.Subsubtitle>
                  <Translator>pages.starships</Translator>
                </Global.Subsubtitle>
                <S.Column>{getList(movie.starships, 'starships')}</S.Column>
              </S.StarshipsColumn>
              <S.PlanetsColumn>
                <Global.Subsubtitle>
                  <Translator>pages.planets</Translator>
                </Global.Subsubtitle>
                <S.Column>{getList(movie.planets, 'planets')}</S.Column>
              </S.PlanetsColumn>
            </S.LinksGrid>
          </S.List>
          <S.Technique>
            <Global.Subtitle>
              <Translator>movie.datasheet</Translator>
            </Global.Subtitle>
            <S.ColumnsLayout>
              <S.Column>
                <Global.Subsubtitle>
                  <Translator>movie.director</Translator>
                </Global.Subsubtitle>
                <S.Text>{movie.director}</S.Text>
              </S.Column>
              <S.Column>
                <Global.Subsubtitle>
                  <Translator>movie.producer</Translator>
                </Global.Subsubtitle>
                {(movie.producer || []).map((prod) => (
                  <S.Text key={prod}>{prod}</S.Text>
                ))}
              </S.Column>
              <S.Column>
                <Global.Subsubtitle>
                  <Translator>movie.release_date</Translator>
                </Global.Subsubtitle>
                <S.Text>{movie.release_date}</S.Text>
              </S.Column>
            </S.ColumnsLayout>
          </S.Technique>
        </S.Grid>
      </>
    );
  }

  return isLoading ? (
    <Global.CentralizedComponent>
      <Loading />
    </Global.CentralizedComponent>
  ) : (
    getMovieContent(data)
  );
}
