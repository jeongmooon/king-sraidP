import React from 'react'
import styled from 'styled-components'
import palette from '../../libs/styles/palette'

const BoardItem = styled.div`
    position: relative;
    width: 175px;
    height: 175px;
`

const BoardTitle = styled.p`
    color : ${palette.main};
    font-size: 14px;
    font-weight: bold;
    position: relative;
`


function ItemComponent({board}) {
    console.log(board)
    const {title, _id} = board;
    return (
        <BoardItem>
            <BoardTitle>{title}</BoardTitle>
        </BoardItem>
    )
}

export default ItemComponent
