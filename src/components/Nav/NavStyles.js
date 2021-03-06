import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import media from '../../utils/mediaTemplate';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  justify-content: space-between;
  width: 92%;
  margin: 0 auto;
  color: rgb(140, 67, 255);
  padding: 0 1.5rem 1rem;
  border-bottom: 1px solid rgb(222, 224, 229);

  ${media.phone`flex-direction: column;`};
  ${media.phone`width: 100vw;`};
`;

export const NameWrapper = styled.div``;

export const Name = styled.div`
  font-size: 1.4rem;
  font-weight: 500;

  ${media.phone`margin-bottom: 1rem;`};
  ${media.phone`margin-left: -2rem;`};
`;

export const NameText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TabsWrapper = styled.div``;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(140, 67, 255, 0.6);

  ${media.phone`margin-left: -3rem;`};
`;

export const TabText = styled.div`
  &:hover {
    color: rgb(140, 67, 255);
    transition: 80ms ease-in forwards;
  }
`;

export const LinkTag = styled.a`
  text-decoration: none;
  color: rgb(140, 67, 255, 0.7);

  &:hover {
    color: rgb(140, 67, 255);
    transition: 80ms ease-in forwards;
  }
`;

export const tabText = {
  paddingRight: '3rem'
};

export const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

export const active = {
  color: 'rgb(140, 67, 255)'
};

export const name = {
  fontSize: '1.4rem',
  fontWeight: '500'
};
