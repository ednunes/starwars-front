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
  const [page, setPage] = useState(1);
  const [{ data, isLoading, isError, url }, setUrl]: any = useFetch(resource, [], formatData);
  const loadingAllPage = isLoading && !url.includes('page=') && !url.includes('?search=');

  useEffect(() => {
    if (page !== 1) {
      setUrl(`${resource}?page=${page}`);
    }
  }, [page, resource, setUrl]);

  function loadMore() {
    setPage((page) => page + 1);
  }

  function setFilter(resource: string, value: string) {
    const filter_url = `${resource}?search=${value}`;
    setUrl(filter_url);
  }

  function getPageContent() {
    return (
      <>
        {isLoading && url.includes('?search=') ? (
          <Loading />
        ) : (
          <S.Grid>
            {(data.results || []).map((item: any) => {
              return <LightsaberCard key={item.url} content={getCard(item)} />;
            })}

            {data.results?.length === 0 && <ErrorMessage message='generical.error_not_found' />}
          </S.Grid>
        )}

        <S.CentralizedComponent>
          {isLoading && url.includes('page=') ? (
            <Loading />
          ) : (
            !isLoading &&
            (!data.next || (
              <Button
                handleClick={() => loadMore()}
                text={<Translator>generical.load_more</Translator>}
              />
            ))
          )}
        </S.CentralizedComponent>
      </>
    );
  }

  return loadingAllPage ? (
    <Loading />
  ) : (
    <>
      <Global.TitleContainer>
        <Global.Title>
          <Translator>{text}</Translator>
        </Global.Title>
        {isError || <FilterInput setFilter={setFilter} resource={resource} />}
      </Global.TitleContainer>

      {isError ? <ErrorMessage message='generical.error_message' /> : getPageContent()}
    </>
  );
}
