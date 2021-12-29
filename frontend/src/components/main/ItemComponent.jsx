import React from 'react'
import styled from 'styled-components'
import palette from '../../libs/styles/palette'

const BoardItem = styled.div`
    position: relative;
    width: 175px;
`

const BoardTitle = styled.p`
    color : ${palette.main};
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    position: relative;
    white-space: pre-wrap;
`


function ItemComponent({board}) {
    const {title, _id} = board;
    return (
        <>
            <BoardItem>
                <BoardTitle>{title}</BoardTitle><hr />
            </BoardItem><br />
        </>
    )
}

export default ItemComponent
