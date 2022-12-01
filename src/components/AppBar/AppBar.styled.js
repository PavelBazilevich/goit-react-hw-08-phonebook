import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid #2196f3;
  > nav,
  ul {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  padding: 5px 14px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-left: 20px;
  &.active {
    color: white;
    background-color: #2196f3;
  }
`;
