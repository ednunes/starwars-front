import * as Tooltip from '@radix-ui/react-tooltip';
import * as S from './styles';

export default function TooltipComponent({ trigger, content }: { trigger: any; content: any }) {
  return (
    <Tooltip.Provider delayDuration={0} skipDelayDuration={500}>
      <Tooltip.Root>
        <S.Trigger>{trigger}</S.Trigger>
        <S.Content sideOffset={5}>
          <strong>{content}</strong>
          <S.Arrow />
        </S.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
