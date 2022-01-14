import React from 'react'
import styled from 'styled-components'

const SubDetailBlock = styled.div`
    padding: 1rem 0;
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    z-index: 999;
`

function SubDetailComponent() {
    return (
        <SubDetailBlock>
            
        </SubDetailBlock>
    )
}

export default SubDetailComponent
