import { useParams } from 'react-router-dom';
import * as Global from '~/components/StyledComponents/styles';
import { getPlanet } from '~/utils/requests';
import useFetch from '~/hooks/useFetch';
import * as S from './styles';
import { getInformations, getList } from '~/utils/utils';
import Translator from '~/utils/Translator';
import Loading from '~/components/Loading';

export default function PlanetPage() {
  const params = useParams();
  const [{ data, isLoading }]: any = useFetch(`planets/${params.planetId}`, [], getPlanet);
  const infomations = [
    {
      label: 'planet.rotation_period',
      value: 'rotation_period',
    },
    {
      label: 'planet.orbital_period',
      value: 'orbital_period',
    },
    {
      label: 'planet.surface_water',
      value: 'surface_water',
    },
    {
      label: 'planet.diameter',
      value: 'diameter',
    },
    {
      label: 'planet.gravity',
      value: 'gravity',
    },
    {
      label: 'planet.population',
      value: 'population',
    },
    {
      label: 'planet.climate',
      value: 'climate',
    },
    {
      label: 'planet.terrain',
      value: 'terrain',
    },
  ];

  function getPlanetContent(planet) {
    return (
      <>
        <Global.TitleContainer>
          <S.Column>
            <Global.Title>{planet.name}</Global.Title>
          </S.Column>
          <S.Column>
            <Global.TitleDescription>
              <Translator>generical.edited_at</Translator>: {planet.edited}
            </Global.TitleDescription>
            <Global.TitleDescription>
              <Translator>generical.created_at</Translator>: {planet.created}
            </Global.TitleDescription>
          </S.Column>
        </Global.TitleContainer>
        <S.Flex>
          <S.BasicInfo>
            <Global.Subtitle>
              <Translator>generical.basic_informations</Translator>
            </Global.Subtitle>
            <S.BasicInfoContent>{getInformations(infomations, planet)}</S.BasicInfoContent>
            <S.LinksGrid>
              <S.MoviesColumn>
                <Global.Subsubtitle>
                  <Translator>pages.movies</Translator>
                </Global.Subsubtitle>
                {getList(planet.films, 'movies', 'title')}
              </S.MoviesColumn>
              <S.CharactersColumn>
                <Global.Subsubtitle>
                  <Translator>generical.characters_residents</Translator>
                </Global.Subsubtitle>
                {getList(planet.residents, 'people', 'name')}
              </S.CharactersColumn>
            </S.LinksGrid>
          </S.BasicInfo>
        </S.Flex>
      </>
    );
  }

  return isLoading ? <Loading /> : getPlanetContent(data);
}
