import React from 'react'
import BannerContainer from '../containers/main/BannerContainer'
import ChatContainer from '../containers/main/chat/ChatContainer'
import FooterContainer from '../containers/main/FooterContainer'
import MainContiner from '../containers/main/MainContiner'
import SubDetailContainer from '../containers/subboard/SubDetailContainer'

function MainPage({mainData}) {
    return (
        <>
            <BannerContainer />
            <SubDetailContainer mainData={mainData} />
            <ChatContainer />
            <MainContiner mainData={mainData} />
            <FooterContainer />
        </>
    )
}

export default MainPage
