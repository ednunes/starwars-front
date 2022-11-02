import styled from 'styled-components';
import { device } from '../../utils/device_sizes';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  padding: 0 10px;
  background: var(--primary);

  @media ${device.laptop} {
    height: 100px;
    position: relative;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: var(--background);

  @media ${device.laptop} {
    height: 60px;
  }
`;

const ListWrapper = styled.ul`
  display: flex;
  width: calc(55px * ${({ numberOfItems }: { numberOfItems: number }) => numberOfItems});

  @media ${device.laptop} {
    width: calc(70px * ${({ numberOfItems }: { numberOfItems: number }) => numberOfItems});
  }
`;

export const List = (props: any) => <ListWrapper {...props}></ListWrapper>;

export const Item = styled.li`
  position: relative;
  list-style: none;
  z-index: 1;
  width: 60px;

  @media ${device.laptop} {
    width: 70px;
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  color: var(--secondary-color);
`;

export const IconContainer = styled.div`
  position: relative;
  display: block;
  line-height: 75px;
  font-size: 1.5em;
  text-align: center;
  transition: 0.5s;
  width: 24px;
  height: 24px;
  margin-bottom: 36px;
  transform: translate(8px, -10px);
  border: 0;

  svg {
    fill: var(--nav-text-color);
  }

  @media ${device.laptop} {
    transform: translate(0, -10px);
  }

  ${Item}.active ${NavLink} & {
    transform: translate(8px, -32px);
    svg {
      fill: var(--nav-text-indicator-color);
    }
    @media ${device.laptop} {
      transform: translateY(-30px);
    }
  }
`;

export const Text = styled.div`
  position: absolute;
  transition: 0.5s;
  font-size: 0.6em;
  font-family: 'Roboto';
  letter-spacing: 0.05em;
  transform: translate(8px, 1.5em);
  color: var(--nav-text-color);

  @media ${device.laptop} {
    font-size: 0.75em;
    transform: translate(0, 1.5em);
  }
`;

export const Indicator = styled.div`
  margin: 10px 0 0 10px;
  width: 50px;
  height: 50px;
  transition: 0.5s;
  border-radius: 50%;
  background: var(--secondary);

  @media ${device.laptop} {
    margin: 15px 0 0 12px;
    width: 45px;
    height: 45px;

    ::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -16px;
      width: 20px;
      height: 20px;
      background: transparent;
      border-top-right-radius: 20px;
      box-shadow: 1px -10px 0 0 var(--primary);
    }

    ::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -16px;
      width: 20px;
      height: 20px;
      background: transparent;
      border-top-left-radius: 20px;
      box-shadow: -1px -10px 0 0 var(--primary);
    }
  }
`;

export const IndicatorContainer = styled.li`
  position: absolute;
  list-style-type: none;
  top: -25px;
  transition: 0.5s;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background: linear-gradient(transparent 50%, var(--primary) 50%);

  ${Item}:nth-child(1).active ~ & {
    transform: translateX(calc(55px * 0));
  }
  ${Item}:nth-child(2).active ~ & {
    transform: translateX(calc(55px * 1));
  }
  ${Item}:nth-child(3).active ~ & {
    transform: translateX(calc(55px * 2));
  }
  ${Item}:nth-child(4).active ~ & {
    transform: translateX(calc(55px * 3));
  }
  ${Item}:nth-child(5).active ~ & {
    transform: translateX(calc(55px * 4));
  }
  ${Item}:nth-child(6).active ~ & {
    transform: translateX(calc(55px * 5));
  }

  @media ${device.laptop} {
    top: -1em;

    ${Item}:nth-child(1).active ~ & {
      transform: translateX(calc(70px * 0));
    }
    ${Item}:nth-child(2).active ~ & {
      transform: translateX(calc(70px * 1));
    }
    ${Item}:nth-child(3).active ~ & {
      transform: translateX(calc(70px * 2));
    }
    ${Item}:nth-child(4).active ~ & {
      transform: translateX(calc(70px * 3));
    }
    ${Item}:nth-child(5).active ~ & {
      transform: translateX(calc(70px * 4));
    }
    ${Item}:nth-child(6).active ~ & {
      transform: translateX(calc(70px * 5));
    }

    ${Item}:nth-child(1).active ~ & ${Indicator}::before {
      display: none;
    }
    ${Item}:nth-child(6).active ~ & ${Indicator}::after {
      display: none;
    }
  }
`;
