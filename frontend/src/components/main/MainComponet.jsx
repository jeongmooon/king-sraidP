import React from 'react'
import CategoryComponent from '../../components/main/CategoryComponent'
import ItemComponent from '../../components/main/ItemComponent'
import ItemWrapComponent from '../../components/common/ItemWrapComponent'
import styled from 'styled-components'


const MainBlock = styled.div`
    float: right;
    width: 40%;
    height: 100%;
`

function MainComponet({ onClickItem, mainData }) {
    
    return (
        <>
        <MainBlock>
            <CategoryComponent>이벤트</CategoryComponent>
                <ItemWrapComponent>
                    {mainData.map((board) => {
                        if (board.category === '1') {
                            return(
                                <ItemComponent
                                key={board["_id"]}
                                board ={board}
                                onClickItem={onClickItem} />
                            );
                        }
                    })}
                </ItemWrapComponent>
                <br /><br />
                <CategoryComponent>결투장 정보</CategoryComponent>
                <ItemWrapComponent>
                    {mainData.map((board)=>{
                        if (board.category === '2') {
                            return(
                                <ItemComponent
                                key={board["_id"]}
                                board ={board}
                                onClickItem={onClickItem} />
                            );
                        }
                    })}
                </ItemWrapComponent>
                <br /><br />
                <CategoryComponent>자유 게시판</CategoryComponent>
                <ItemWrapComponent>123</ItemWrapComponent>
            </MainBlock>
        </>
    )
}

export default MainComponet
