import Translator from '~/components/Translator';
import { StarshipCard } from '~/utils/types';
import { formatUrl } from '~/utils/utils';
import * as Card from '../../LightsaberCard/styles';

function StarshipContent({ content }: { content: StarshipCard }) {
  const formatted_url = formatUrl('starships', content.url);

  function getInformations(data: StarshipCard) {
    const infos = [
      { value: 'model', label: 'generical.model' },
      { value: 'hyperdrive_rating', label: 'starship.hyperdrive_rating' },
      { value: 'cost_in_credits', label: 'generical.cost_in_credits' },
      { value: 'length', label: 'generical.length' },
    ];
    return infos.map((info) => {
      return (
        <Card.Text key={`Starship_${data[info.value]}_${info.value}`}>
          <span>
            <Translator>{info.label}</Translator>
          </span>
          : {data[info.value]}
        </Card.Text>
      );
    });
  }

  return (
    <>
      <Card.Title>{content.name}</Card.Title>
      <Card.ContentContainer>
        <Card.Subtitle>
          <Translator>generical.informations</Translator>
        </Card.Subtitle>
        {getInformations(content)}
      </Card.ContentContainer>

      <Card.LinkButton to={formatted_url}>
        <Translator>generical.details</Translator>
      </Card.LinkButton>
    </>
  );
}

export default StarshipContent;
