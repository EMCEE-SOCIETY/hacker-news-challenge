import React from 'react';
import styled from 'styled-components';

const StyledPostItem = styled.div`
  background-color: #f6f6ef;
  padding: 10px;
  border-radius: 4px;
`;

const PostTitle = styled.a`
  color: #000;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const PostInfo = styled.p`
  color: #828282;
  font-size: 0.8em;
  margin-top: 5px;
`;

function PostItem({ title, author, points, comments, url }) {
  return (
    <StyledPostItem>
      <PostTitle href={url} target="_blank" rel="noopener noreferrer">{title}</PostTitle>
      <PostInfo>By: {author} | Points: {points} | Comments: {comments}</PostInfo>
    </StyledPostItem>
  );
}

export default PostItem;
