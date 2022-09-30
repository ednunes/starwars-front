import { useParams } from 'react-router-dom';
import * as Global from '~/components/StyledComponents/styles';
import { getSpecie } from '~/utils/requests';
import useFetch from '~/hooks/useFetch';
import * as S from './styles';
import { getInformations, getList } from '~/utils/utils';

export default function SpeciePage() {
  const params = useParams();
  const [{ data, isLoading }]: any = useFetch(`species/${params.specieId}`, [], getSpecie);
  const infomations = [
    {
      label: 'Classification',
      value: 'classification',
    },
    {
      label: 'Designation',
      value: 'designation',
    },
    {
      label: 'Average height',
      value: 'average_height',
    },
    {
      label: 'Average lifespan',
      value: 'average_lifespan',
    },
    {
      label: 'Language',
      value: 'language',
    },
    {
      label: 'Skin colors',
      value: 'skin_colors',
    },
    {
      label: 'Hair colors',
      value: 'hair_colors',
    },
    {
      label: 'Eye colors',
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
            <Global.TitleDescription>EDITED AT: {specie.edited}</Global.TitleDescription>
            <Global.TitleDescription>CREATED AT: {specie.created}</Global.TitleDescription>
          </S.Column>
        </Global.TitleContainer>
        <S.Flex>
          <S.BasicInfo>
            <Global.Subtitle>Basic Informations</Global.Subtitle>
            <S.LinksGrid>
              <S.BasicInfoContent>{getInformations(infomations, specie)}</S.BasicInfoContent>
              <S.MoviesColumn>
                <Global.Subsubtitle>Movies</Global.Subsubtitle>
                {getList(specie.films, 'movies', 'title')}
              </S.MoviesColumn>
              <S.CharactersColumn>
                <Global.Subsubtitle>People</Global.Subsubtitle>
                {getList(specie.people, 'characters', 'name')}
              </S.CharactersColumn>
            </S.LinksGrid>
          </S.BasicInfo>
        </S.Flex>
      </>
    );
  }

  return isLoading ? <h1>Loading...</h1> : getSpecieContent(data);
}
