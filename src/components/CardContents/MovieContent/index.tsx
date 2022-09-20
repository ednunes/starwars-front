import { convertNumberToRomanNumeral, formatDate, formatUrl } from '~/utils/utils';
import * as Card from '../../LightsaberCard/styles';
import * as S from './styles';

function MovieContent({ content }) {
  const formatted_url = formatUrl('/movies', content.url);
  return (
    <>
      <Card.Title>{content.title}</Card.Title>
      <S.Episode>
        <span>Episode</span>: {convertNumberToRomanNumeral(content.episode_id)}
      </S.Episode>

      <Card.ContentContainer>
        <Card.Subtitle>INFORMATIONS</Card.Subtitle>
        <Card.Text key={`${content.title}_director`}>
          <span>Director</span>: {content.director}
        </Card.Text>
        <Card.Text key={`${content.title}_release_date`}>
          <span>RELEASE DATA</span>: {formatDate(content.release_date)}
        </Card.Text>
      </Card.ContentContainer>

      <Card.LinkButton to={formatted_url}>Details</Card.LinkButton>
    </>
  );
}

export default MovieContent;
