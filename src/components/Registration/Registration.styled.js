import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 20px;
  padding: 8px 14px;
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

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: #2196f3;
  font-size: 20px;
  padding: 4px 10px;
  border-radius: 4px;
  margin-left: 5px;
  color: white;
  font-weight: 500;
  &:hover {
    background-color: #2183f1;
  }
`;

export const Span = styled.span`
  font-size: 20px;
  color: black;
  font-weight: 500;
  padding: 2px 6px;
`;
