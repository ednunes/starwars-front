import styled, { keyframes } from 'styled-components';

const fly = keyframes`
   0% {
    transform: translate(1px, -1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -3px) rotate(-1deg);
  }
  20% {
    transform: translate(-2px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 3px) rotate(-1deg);
  }
  60% {
    transform: translate(-1px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-2px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Content = styled.div`
  animation: ${fly} 2s infinite;
  fill: var(--primary);
`;

export const TextContent = styled.div`
  display: flex;
  align-items: end;
`;

const pulse = keyframes`
  0%, 100%{
    transform: scale(0.2);
  }
  40%{
    transform: scale(1);
  }
  50%{
    transform: scale(1);
  }
`;

export const DotAnimation = styled.div`
  margin-bottom: 10px;
  div {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    transform: scale(0);
    animation: ${pulse} 1s ease-in-out infinite;
    display: inline-block;
    margin: 0 0.5rem;
    background-color: var(--primary);
  }

  div:nth-child(0) {
    animation-delay: 0s;
  }
  div:nth-child(1) {
    animation-delay: 0.2s;
  }
  div:nth-child(2) {
    animation-delay: 0.4s;
  }
`;
