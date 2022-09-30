import { useParams } from 'react-router-dom';
import * as Global from '~/components/StyledComponents/styles';
import { getPlanet } from '~/utils/requests';
import useFetch from '~/hooks/useFetch';
import * as S from './styles';
import { getInformations, getList } from '~/utils/utils';

export default function PlanetPage() {
  const params = useParams();
  const [{ data, isLoading }]: any = useFetch(`planets/${params.planetId}`, [], getPlanet);
  const infomations = [
    {
      label: 'Rotation Period',
      value: 'rotation_period',
    },
    {
      label: 'Orbital period',
      value: 'orbital_period',
    },
    {
      label: 'Surface water',
      value: 'surface_water',
    },
    {
      label: 'Diameter',
      value: 'diameter',
    },
    {
      label: 'Gravity',
      value: 'gravity',
    },
    {
      label: 'Population',
      value: 'population',
    },
    {
      label: 'Climate',
      value: 'climate',
    },
    {
      label: 'Terrain',
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
            <Global.TitleDescription>EDITED AT: {planet.edited}</Global.TitleDescription>
            <Global.TitleDescription>CREATED AT: {planet.created}</Global.TitleDescription>
          </S.Column>
        </Global.TitleContainer>
        <S.Flex>
          <S.BasicInfo>
            <Global.Subtitle>Basic Informations</Global.Subtitle>
            <S.BasicInfoContent>{getInformations(infomations, planet)}</S.BasicInfoContent>
            <S.LinksGrid>
              <S.MoviesColumn>
                <Global.Subsubtitle>Movies</Global.Subsubtitle>
                {getList(planet.films, 'movies', 'title')}
              </S.MoviesColumn>
              <S.CharactersColumn>
                <Global.Subsubtitle>Characters residents</Global.Subsubtitle>
                {getList(planet.residents, 'people', 'name')}
              </S.CharactersColumn>
            </S.LinksGrid>
          </S.BasicInfo>
        </S.Flex>
      </>
    );
  }

  return isLoading ? <h1>Loading...</h1> : getPlanetContent(data);
}
