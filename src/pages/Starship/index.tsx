import { useParams } from 'react-router-dom';
import * as Global from '~/components/StyledComponents/styles';
import { getStarship } from '~/utils/requests';
import useFetch from '~/hooks/useFetch';
import * as S from './styles';
// import { data, isLoading } from '../../utils/data';
import { getInformations, getList } from '~/utils/utils';

export default function StarshipPage() {
  const params = useParams();
  const [{ data, isLoading }]: any = useFetch(`starships/${params.starshipId}`, [], getStarship);
  const infomations = [
    {
      label: 'MGLT',
      value: 'MGLT',
    },
    {
      label: 'Consumables',
      value: 'consumables',
    },
    {
      label: 'Hyperdrive rating',
      value: 'hyperdrive_rating',
    },
    {
      label: 'Length',
      value: 'length',
    },
    {
      label: 'Crew',
      value: 'crew',
    },
    {
      label: 'Passengers',
      value: 'passengers',
    },
    {
      label: 'Model',
      value: 'model',
    },
    {
      label: 'Cost in credits',
      value: 'cost_in_credits',
    },
    {
      label: 'Manufacturer',
      value: 'manufacturer',
    },
    {
      label: 'Cargo capacity',
      value: 'cargo_capacity',
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
            <Global.TitleDescription>EDITED AT: {starship.edited}</Global.TitleDescription>
            <Global.TitleDescription>CREATED AT: {starship.created}</Global.TitleDescription>
          </S.Column>
        </Global.TitleContainer>
        <S.Flex>
          <S.BasicInfo>
            <Global.Subtitle>Basic Informations</Global.Subtitle>
            <S.LinksGrid>
              <S.BasicInfoContent>{getInformations(infomations, starship)}</S.BasicInfoContent>
              <S.MoviesColumn>
                <Global.Subsubtitle>Movies</Global.Subsubtitle>
                {getList(starship.films, 'movies', 'title')}
              </S.MoviesColumn>
              <S.CharactersColumn>
                <Global.Subsubtitle>Pilots</Global.Subsubtitle>
                {getList(starship.pilots, 'characters', 'name')}
              </S.CharactersColumn>
            </S.LinksGrid>
          </S.BasicInfo>
        </S.Flex>
      </>
    );
  }

  return isLoading ? <h1>Loading...</h1> : getStarshipContent(data);
}
