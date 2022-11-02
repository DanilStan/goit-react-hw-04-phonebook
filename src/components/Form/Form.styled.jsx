import styled from '@emotion/styled';

export const FormSlyled = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Label = styled.label`
  color: white;
  font-weight: 700;
`;

export const Button = styled.button`
  background-color: white;
  color: black;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: black;
    color: white;
  }
`;
