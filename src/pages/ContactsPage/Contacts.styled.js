import styled from 'styled-components';
export const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
