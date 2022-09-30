import styled, { keyframes } from 'styled-components';
import * as Tooltip from '@radix-ui/react-tooltip';

export const Trigger = styled(Tooltip.Trigger)`
  background: none;
  border: none;
`;

const anim = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Contentx = styled(Tooltip.Content)`
  border-radius: 5px;
  font-size: 0.8rem;
  color: var(--text-color);
  background: var(--secondary);
  border: 2px solid var(--secondary);
  padding: 4px;
  position: absolute;
  top: 40px;
  right: -30px;
`;

export const Content = styled(Tooltip.Content)`
  border-radius: 5px;
  font-size: 0.8rem;
  color: var(--text-color);
  padding: 4px;
  animation: ${anim} 0.5s ease-out;
  background: var(--secondary);
`;

export const Arrow = styled(Tooltip.Arrow)`
  fill: var(--secondary);
`;
