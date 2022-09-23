import StarshipContent from '~/components/CardContents/StarshipContent';
import CardList from '~/components/CardList';
import { getStarshipList } from '~/utils/requests';
import { StarshipCard } from '~/utils/types';

function StarshipsPage() {
  function getCard(content: StarshipCard) {
    return <StarshipContent content={content} />;
  }

  return (
    <CardList
      text='starships'
      getCard={getCard}
      formatData={getStarshipList}
      resource='starships'
    />
  );
}

export default StarshipsPage;
