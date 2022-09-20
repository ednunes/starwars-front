import { useTheme } from 'styled-components';
import * as S from './styles';

export function Lightsaber() {
  const theme = useTheme();
  return (
    <S.Lightsaber>
      <S.Blade />
      {theme.side === 'light' ? <S.HiltLight /> : <S.HiltDark />}
    </S.Lightsaber>
  );
}
