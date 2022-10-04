import * as Global from '~/components/StyledComponents/styles';
import { getStarship } from '~/utils/requests';
import { getInformations, getList } from '~/utils/utils';
import Translator from '~/utils/Translator';
import GenericDetailsPage from '../GenericDetailsPage';
import { Starship, StarshipRequest } from './types';
import MovieChartCard from '~/components/MovieChartCard';

export default function StarshipPage() {
  const infomations = [
    {
      label: 'MGLT',
      value: 'MGLT',
    },
    {
      label: 'starship.consumables',
      value: 'consumables',
    },
    {
      label: 'starship.hyperdrive_rating',
      value: 'hyperdrive_rating',
    },
    {
      label: 'generical.length',
      value: 'length',
    },
    {
      label: 'starship.crew',
      value: 'crew',
    },
    {
      label: 'starship.passengers',
      value: 'passengers',
    },
    {
      label: 'generical.model',
      value: 'model',
    },
    {
      label: 'generical.cost_in_credits',
      value: 'cost_in_credits',
    },
    {
      label: 'starship.cargo_capacity',
      value: 'cargo_capacity',
    },
    {
      label: 'starship.max_atmosphering_speed',
      value: 'max_atmosphering_speed',
    },
    {
      label: 'starship.manufacturer',
      value: 'manufacturer',
    },
  ];

  function getStarshipContent(starship: Starship) {
    return (
      <Global.Flex>
        <Global.BasicCard>
          <Global.Subtitle>
            <Translator>generical.basic_informations</Translator>
          </Global.Subtitle>
          <Global.BasicCardContent>
            {getInformations(infomations, starship)}
          </Global.BasicCardContent>
        </Global.BasicCard>
        <Global.BasicCard>
          <Global.Subtitle>
            <Translator>starship.pilots</Translator>
          </Global.Subtitle>
          {getList(starship.pilots, 'characters', 'name')}
        </Global.BasicCard>
        <MovieChartCard movies={starship.films} />
      </Global.Flex>
    );
  }

  return (
    <GenericDetailsPage
      resource='starships'
      resourceId='starshipId'
      getContent={(data: Starship) => getStarshipContent(data)}
      formatData={(starship: StarshipRequest) => getStarship(starship)}
    />
  );
}
