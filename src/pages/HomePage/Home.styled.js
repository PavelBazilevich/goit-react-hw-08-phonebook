import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.p`
  font-size: 50px;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  padding: 8px 14px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  margin-left: 20px;
  text-align: center;
  width: max-content;
  color: white;
  background-color: #2196f3;
`;
