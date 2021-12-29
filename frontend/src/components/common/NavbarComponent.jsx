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

function NavbarComponent() {
    return (
        <NavbarBlock>
            <NavbarWrapper>
                <div className='left'>왼쪽</div>
                <div className='right'>오른쪽</div>
            </NavbarWrapper>
        </NavbarBlock>
    )
}

export default NavbarComponent
