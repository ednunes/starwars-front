import { useParams } from 'react-router-dom';
import * as Global from '~/components/StyledComponents/styles';
import { getStarship } from '~/utils/requests';
import useFetch from '~/hooks/useFetch';
import * as S from './styles';
import { getInformations, getList } from '~/utils/utils';
import Loading from '~/components/Loading';
import Translator from '~/utils/Translator';

export default function StarshipPage() {
  const params = useParams();
  const [{ data, isLoading }]: any = useFetch(`starships/${params.starshipId}`, [], getStarship);
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
      label: 'starship.manufacturer',
      value: 'manufacturer',
    },
    {
      label: 'starship.cargo_capacity',
      value: 'cargo_capacity',
    },
    {
      label: 'starship.max_atmosphering_speed',
      value: 'max_atmosphering_speed',
    },
  ];

  function getStarshipContent(starship) {
    return (
      <>
        <Global.TitleContainer>
          <S.Column>
            <Global.Title>{starship.name}</Global.Title>
          </S.Column>
          <S.Column>
            <Global.TitleDescription>
              <Translator>generical.edited_at</Translator>: {starship.edited}
            </Global.TitleDescription>
            <Global.TitleDescription>
              <Translator>generical.created_at</Translator>: {starship.created}
            </Global.TitleDescription>
          </S.Column>
        </Global.TitleContainer>
        <S.Flex>
          <S.BasicInfo>
            <Global.Subtitle>
              <Translator>generical.basic_informations</Translator>
            </Global.Subtitle>
            <S.LinksGrid>
              <S.BasicInfoContent>{getInformations(infomations, starship)}</S.BasicInfoContent>
              <S.MoviesColumn>
                <Global.Subsubtitle>
                  <Translator>pages.movies</Translator>
                </Global.Subsubtitle>
                {getList(starship.films, 'movies', 'title')}
              </S.MoviesColumn>
              <S.CharactersColumn>
                <Global.Subsubtitle>
                  <Translator>starship.pilots</Translator>
                </Global.Subsubtitle>
                {getList(starship.pilots, 'characters', 'name')}
              </S.CharactersColumn>
            </S.LinksGrid>
          </S.BasicInfo>
        </S.Flex>
      </>
    );
  }

  return isLoading ? <Loading /> : getStarshipContent(data);
}
