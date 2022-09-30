import { useParams } from 'react-router-dom';
import * as Global from '~/components/StyledComponents/styles';
import { getCharacter } from '~/utils/requests';
import { Character } from '~/utils/types';
import useFetch from '~/hooks/useFetch';
import { getInformations, getLink, getList } from '~/utils/utils';
import * as S from './styles';
import Translator from '~/utils/Translator';
import Loading from '~/components/Loading';

export default function CharacterPage() {
  const params = useParams();
  const [{ data, isLoading }]: any = useFetch(`people/${params.characterId}`, [], getCharacter);
  const infomations = [
    {
      label: 'generical.height',
      value: 'height',
    },
    {
      label: 'character.mass',
      value: 'mass',
    },
    {
      label: 'character.birth_year',
      value: 'birth_year',
    },
    {
      label: 'character.gender',
      value: 'gender',
    },
    {
      label: 'character.eye_color',
      value: 'eye_color',
    },
    {
      label: 'character.hair_color',
      value: 'hair_color',
    },
    {
      label: 'character.skin_color',
      value: 'skin_color',
    },
  ];

  function getCharacterContent(character: Character) {
    return (
      <>
        <Global.TitleContainer>
          <S.Column>
            <Global.Title>{character.name}</Global.Title>
          </S.Column>
          <S.Column>
            <Global.TitleDescription>
              <Translator>generical.edited_at</Translator>: {character.edited}
            </Global.TitleDescription>
            <Global.TitleDescription>
              <Translator>generical.created_at</Translator>: {character.created}
            </Global.TitleDescription>
          </S.Column>
        </Global.TitleContainer>
        <S.Grid>
          <S.Fisic>
            <Global.Subtitle>
              <Translator>character.fisic_description</Translator>
            </Global.Subtitle>
            <div>
              {getInformations(infomations, character)}
              {getLink(character.homeworld, 'homeworlds', 'character.homeworld')}
            </div>
          </S.Fisic>
          <S.List>
            <Global.Subtitle>
              <Translator>character.film_appears</Translator>
            </Global.Subtitle>
            {getList(character.films, 'movies', 'title')}
          </S.List>
          <S.VehiclesAndStarships>
            <Global.Subtitle>
              <Translator>character.used_vehicles_and_starships</Translator>
            </Global.Subtitle>
            <S.LinksGrid>
              <S.VehiclesColumn>
                <Global.Subsubtitle>
                  <Translator>pages.vehicles</Translator>
                </Global.Subsubtitle>
                <S.Column>{getList(character.vehicles, 'vehicles')}</S.Column>
              </S.VehiclesColumn>
              <S.StarshipsColumn>
                <Global.Subsubtitle>
                  <Translator>pages.starships</Translator>
                </Global.Subsubtitle>
                <S.Column>{getList(character.starships, 'starships')}</S.Column>
              </S.StarshipsColumn>
            </S.LinksGrid>
          </S.VehiclesAndStarships>
        </S.Grid>
      </>
    );
  }

  return isLoading ? <Loading /> : getCharacterContent(data);
}
