import React, { useEffect, useState } from 'react'
import ItemWrapComponent from '../../components/common/ItemWrapComponent'
import BannerComponent from '../../components/main/BannerComponent'
import CategoryComponent from '../../components/main/CategoryComponent'
import ItemComponent from '../../components/main/ItemComponent'
import client from '../../libs/api/client'

function MainContiner({mainData}) {
    return (
        <>
            <BannerComponent />
            <CategoryComponent>이벤트</CategoryComponent>
            <ItemWrapComponent>
                {mainData.map((board) => {
                    console.log(board.category)
                    if (board.category === 1) {
                        return(
                            <ItemComponent
                            key={board["_id"]}
                            board ={board} />
                        );
                    }
                })}
            </ItemWrapComponent>
            <CategoryComponent>결투장 정보</CategoryComponent>
            <ItemWrapComponent>
                {mainData.map((board)=>{
                    if (board.category === 2) {
                        return(
                            <ItemComponent
                            key={board["_id"]}
                            board ={board} />
                        );
                    }
                })}
            </ItemWrapComponent>
            <CategoryComponent>자유 게시판</CategoryComponent>
            <ItemWrapComponent>123</ItemWrapComponent>
        </>
    )
}

export default MainContiner
