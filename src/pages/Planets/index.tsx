import PlanetContent from '~/components/CardContents/PlanetContent';
import CardList from '~/components/CardList';
import { getPlanetList } from '~/utils/requests';
import { PlanetCard } from '~/utils/types';

function PlanetsPage() {
  function getCard(content: PlanetCard) {
    return <PlanetContent content={content} />;
  }

  return (
    <CardList text='planets' getCard={getCard} formatData={getPlanetList} resource='planets' />
  );
}

export default PlanetsPage;
