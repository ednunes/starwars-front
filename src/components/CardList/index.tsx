import { useEffect, useState } from 'react';
import useFetch from '~/hooks/useFetch';
import Button from '../Button';
import LightsaberCard from '../LightsaberCard';
import * as Global from '~/components/StyledComponents/styles';
import * as S from './styles';
import Input from '../Input';
import Loading from '../Loading';
import Translator from '~/utils/Translator';

export default function CardsList({
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
  const [{ data, isLoading, url }, setUrl]: any = useFetch(resource, [], formatData);
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

  return (
    <>
      <Global.TitleContainer>
        <Global.Title>
          <Translator>{text}</Translator>
        </Global.Title>
        <Input setFilter={setFilter} resource={resource} />
      </Global.TitleContainer>
      {isLoading && !url.includes('page=') ? (
        <Loading />
      ) : (
        <>
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
      )}
    </>
  );
}
