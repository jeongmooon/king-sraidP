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
            <BannerImg src="" alt='' />
        </BannerBlock>
    )
}

export default BannerComponent

