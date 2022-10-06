import * as Global from '~/components/StyledComponents/styles';
import { getVehicle } from '~/utils/requests';
import { getInformations, getList } from '~/utils/utils';
import Translator from '~/components/Translator';
import GenericDetailsPage from '../GenericDetailsPage';
import { Vehicle, VehicleRequest } from './types';
import MovieChartCard from '~/components/MovieChartCard';

export default function VehiclePage() {
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

  function getVehicleContent(vehicle: Vehicle) {
    return (
      <Global.Flex>
        <Global.BasicCard>
          <Global.Subtitle>
            <Translator>generical.basic_informations</Translator>
          </Global.Subtitle>
          <Global.BasicCardContent>{getInformations(infomations, vehicle)}</Global.BasicCardContent>
          <Global.Subtitle>
            <Translator>starship.pilots</Translator>
          </Global.Subtitle>
          {getList(vehicle.pilots, 'characters', 'name')}
        </Global.BasicCard>
        <MovieChartCard movies={vehicle.films} />
      </Global.Flex>
    );
  }

  return (
    <GenericDetailsPage
      resource='vehicles'
      resourceId='vehicleId'
      getContent={(data) => getVehicleContent(data)}
      formatData={(vehicles: VehicleRequest) => getVehicle(vehicles)}
    />
  );
}
