import styled from 'styled-components';

export const Form = styled.form`
  max-width: 500px;
  margin: auto;
`;

export const InputContainer = styled.div`
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
`;
export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  &:focus {
    border: 2px solid dodgerblue;
  }
`;
export const Button = styled.button`
  background-color: dodgerblue;
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;
