import React from 'react'
import styled from 'styled-components'
import palette from '../../libs/styles/palette'
import Responsive from './Responsive'

const NavbarBlock = styled.div`
    padding: 1rem 0;
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    z-index: 999;
    background: ${palette.main};
`

const NavbarWrapper = styled(Responsive)`
    display: flex;
    justify-content: space-between;
    line-height: 40px;

    .left {
    display: flex;
    align-items: center;
    }
    .right {
    display: flex;
    align-items: center;
    }
`

const LogImage = styled.img`
    width: 50px;
`

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
  background-color: #fff;
  color: ${palette.main};
  cursor: pointer;

  & + & {
    margin-left: 0.5rem;
  }
`;

function NavbarComponent({ onClickSignUp, onClickSignIn, logoClick }) {
    return (
        <NavbarBlock>
            <NavbarWrapper>
                <div className='left'>왼쪽</div>
                <LogImage onClick={logoClick} src="blob:http://localhost:3000/59e9648d-499a-4ad4-8aa3-d7ff7159e985" alt="" />
                <div className='right'>
                    <StyledButton onClick={onClickSignUp}>회원가입</StyledButton>
                    <StyledButton onClick={onClickSignIn}>로그인</StyledButton>
                </div>
            </NavbarWrapper>
        </NavbarBlock>
    )
}

export default NavbarComponent
