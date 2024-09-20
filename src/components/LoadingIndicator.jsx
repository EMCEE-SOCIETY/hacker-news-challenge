import React from 'react';
import styled from 'styled-components';

const StyledLoading = styled.div`
  text-align: center;
  font-size: 18px;
  color: #ff6600;
  margin: 20px 0;
`;

function LoadingIndicator() {
  return <StyledLoading>Loading...</StyledLoading>;
}

export default LoadingIndicator;
