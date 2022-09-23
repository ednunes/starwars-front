import CharacterContent from '~/components/CardContents/CharacterContent';
import CardList from '~/components/CardList';
import { getCharacterList } from '~/utils/requests';
import { Character } from '~/utils/types';

function CharactersPage() {
  function getCard(character: Character) {
    return <CharacterContent character={character} />;
  }
  return (
    <CardList text='characters' getCard={getCard} formatData={getCharacterList} resource='people' />
  );
}

export default CharactersPage;
