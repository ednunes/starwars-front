import { useParams } from 'react-router-dom';
import * as Global from '~/components/StyledComponents/styles';
import useFetch from '~/hooks/useFetch';
import Loading from '~/components/Loading';
import Translator from '~/utils/Translator';
import * as S from './styles';

export default function GenericDetailsPage({
  resource,
  resourceId,
  getContent,
  formatData,
}: {
  resource: string;
  resourceId: string;
  getContent: (data: any) => JSX.Element;
  formatData: (planet: any) => Promise<any>;
}) {
  const params = useParams();
  const [{ data, isLoading }]: any = useFetch(`${resource}/${params[resourceId]}`, [], formatData);

  return isLoading ? (
    <Global.CentralizedComponent>
      <Loading />
    </Global.CentralizedComponent>
  ) : (
    <>
      <Global.TitleContainer>
        <S.Column>
          <Global.Title>{data.name}</Global.Title>
        </S.Column>
        <S.Column>
          <Global.TitleDescription>
            <Translator>generical.edited_at</Translator>: {data.edited}
          </Global.TitleDescription>
          <Global.TitleDescription>
            <Translator>generical.created_at</Translator>: {data.created}
          </Global.TitleDescription>
        </S.Column>
      </Global.TitleContainer>
      {getContent(data)}
    </>
  );
}
