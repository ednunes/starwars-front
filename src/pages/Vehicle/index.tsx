import { useParams } from 'react-router-dom';
import * as Global from '~/components/StyledComponents/styles';
import { getVehicle } from '~/utils/requests';
import useFetch from '~/hooks/useFetch';
import * as S from './styles';
import { getInformations, getList } from '~/utils/utils';
import Loading from '~/components/Loading';
import Translator from '~/utils/Translator';

export default function VehiclePage() {
  const params = useParams();
  const [{ data, isLoading }]: any = useFetch(`vehicles/${params.vehicleId}`, [], getVehicle);
  const infomations = [
    {
      label: 'vehicle.vehicle_class',
      value: 'vehicle_class',
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

  function getVehicleContent(vehicle) {
    return (
      <>
        <Global.TitleContainer>
          <S.Column>
            <Global.Title>{vehicle.name}</Global.Title>
          </S.Column>
          <S.Column>
            <Global.TitleDescription>
              <Translator>generical.edited_at</Translator>: {vehicle.edited}
            </Global.TitleDescription>
            <Global.TitleDescription>
              <Translator>generical.created_at</Translator>: {vehicle.created}
            </Global.TitleDescription>
          </S.Column>
        </Global.TitleContainer>
        <S.Flex>
          <S.BasicInfo>
            <Global.Subtitle>
              <Translator>generical.basic_informations</Translator>
            </Global.Subtitle>
            <S.LinksGrid>
              <S.BasicInfoContent>{getInformations(infomations, vehicle)}</S.BasicInfoContent>
              <S.MoviesColumn>
                <Global.Subsubtitle>
                  <Translator>pages.movies</Translator>
                </Global.Subsubtitle>
                {getList(vehicle.films, 'movies', 'title')}
              </S.MoviesColumn>
              <S.CharactersColumn>
                <Global.Subsubtitle>
                  <Translator>starship.pilots</Translator>
                </Global.Subsubtitle>
                {getList(vehicle.pilots, 'characters', 'name')}
              </S.CharactersColumn>
            </S.LinksGrid>
          </S.BasicInfo>
        </S.Flex>
      </>
    );
  }

  return isLoading ? <Loading /> : getVehicleContent(data);
}
