import React from 'react'
import styled from 'styled-components'
import palette from '../../libs/styles/palette'

const FooterWrap = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    border-top: 1px solid #868e96;
    justify-content: space-between;
    align-items: center;
    color: ${palette.main};
    font-size: 15px;
`



function FooterComponent() {
    return (
        <FooterWrap>
            <div>킹스레이드</div>
            <div>킹스레이드</div>
        </FooterWrap>
    )
}

export default FooterComponent
