import styled from 'styled-components';
import tel from '../../pictures/tel.png';
export const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    top: 40px;
    left: 0;
    position: absolute;
    content: '';
    width: 440px;
    height: 800px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${tel});
    z-index: 10;

    background-size: cover;
  }
  &::after {
    top: 40px;
    right: 20px;
    position: absolute;
    content: '';
    width: 440px;
    height: 800px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${tel});
    z-index: 9;

    background-size: cover;
  }
`;

export const Title = styled.h1`
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
