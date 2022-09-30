import VehicleContent from '~/components/CardContents/VehicleContent';
import CardList from '~/components/CardList';
import { getVehicleList } from '~/utils/requests';
import { VehicleCard } from '~/utils/types';

function VehiclesPage() {
  function getCard(content: VehicleCard) {
    return <VehicleContent content={content} />;
  }

  return (
    <CardList
      text='pages.vehicles'
      getCard={getCard}
      formatData={getVehicleList}
      resource='vehicles'
    />
  );
}

export default VehiclesPage;
