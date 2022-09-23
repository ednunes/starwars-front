import { PlanetCard } from '~/utils/types';
import { formatUrl } from '~/utils/utils';
import * as Card from '../../LightsaberCard/styles';

interface LabelInfo {
  value: string;
  label: string;
}

function PlanetContent({ content }: { content: PlanetCard }) {
  const formatted_url = formatUrl('planets', content.url);

  function getInformations(data: PlanetCard) {
    const infos = [
      { value: 'rotation_period', label: 'Rotation period' },
      { value: 'orbital_period', label: 'Orbital period' },
      { value: 'diameter', label: 'Diameter' },
      { value: 'population', label: 'Population' },
    ];
    return infos.map((info: LabelInfo) => {
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

export default PlanetContent;
