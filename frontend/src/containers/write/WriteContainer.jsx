import React, { useContext, useState } from 'react'
import WriteComponent from '../../components/write/WriteComponent'
import UserContext from '../../context/UserContext';
import WriteContext from '../../context/WriteContext'

function WriteContainer() {
    const { writeInfo, setWriteInfo } = useContext(WriteContext);
    const {user} =useContext(UserContext);
    const [imgInfo, setImgInfo] = useState({
        imgFile: null,
        imgURL: "",
    })

    const onChangeImg = async(e) =>{
        const imgFile = e.target.files[0];
        const imgURL = URL.createObjectURL(imgFile)
        setImgInfo({
            ...imgInfo,
            imgURL,
        })

        setWriteInfo({
            ...writeInfo,
            imgFile,
        })
    }
    
    const onChangeBody = (contents) => {
        setWriteInfo({
            ...writeInfo,
            contents : contents,
        })
    }

    const onChangeTitle = (e) =>{
        const {name, value} = e.target;

        setWriteInfo({
            ...writeInfo,
            [name] : value,
            _id : user._id,
        })
    }

    return (
        <>
            <WriteComponent
                onChangeTitle={onChangeTitle}
                onChangeImg={onChangeImg}
                onChangeBody={onChangeBody}
                writeInfo={writeInfo}
                imgURL={imgInfo.imgURL} />
        </>
    )
}

export default WriteContainer
