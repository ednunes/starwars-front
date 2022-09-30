import CharacterContent from '~/components/CardContents/CharacterContent';
import CardList from '~/components/CardList';
import { getCharacterList } from '~/utils/requests';
import { CharacterCard } from '~/utils/types';

function CharactersPage() {
  function getCard(character: CharacterCard) {
    return <CharacterContent character={character} />;
  }
  return (
    <CardList
      text='pages.characters'
      getCard={getCard}
      formatData={getCharacterList}
      resource='people'
    />
  );
}

export default CharactersPage;
