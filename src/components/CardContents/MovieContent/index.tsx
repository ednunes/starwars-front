import { convertNumberToRomanNumeral, formatUrl } from '~/utils/utils';
import * as Card from '../../LightsaberCard/styles';
import * as S from './styles';
import { MovieCard } from '~/utils/types';
import Translator from '~/utils/Translator';

function MovieContent({ content }: { content: MovieCard }) {
  const formatted_url = formatUrl('movies', content.url);
  return (
    <>
      <Card.Title>{content.title}</Card.Title>
      <S.Episode>
        <span>
          <Translator>movie.episode</Translator>
        </span>{' '}
        {convertNumberToRomanNumeral(content.episode_id)}
      </S.Episode>

      <Card.ContentContainer>
        <Card.Subtitle>
          <Translator>generical.informations</Translator>
        </Card.Subtitle>
        <Card.Text key={`${content.title}_director`}>
          <span>
            <Translator>movie.director</Translator>
          </span>
          : {content.director}
        </Card.Text>
        <Card.Text key={`${content.title}_release_date`}>
          <span>
            <Translator>movie.release_date</Translator>
          </span>
          : {content.release_date}
        </Card.Text>
      </Card.ContentContainer>

      <Card.LinkButton to={formatted_url}>
        <Translator>generical.details</Translator>
      </Card.LinkButton>
    </>
  );
}

export default MovieContent;
