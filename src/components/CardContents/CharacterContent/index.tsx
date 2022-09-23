import { formatList, formatUrl } from '~/utils/utils';
import * as Card from '~/components/LightsaberCard/styles';
import PropTypes from 'prop-types';
import { Character } from '~/utils/types';

function CharacterContent({ character }: { character: Character }) {
  const formatted_url = formatUrl('characters', character.url);

  return (
    <>
      <Card.Title>{character.name}</Card.Title>
      <Card.ContentContainer>
        <Card.Subtitle>BIRTH</Card.Subtitle>
        <Card.Text key={`${character.url}_planet`}>
          <span>Planet</span>: {character.homeworld.name}
        </Card.Text>
        <Card.Text key={`${character.url}_birth_year`}>
          <span>DATE</span>: {character.birth_year}
        </Card.Text>

        <Card.Subtitle>FISIC DESCRIPTION</Card.Subtitle>
        <Card.Text key={`${character.url}_height`}>
          <span>HEIGHT</span>: {character.height}
        </Card.Text>
        <Card.Text key={`${character.url}_species`}>
          <span>Specie</span>: {formatList(character.species, 'Human')}
        </Card.Text>

        <Card.Subtitle>USED VEHICLES</Card.Subtitle>
        <Card.Text key={`${character.url}_vehicles`}>
          <span>Vehicles</span>: {formatList(character.vehicles, 'N/A')}
        </Card.Text>
      </Card.ContentContainer>

      <Card.LinkButton to={formatted_url}>Details</Card.LinkButton>
    </>
  );
}

CharacterContent.propTypes = {
  character: PropTypes.object,
};

export default CharacterContent;
