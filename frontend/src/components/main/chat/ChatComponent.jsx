import React from 'react'
import styled from 'styled-components'
import palette from '../../../libs/styles/palette'

const ChatBlock = styled.div`
    float: left;
    width: 50%;
    height: 100%;
    background-color: ${palette.main};
`

const ChatBox = styled.div`
    position: relative;
    width: 100%;
`

const ChatContent = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 80%;
    padding: 1.5rem;
    background-color: #fff;
`

const ChatArea = styled.div`
    width : 80%;
    float: right;
    padding-right: 1.5rem;
`

const ChatInput = styled.textarea`
    float: right;
    width: 70%;
`

const UserName = styled.div`
    font-size: 12px;
`

const UserContent = styled.div`
    font-size: 10px;
    background-color: ${palette.main};
    color: #fff;
    padding-left: 5px;
    border-radius: 5px;
    width: 50%;
`

const ChatBotton = styled.button`
    float: right;
    width : 40px;
    height: 30px;
    font-size: 1px;
`

function ChatComponent({onClickChat}) {
    return (
        <ChatBlock>
            <ChatBox>
                <ChatContent>
                    <UserName>정문</UserName>
                    <UserContent>됨?</UserContent>
                </ChatContent>
                <ChatArea>
                    <ChatBotton onClick={onClickChat}>전송</ChatBotton>
                    <ChatInput />
                </ChatArea>
            </ChatBox>
        </ChatBlock>
    )
}

export default ChatComponent
