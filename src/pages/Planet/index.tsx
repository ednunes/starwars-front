import * as Global from '~/components/StyledComponents/styles';
import { getPlanet } from '~/utils/requests';
import * as S from './styles';
import { getInformations, getList } from '~/utils/utils';
import Translator from '~/utils/Translator';
import GenericDetailsPage from '../GenericDetailsPage';
import { Planet, PlanetRequest } from './types';
import MovieChartCard from '~/components/MovieChartCard';

export default function PlanetPage() {
  const informations = [
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

  function getPlanetContent(planet: Planet) {
    return (
      <S.Flex>
        <S.BasicInfo>
          <Global.Subtitle>
            <Translator>generical.basic_informations</Translator>
          </Global.Subtitle>
          <S.BasicInfoContent>{getInformations(informations, planet)}</S.BasicInfoContent>
        </S.BasicInfo>
        <S.BasicInfo>
          <Global.Subtitle>
            <Translator>generical.characters_residents</Translator>
          </Global.Subtitle>
          {getList(planet.residents, 'people', 'name')}
        </S.BasicInfo>
        <MovieChartCard movies={planet.films} />
      </S.Flex>
    );
  }

  return (
    <GenericDetailsPage
      resource='planets'
      resourceId='planetId'
      getContent={(data) => getPlanetContent(data)}
      formatData={(planet: PlanetRequest) => getPlanet(planet)}
    />
  );
}
