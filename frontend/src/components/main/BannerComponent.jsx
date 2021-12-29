import React from 'react'
import styled from 'styled-components'

const BannerBlock =styled.div`
    width: 100%;
    height: 30vh;
    margin-bottom: relative;
    cursor: pointer;
`

const BannerImg = styled.img`
    display: block;
    width: 100%;
    height: 30vh;
    object-fit: cover;
    opacity: 0.7;
`

function BannerComponent() {
    return (
        <BannerBlock>
            <BannerImg src="https://firebasestorage.googleapis.com/v0/b/jeongmoon-79aec.appspot.com/o/banner.gif?alt=media&token=5e36e08a-6d9d-4278-b815-2770db0da93c" alt='' />
        </BannerBlock>
    )
}

export default BannerComponent

