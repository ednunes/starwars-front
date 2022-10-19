import { useEffect, useState } from 'react';
import useFetch from '~/hooks/useFetch';
import Button from '../../components/Button';
import LightsaberCard from '../../components/LightsaberCard';
import * as Global from '~/components/StyledComponents/styles';
import * as S from './styles';
import FilterInput from '../../components/FilterInput';
import Loading from '../../components/Loading';
import Translator from '~/components/Translator';
import ErrorMessage from '../ErrorMessage';

export default function GenericListPage({
  getCard,
  formatData,
  resource = 'people',
  text,
}: {
  getCard: (item: any) => JSX.Element;
  formatData: (data: any) => void;
  resource: string;
  text: string;
}) {
  const [{ data, isLoading, isError, url }, setUrl]: any = useFetch(resource, [], formatData);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setUrl(`${resource}?page=${page}`);
  }, [page]);

  function loadMore() {
    setPage((page) => page + 1);
  }

  function setFilter(resource: string, value: string) {
    const filter_url = `${resource}?search=${value}`;
    setUrl(filter_url);
  }

  function getPage() {
    return (
      <>
        <Global.TitleContainer>
          <Global.Title>
            <Translator>{text}</Translator>
          </Global.Title>
          <FilterInput setFilter={setFilter} resource={resource} />
        </Global.TitleContainer>

        <S.Grid>
          {(data.results || []).map((item: any) => {
            return item?.url ? <LightsaberCard key={item.url} content={getCard(item)} /> : null;
          })}
        </S.Grid>

        <S.CentralizedComponent>
          {isLoading && url.includes('page=') ? (
            <Loading />
          ) : (
            !data.next || (
              <Button
                handleClick={() => loadMore()}
                text={<Translator>generical.load_more</Translator>}
              />
            )
          )}
        </S.CentralizedComponent>
      </>
    );
  }

  return (
    <>
      {isLoading && !url.includes('page=') ? <Loading /> : isError ? <ErrorMessage /> : getPage()}
    </>
  );
}
