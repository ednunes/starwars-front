import SpecieContent from '~/components/CardContents/SpecieContent';
import GenericListPage from '~/pages/GenericListPage';
import { getSpecieList } from '~/utils/requests';
import { SpecieCard } from '~/utils/types';

function SpeciesPage() {
  function getCard(content: SpecieCard) {
    return <SpecieContent content={content} />;
  }

  return (
    <GenericListPage
      text='pages.species'
      getCard={getCard}
      formatData={getSpecieList}
      resource='species'
    />
  );
}

export default SpeciesPage;
