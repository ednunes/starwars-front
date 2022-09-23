import SpecieContent from '~/components/CardContents/SpecieContent';
import CardList from '~/components/CardList';
import { getSpecieList } from '~/utils/requests';
import { SpecieCard } from '~/utils/types';

function SpeciesPage() {
  function getCard(content: SpecieCard) {
    return <SpecieContent content={content} />;
  }

  return (
    <CardList text='species' getCard={getCard} formatData={getSpecieList} resource='species' />
  );
}

export default SpeciesPage;
