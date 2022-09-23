import { VehicleCard } from '~/utils/types';
import { formatUrl } from '~/utils/utils';
import * as Card from '../../LightsaberCard/styles';

function VehicleContent({ content }: { content: VehicleCard }) {
  const formatted_url = formatUrl('vehicles', content.url);

  function getInformations(data: VehicleCard) {
    const infos = [
      { value: 'model', label: 'Model' },
      { value: 'cost_in_credits', label: 'Cost in credits' },
      { value: 'length', label: 'Length' },
    ];
    return infos.map((info) => {
      return (
        <Card.Text key={`planet_${data[info.value]}_${info.value}`}>
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

export default VehicleContent;
