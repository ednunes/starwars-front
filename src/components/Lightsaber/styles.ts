import styled, { keyframes } from 'styled-components';

export const Lightsaber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 90%;
  max-width: 0.75rem;
  width: 100%;
`;

const pulse_opacity = keyframes`
  50% {
    opacity: 0.5;
  }
`;

export const Blade = styled.div`
  background: white;
  height: 100%;
  width: 0.75rem;
  bottom: 100%;
  border-radius: 100vw 100vw 0 0;
  box-shadow: inset 0 0 4px hsl(var(--neon-hue) 100% 50% / 1),
    0 0 1em hsl(var(--neon-hue) 100% 50% / 0.8), 0 0 1.5em hsl(var(--neon-hue) 100% 50% / 0.7),
    0 0 2em hsl(var(--neon-hue) 100% 50% / 0.5);
  opacity: 0;
  transition: transform 200ms ease-out, opacity 300ms;
  transform-origin: bottom;
  transform: scaleY(0);

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    filter: blur(0.5em);
    border-radius: inherit;
    background: hsl(var(--neon-hue) 100% 50%);
    animation: ${pulse_opacity} linear 2s infinite;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: white;
    border-radius: inherit;
    z-index: 10;
  }
`;

export const HiltDark = styled.div`
  ::before {
    content: '';
    position: relative;
    top: -29px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 0.75rem 0.75rem;
    border-color: transparent transparent black transparent;
    z-index: 1;
  }

  display: block;
  width: 0.75rem;
  height: 5rem;
  border-radius: 0 0 4px 4px;
  z-index: 1;
  background-image: linear-gradient(
      to bottom,
      black 0,
      black 14%,
      #bababa 14%,
      #bababa 30%,
      black 30%,
      black 47%,
      #bababa 47%,
      #bababa 55%,
      transparent 55%,
      transparent 98%,
      black 98%,
      #bababa 98%,
      #bababa
    ),
    linear-gradient(
      to right,
      #bababa 0,
      #bababa 10%,
      black 10%,
      black 40%,
      #bababa 40%,
      #bababa 50%,
      black 50%,
      black 80%,
      #bababa 80%,
      #bababa 90%,
      black 90%,
      black 100%
    );
`;

export const HiltLight = styled.div`
  ::before {
    content: '';
    position: relative;
    top: 4.7px;
    left: 2px;
    display: block;
    width: 0.48rem;
    height: 6.6px;
    z-index: 1;
    background: #887948;
  }

  display: block;
  width: 0.75rem;
  height: 5rem;
  border-radius: 0 0 4px 4px;
  z-index: 1;
  background-image: linear-gradient(
    to bottom,
    #bababa 0,
    #bababa 8%,
    transparent 8%,
    transparent 18%,
    #bababa 18%,
    #bababa 30%,
    black 30%,
    black 32%,
    #bababa 32%,
    #bababa 34%,
    black 34%,
    black 36%,
    #bababa 36%,
    #bababa 38%,
    black 38%,
    black 40%,
    #bababa 40%,
    #bababa 42%,
    black 42%,
    black 44%,
    #bababa 44%,
    #bababa 46%,
    black 46%,
    black 55%,

    #bababa 55%,
    #bababa 98%,
    #bababa
  );
`;
