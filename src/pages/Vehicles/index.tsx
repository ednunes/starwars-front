import VehicleContent from '~/components/CardContents/VehicleContent';
import GenericListPage from '~/pages/GenericListPage';
import { getVehicleList } from '~/utils/requests';
import { VehicleCard } from '~/utils/types';

function VehiclesPage() {
  function getCard(content: VehicleCard) {
    return <VehicleContent content={content} />;
  }

  return (
    <GenericListPage
      text='pages.vehicles'
      getCard={getCard}
      formatData={getVehicleList}
      resource='vehicles'
    />
  );
}

export default VehiclesPage;
