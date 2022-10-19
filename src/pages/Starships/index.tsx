import StarshipContent from '~/components/CardContents/StarshipContent';
import GenericListPage from '~/pages/GenericListPage';
import { getStarshipList } from '~/utils/requests';
import { StarshipCard } from '~/utils/types';

function StarshipsPage() {
  function getCard(content: StarshipCard) {
    return <StarshipContent content={content} />;
  }

  return (
    <GenericListPage
      text='pages.starships'
      getCard={getCard}
      formatData={getStarshipList}
      resource='starships'
    />
  );
}

export default StarshipsPage;
