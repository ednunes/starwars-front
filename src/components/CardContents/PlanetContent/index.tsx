import Translator from '~/components/Translator';
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
      { value: 'rotation_period', label: 'planet.rotation_period' },
      { value: 'orbital_period', label: 'planet.orbital_period' },
      { value: 'diameter', label: 'planet.diameter' },
      { value: 'population', label: 'planet.population' },
    ];
    return infos.map((info: LabelInfo) => {
      return (
        <Card.Text key={`planet_${data['info.value']}_${info.value}`}>
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

export default PlanetContent;
