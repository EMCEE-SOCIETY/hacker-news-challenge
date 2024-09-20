import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const StyledPostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

function PostList() {
  // Receive posts as props or from a context
  
  return (
    <StyledPostList>
      {/* Map through posts and render PostItem components */}
    </StyledPostList>
  );
}

export default PostList;
