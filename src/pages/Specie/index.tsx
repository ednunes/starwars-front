import { useParams } from 'react-router-dom';
import * as Global from '~/components/StyledComponents/styles';
import { getSpecie } from '~/utils/requests';
import useFetch from '~/hooks/useFetch';
import * as S from './styles';
import { getInformations, getList } from '~/utils/utils';
import Translator from '~/utils/Translator';
import Loading from '~/components/Loading';

export default function SpeciePage() {
  const params = useParams();
  const [{ data, isLoading }]: any = useFetch(`species/${params.specieId}`, [], getSpecie);
  const infomations = [
    {
      label: 'specie.classification',
      value: 'classification',
    },
    {
      label: 'specie.designation',
      value: 'designation',
    },
    {
      label: 'specie.average_height',
      value: 'average_height',
    },
    {
      label: 'specie.average_lifespan',
      value: 'average_lifespan',
    },
    {
      label: 'specie.language',
      value: 'language',
    },
    {
      label: 'specie.skin_colors',
      value: 'skin_colors',
    },
    {
      label: 'specie.hair_colors',
      value: 'hair_colors',
    },
    {
      label: 'specie.eye_colors',
      value: 'eye_colors',
    },
  ];

  function getSpecieContent(specie) {
    return (
      <>
        <Global.TitleContainer>
          <S.Column>
            <Global.Title>{specie.name}</Global.Title>
          </S.Column>
          <S.Column>
            <Global.TitleDescription>
              <Translator>generical.edited_at</Translator>: {specie.edited}
            </Global.TitleDescription>
            <Global.TitleDescription>
              <Translator>generical.created_at</Translator>: {specie.created}
            </Global.TitleDescription>
          </S.Column>
        </Global.TitleContainer>
        <S.Flex>
          <S.BasicInfo>
            <Global.Subtitle>
              <Translator>generical.basic_informations</Translator>
            </Global.Subtitle>
            <S.LinksGrid>
              <S.BasicInfoContent>{getInformations(infomations, specie)}</S.BasicInfoContent>
              <S.MoviesColumn>
                <Global.Subsubtitle>
                  <Translator>pages.movies</Translator>
                </Global.Subsubtitle>
                {getList(specie.films, 'movies', 'title')}
              </S.MoviesColumn>
              <S.CharactersColumn>
                <Global.Subsubtitle>
                  <Translator>pages.character</Translator>
                </Global.Subsubtitle>
                {getList(specie.people, 'characters', 'name')}
              </S.CharactersColumn>
            </S.LinksGrid>
          </S.BasicInfo>
        </S.Flex>
      </>
    );
  }

  return isLoading ? <Loading /> : getSpecieContent(data);
}
