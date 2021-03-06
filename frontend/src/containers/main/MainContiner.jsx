import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BannerComponent from '../../components/main/BannerComponent'
import MainComponet from '../../components/main/MainComponet';
import ChatContainer from './chat/ChatContainer';
import FooterContainer from './FooterContainer';

function MainContiner({mainData}) {
    const navigate = useNavigate();
    
    const onClickItem = (id) => {
        console.log(id)
        navigate(`/detail/${id}`);
    };
    
    return (
        <>
            <MainComponet mainData={mainData} onClickItem={onClickItem} />
        </>
    )
}

export default MainContiner
