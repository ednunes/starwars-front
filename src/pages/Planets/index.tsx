import PlanetContent from '~/components/CardContents/PlanetContent';
import GenericListPage from '~/pages/GenericListPage';
import { getPlanetList } from '~/utils/requests';
import { PlanetCard } from '~/utils/types';

function PlanetsPage() {
  function getCard(content: PlanetCard) {
    return <PlanetContent content={content} />;
  }

  return (
    <GenericListPage
      text='pages.planets'
      getCard={getCard}
      formatData={getPlanetList}
      resource='planets'
    />
  );
}

export default PlanetsPage;
