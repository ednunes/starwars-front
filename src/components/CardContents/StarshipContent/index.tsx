import { StarshipCard } from '~/utils/types';
import { formatUrl } from '~/utils/utils';
import * as Card from '../../LightsaberCard/styles';

function StarshipContent({ content }: { content: StarshipCard }) {
  const formatted_url = formatUrl('starships', content.url);

  function getInformations(data: StarshipCard) {
    const infos = [
      { value: 'model', label: 'Model' },
      { value: 'hyperdrive_rating', label: 'Hyperdrive rating' },
      { value: 'cost_in_credits', label: 'Cost in credits' },
      { value: 'length', label: 'Length' },
    ];
    return infos.map((info) => {
      return (
        <Card.Text key={`Starship_${data[info.value]}_${info.value}`}>
          <span>{info.label}</span>: {data[info.value]}
        </Card.Text>
      );
    });
  }

  return (
    <>
      <Card.Title>{content.name}</Card.Title>
      <Card.ContentContainer>
        <Card.Subtitle>INFORMATIONS</Card.Subtitle>
        {getInformations(content)}
      </Card.ContentContainer>

      <Card.LinkButton to={formatted_url}>Details</Card.LinkButton>
    </>
  );
}

export default StarshipContent;
