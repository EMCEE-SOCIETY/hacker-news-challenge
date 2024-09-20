import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

function SearchBar() {
  // Implement search functionality and debounce here
  
  return (
    <StyledInput
      type="text"
      placeholder="Search posts..."
      // Add necessary props and event handlers
    />
  );
}

export default SearchBar;
