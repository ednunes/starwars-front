import Translator from '~/components/Translator';
import { VehicleCard } from '~/utils/types';
import { formatUrl } from '~/utils/utils';
import * as Card from '../../LightsaberCard/styles';

function VehicleContent({ content }: { content: VehicleCard }) {
  const formatted_url = formatUrl('vehicles', content.url);

  function getInformations(data: VehicleCard) {
    const infos = [
      { value: 'model', label: 'generical.model' },
      { value: 'length', label: 'generical.length' },
      { value: 'cost_in_credits', label: 'generical.cost_in_credits' },
    ];
    return infos.map((info) => {
      return (
        <Card.Text key={`planet_${data[info.value]}_${info.value}`}>
          <span>
            <Translator>{info.label}</Translator>
          </span>
          : <strong>{data[info.value]}</strong>
        </Card.Text>
      );
    });
  }

  return (
    <>
      <Card.Title>{content.name}</Card.Title>
      <Card.ContentContainer>{getInformations(content)}</Card.ContentContainer>

      <Card.LinkButton to={formatted_url}>
        <Translator>generical.details</Translator>
      </Card.LinkButton>
    </>
  );
}

export default VehicleContent;
