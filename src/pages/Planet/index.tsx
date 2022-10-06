import * as Global from '~/components/StyledComponents/styles';
import { getPlanet } from '~/utils/requests';
import { getInformations, getList } from '~/utils/utils';
import Translator from '~/components/Translator';
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
      <Global.Flex>
        <Global.BasicCard>
          <Global.Subtitle>
            <Translator>generical.basic_informations</Translator>
          </Global.Subtitle>
          <Global.BasicCardContent>{getInformations(informations, planet)}</Global.BasicCardContent>
        </Global.BasicCard>
        <Global.BasicCard>
          <Global.Subtitle>
            <Translator>generical.characters_residents</Translator>
          </Global.Subtitle>
          {getList(planet.residents, 'characters', 'name')}
        </Global.BasicCard>
        <MovieChartCard movies={planet.films} />
      </Global.Flex>
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
