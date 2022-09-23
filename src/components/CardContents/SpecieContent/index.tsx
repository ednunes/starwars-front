import { SpecieCard } from '~/utils/types';
import { formatUrl } from '~/utils/utils';
import * as Card from '../../LightsaberCard/styles';

function SpecieContent({ content }: { content: SpecieCard }) {
  const formatted_url = formatUrl('species', content.url);

  function getInformations(data: SpecieCard) {
    const infos = [
      { value: 'name', label: 'Name' },
      { value: 'language', label: 'Language' },
      { value: 'designation', label: 'Designation' },
      { value: 'average_height', label: 'Average height' },
      { value: 'classification', label: 'Classification' },
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

export default SpecieContent;
