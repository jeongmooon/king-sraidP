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
            <BannerImg src="blob:http://localhost:3000/545a7554-331f-48fc-a5f5-502a2dfa4e85" alt='' />
        </BannerBlock>
    )
}

export default BannerComponent

