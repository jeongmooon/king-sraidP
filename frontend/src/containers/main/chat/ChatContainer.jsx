import React, { useState } from 'react'
import ChatComponent from '../../../components/main/chat/ChatComponent'
import client from '../../../libs/api/client'

function ChatContainer() {
    const [dataInput, setDataInput] = useState()

    const onClickChat = () =>{
        const res = client.post("/", dataInput)
    }
    return (
        <ChatComponent />
    )
}

export default ChatContainer
