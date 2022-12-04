import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import bg from '../../pictures/bg.jpg';

export const Title = styled.p`
  font-weight: 700;
  padding: 5px;
  font-size: 60px;
  border-radius: 5px;
  background-color: #2196f3;
  box-shadow: 5px 5px 5px #2183f1;
  transition: 0.2s linear;

  &:hover {
    color: white;
    box-shadow: 0 0 0 2px white, 0 0 0 4px #2183f1;
  }
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

export const Main = styled.main`
  &::after {
    content: '';
    background: url(${bg});
    background-size: cover;
    opacity: 0.5;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding: 5px;
  border-radius: 5px;
  background-color: #2196f3;
`;
