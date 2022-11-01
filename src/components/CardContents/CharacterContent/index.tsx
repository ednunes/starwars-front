import { formatList, formatUrl } from '~/utils/utils';
import * as Card from '~/components/LightsaberCard/styles';
import PropTypes from 'prop-types';
import { CharacterCard } from '~/utils/types';
import Translator from '~/components/Translator';

function CharacterContent({ character }: { character: CharacterCard }) {
  const formatted_url = formatUrl('characters', character.url);

  return (
    <>
      <Card.Title>{character.name}</Card.Title>
      <Card.ContentContainer>
        <Card.Subtitle>
          <Translator>character.birth</Translator>
        </Card.Subtitle>
        <Card.Text key={`${character.url}_planet`}>
          <span>
            <Translator>pages.planet</Translator>
          </span>
          : <strong>{character.homeworld.name}</strong>
        </Card.Text>
        <Card.Text key={`${character.url}_birth_year`}>
          <span>
            <Translator>character.date</Translator>
          </span>
          : <strong>{character.birth_year}</strong>
        </Card.Text>

        <Card.Subtitle>
          <Translator>character.fisic_description</Translator>
        </Card.Subtitle>
        <Card.Text key={`${character.url}_height`}>
          <span>
            <Translator>generical.height</Translator>
          </span>
          : <strong>{character.height}</strong>
        </Card.Text>
        <Card.Text key={`${character.url}_species`}>
          <span>
            <Translator>pages.specie</Translator>
          </span>
          : <strong>{formatList(character.species, 'Human')}</strong>
        </Card.Text>

        <Card.Subtitle>
          <Translator>character.used_vehicles</Translator>
        </Card.Subtitle>
        <Card.Text key={`${character.url}_vehicles`}>
          <span>
            <Translator>pages.vehicles</Translator>
          </span>
          : <strong>{formatList(character.vehicles, 'N/A')}</strong>
        </Card.Text>
      </Card.ContentContainer>

      <Card.LinkButton to={formatted_url}>
        <Translator>generical.details</Translator>
      </Card.LinkButton>
    </>
  );
}

CharacterContent.propTypes = {
  character: PropTypes.object,
};

export default CharacterContent;
