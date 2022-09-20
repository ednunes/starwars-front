import { formatHeight, formatList, formatUrl } from '~/utils/utils';
import * as Card from '../../LightsaberCard/styles';

function CharacterContent({ content }) {
  const formatted_url = formatUrl('/movies', content.url);

  return (
    <>
      <Card.Title>{content.name}</Card.Title>

      <Card.ContentContainer>
        <Card.Subtitle>BIRTH</Card.Subtitle>
        <Card.Text key={`${content.url}_planet`}>
          <span>Planet</span>: {content.homeworld}
        </Card.Text>
        <Card.Text key={`${content.url}_birth_year`}>
          <span>DATE</span>: {content.birth_year}
        </Card.Text>

        <Card.Subtitle>FISIC DESCRIPTION</Card.Subtitle>
        <Card.Text key={`${content.url}_height`}>
          <span>HEIGHT</span>: {formatHeight(content.height)}
        </Card.Text>
        <Card.Text key={`${content.url}_species`}>
          <span>Species</span>: {formatList(content.species, 'Human')}
        </Card.Text>

        <Card.Subtitle>USED VEHICLES</Card.Subtitle>
        <Card.Text key={`${content.url}_vehicles`}>
          <span>Vehicles</span>: {formatList(content.vehicles, 'N/A')}
        </Card.Text>
      </Card.ContentContainer>

      <Card.LinkButton to={formatted_url}>Details</Card.LinkButton>
    </>
  );
}

export default CharacterContent;
