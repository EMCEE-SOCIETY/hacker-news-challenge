import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function Pagination() {
  // Implement pagination logic here
  
  return (
    <PaginationContainer>
      <PaginationButton>Previous</PaginationButton>
      <PaginationButton>Next</PaginationButton>
    </PaginationContainer>
  );
}

export default Pagination;
