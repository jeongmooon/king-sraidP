import React from 'react'
import styled from 'styled-components';

const WriteActionButtonWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
  display: flex;
`;

const StyledButton = styled.div`
  border-radius: 0.4rem;
  font-size: 1.2rem;
  font-weight: 400;
  border: 1px solid black;
  padding: 0.6rem 1.1rem;
  line-height: 1.2rem;
  vertical-align: middle;
  text-align: center;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  & + & {
    margin-left: 0.5rem;
  }
`;


function WriteBtnComponent({onPublish, onCancle }) {
    return (
        <WriteActionButtonWrapper>
            <StyledButton onClick={onPublish}>등록</StyledButton>
            <StyledButton onClick={onCancle}>취소</StyledButton>
        </WriteActionButtonWrapper>
    )
}

export default WriteBtnComponent
