import React, { useEffect, useState } from 'react'
import ChatComponent from '../../../components/main/chat/ChatComponent'
import client from '../../../libs/api/client'

function ChatContainer() {
    const [dataInput, setDataInput] = useState({})

    const onClickChat = () =>{
        const res = client.post("/", dataInput)
    }

    const getChatData = async()=>{
        const response = await client.get(`/`)
        setDataInput(response.data.data);    
    }
    
    useEffect(()=>{
        getChatData();
    }, []);

    return (
        <ChatComponent onClickChat={onClickChat} />
    )
}

export default ChatContainer
