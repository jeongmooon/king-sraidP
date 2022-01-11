import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import WriteBtnComponent from '../../components/write/WriteBtnComponent'
import WriteContext from '../../context/WriteContext';
import client from '../../libs/api/client';

function WriteBtnContainer() {
    const navigate = useNavigate();
    const { writeInfo } = useContext(WriteContext);

    const onPublish = async() => {

        if (writeInfo.tilte === ""){
            alert("제목을 입력하세요")
        }
        else if(writeInfo.contents === ""){
            alert("내용을 입력하세요")
        }
        
        const res = await client.post("/main", writeInfo)
        navigate(-1);
    };

    const onCancle = () =>{
        navigate(-1);
    }
    
    return (
        <WriteBtnComponent onPublish={onPublish} onCancle={onCancle} />
    )
}

export default WriteBtnContainer
