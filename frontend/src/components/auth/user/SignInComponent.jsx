import React from 'react'
import styled from 'styled-components'
import palette from '../../../libs/styles/palette'
import AuthTemplate from '../template/AuthTemplate'


const SignInFormBlcok = styled.div`
  box-sizing: border-box;

  h3 {
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 2rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid #868e96;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 0.5rem;

  & + & {
    margin-top: 1.3rem;
  }
`;

const StlyedButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 4px;
  font-weight: bolder;
  padding: 1rem 2rem;
  outline: none;
  cursor: pointer;
  margin-top: 1.3rem;
  background-color: ${palette.main};
  color: #fff;
`;


function SignInComponent({ userInfo, onClickSubmit, onChangeInput }) {
    const { userId, password } = userInfo;
    return (
        <AuthTemplate>
            <SignInFormBlcok>
                <h3>로그인</h3>
                <StyledInput
                    name='userId'
                    value={userId}
                    placeholder='아이디를 입력하세요'
                    onChange={onChangeInput}
                />
                <StyledInput
                    name='password'
                    type='password'
                    value={password}
                    placeholder='비밀번호를 입력하세요'
                    onChange={onChangeInput}
                />
                <StlyedButton type='submit' onClick={onClickSubmit}>
                    로그인
                </StlyedButton>
            </SignInFormBlcok>
        </AuthTemplate>
    )
}

export default SignInComponent
