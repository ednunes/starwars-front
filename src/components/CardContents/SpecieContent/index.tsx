import Translator from '~/components/Translator';
import { SpecieCard } from '~/utils/types';
import { formatUrl } from '~/utils/utils';
import * as Card from '../../LightsaberCard/styles';

function SpecieContent({ content }: { content: SpecieCard }) {
  const formatted_url = formatUrl('species', content.url);

  function getInformations(data: SpecieCard) {
    const infos = [
      { value: 'name', label: 'specie.name' },
      { value: 'language', label: 'specie.language' },
      { value: 'designation', label: 'specie.designation' },
      { value: 'average_height', label: 'specie.average_height' },
      { value: 'classification', label: 'specie.classification' },
    ];
    return infos.map((info) => {
      return (
        <Card.Text key={`planet_${data[info.value]}_${info.value}`}>
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

export default SpecieContent;
