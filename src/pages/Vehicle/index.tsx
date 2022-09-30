import { useParams } from 'react-router-dom';
import * as Global from '~/components/StyledComponents/styles';
import { getVehicle } from '~/utils/requests';
import useFetch from '~/hooks/useFetch';
import * as S from './styles';
import { getInformations, getList } from '~/utils/utils';

export default function VehiclePage() {
  const params = useParams();
  const [{ data, isLoading }]: any = useFetch(`vehicles/${params.vehicleId}`, [], getVehicle);
  const infomations = [
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
      label: 'Cargo capacity',
      value: 'cargo_capacity',
    },
    {
      label: 'Vehicle class',
      value: 'vehicle_class',
    },
    {
      label: 'Max atmosphering speed',
      value: 'max_atmosphering_speed',
    },
    {
      label: 'Manufacturer',
      value: 'manufacturer',
    },
    {
      label: 'Cost in credits',
      value: 'cost_in_credits',
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
            <Global.TitleDescription>EDITED AT: {vehicle.edited}</Global.TitleDescription>
            <Global.TitleDescription>CREATED AT: {vehicle.created}</Global.TitleDescription>
          </S.Column>
        </Global.TitleContainer>
        <S.Flex>
          <S.BasicInfo>
            <Global.Subtitle>Basic Informations</Global.Subtitle>
            <S.LinksGrid>
              <S.BasicInfoContent>{getInformations(infomations, vehicle)}</S.BasicInfoContent>
              <S.MoviesColumn>
                <Global.Subsubtitle>Movies</Global.Subsubtitle>
                {getList(vehicle.films, 'movies', 'title')}
              </S.MoviesColumn>
              <S.CharactersColumn>
                <Global.Subsubtitle>Pilots</Global.Subsubtitle>
                {getList(vehicle.pilots, 'characters', 'name')}
              </S.CharactersColumn>
            </S.LinksGrid>
          </S.BasicInfo>
        </S.Flex>
      </>
    );
  }

  return isLoading ? <h1>Loading...</h1> : getVehicleContent(data);
}
