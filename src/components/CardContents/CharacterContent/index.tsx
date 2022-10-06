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
          : {character.homeworld.name}
        </Card.Text>
        <Card.Text key={`${character.url}_birth_year`}>
          <span>
            <Translator>character.date</Translator>
          </span>
          : {character.birth_year}
        </Card.Text>

        <Card.Subtitle>
          <Translator>character.fisic_description</Translator>
        </Card.Subtitle>
        <Card.Text key={`${character.url}_height`}>
          <span>
            <Translator>generical.height</Translator>
          </span>
          : {character.height}
        </Card.Text>
        <Card.Text key={`${character.url}_species`}>
          <span>
            <Translator>pages.specie</Translator>
          </span>
          : {formatList(character.species, 'Human')}
        </Card.Text>

        <Card.Subtitle>
          <Translator>character.used_vehicles</Translator>
        </Card.Subtitle>
        <Card.Text key={`${character.url}_vehicles`}>
          <span>
            <Translator>pages.vehicles</Translator>
          </span>
          : {formatList(character.vehicles, 'N/A')}
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
