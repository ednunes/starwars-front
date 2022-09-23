import { useParams } from 'react-router-dom';
import * as Global from '~/components/StyledComponents/styles';
import { getCharacter } from '~/utils/requests';
import { Character } from '~/utils/types';
import useFetch from '~/utils/useFetch';
import { getInformations, getLink, getList } from '~/utils/utils';
import * as S from './styles';

export default function CharacterPage() {
  const params = useParams();
  const [{ data, isLoading }]: any = useFetch(`people/${params.characterId}`, [], getCharacter);
  const infomations = [
    {
      label: 'height',
      value: 'height',
    },
    {
      label: 'mass',
      value: 'mass',
    },
    {
      label: 'birth year',
      value: 'birth_year',
    },
    {
      label: 'gender',
      value: 'gender',
    },
    {
      label: 'eye color',
      value: 'eye_color',
    },
    {
      label: 'hair color',
      value: 'hair_color',
    },
    {
      label: 'skin color',
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
            <Global.TitleDescription>EDITED AT: {character.edited}</Global.TitleDescription>
            <Global.TitleDescription>CREATED AT: {character.created}</Global.TitleDescription>
          </S.Column>
        </Global.TitleContainer>
        <S.Grid>
          <S.Fisic>
            <Global.Subtitle>Fisic Informations</Global.Subtitle>
            <div>
              {getInformations(infomations, character)}
              {getLink(character.homeworld, 'homeworlds', 'Homeworld')}
            </div>
          </S.Fisic>
          <S.List>
            <Global.Subtitle>Film Appears</Global.Subtitle>
            {getList(character.films, 'movies', 'title')}
          </S.List>
          <S.VehiclesAndStarships>
            <Global.Subtitle>Used vehicles and starships</Global.Subtitle>
            <S.LinksGrid>
              <S.VehiclesColumn>
                <Global.Subsubtitle>Vehicles</Global.Subsubtitle>
                <S.Column>{getList(character.vehicles, 'vehicles')}</S.Column>
              </S.VehiclesColumn>
              <S.StarshipsColumn>
                <Global.Subsubtitle>Starships</Global.Subsubtitle>
                <S.Column>{getList(character.starships, 'starships')}</S.Column>
              </S.StarshipsColumn>
            </S.LinksGrid>
          </S.VehiclesAndStarships>
        </S.Grid>
      </>
    );
  }

  return isLoading ? <h1>Loading...</h1> : getCharacterContent(data);
}
