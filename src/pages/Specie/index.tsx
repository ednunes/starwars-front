import * as Global from '~/components/StyledComponents/styles';
import { getSpecie } from '~/utils/requests';
import { getInformations, getLink, getList } from '~/utils/utils';
import Translator from '~/utils/Translator';
import GenericDetailsPage from '../GenericDetailsPage';
import { Specie, SpecieRequest } from './types';
import MovieChartCard from '~/components/MovieChartCard';

export default function SpeciePage() {
  const infomations = [
    {
      label: 'specie.classification',
      value: 'classification',
    },
    {
      label: 'specie.designation',
      value: 'designation',
    },
    {
      label: 'specie.average_height',
      value: 'average_height',
    },
    {
      label: 'specie.average_lifespan',
      value: 'average_lifespan',
    },
    {
      label: 'specie.language',
      value: 'language',
    },
    {
      label: 'specie.skin_colors',
      value: 'skin_colors',
    },
    {
      label: 'specie.hair_colors',
      value: 'hair_colors',
    },
    {
      label: 'specie.eye_colors',
      value: 'eye_colors',
    },
  ];

  function getSpecieContent(specie: Specie) {
    return (
      <Global.Flex>
        <Global.BasicCard>
          <Global.Subtitle>
            <Translator>generical.basic_informations</Translator>
          </Global.Subtitle>
          <Global.BasicCardContent>
            {getInformations(infomations, specie)}
            {getLink(specie.homeworld, 'planets', 'character.homeworld')}
          </Global.BasicCardContent>
          <Global.Subtitle>
            <Translator>pages.character</Translator>
          </Global.Subtitle>
          {getList(specie.people, 'characters', 'name')}
        </Global.BasicCard>
        <MovieChartCard movies={specie.films} />
      </Global.Flex>
    );
  }

  return (
    <GenericDetailsPage
      resource='species'
      resourceId='specieId'
      getContent={(data) => getSpecieContent(data)}
      formatData={(species: SpecieRequest) => getSpecie(species)}
    />
  );
}
