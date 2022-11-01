import { memo } from 'react';
import { Lightsaber } from '../Lightsaber';
import * as S from './styles';

function LightsaberCard({ content }: { content: JSX.Element }) {
  return (
    <S.LightsaberCard>
      <Lightsaber />
      <S.Card>{content}</S.Card>
      <Lightsaber />
    </S.LightsaberCard>
  );
}

function areEqual(prevProps: any, nextProps: any) {
  return prevProps.content.url === nextProps.content.url;
}

export default memo(LightsaberCard, areEqual);
