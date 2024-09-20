import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  background-color: #ffebee;
  color: #c62828;
  padding: 10px;
  border-radius: 4px;
  margin: 20px 0;
`;

function ErrorMessage({ message }) {
  return <StyledError>{message}</StyledError>;
}

export default ErrorMessage;
