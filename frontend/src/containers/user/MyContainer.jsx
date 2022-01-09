import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyComponent from '../../components/user/MyComponent'
import UserContext from '../../context/UserContext';
import client from '../../libs/api/client';

function MyContainer() {
    const [myInput, setMyInput] = useState({
        password :"",
        nickname :"",
        imgURL : "",
    });
    const [preview, setPreview] = useState('');
    const imgRef = useRef(null);
    const {user, setUser} = useContext(UserContext);
    const [myPage, setMyPage] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        setPreview(user ? user.imgURL : "")
    },[user])

    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setMyInput({
            ...myInput,
            [name] : value,
        })
    }

    const onChangeImage = (e) =>{
        const imgFile = e.target.files[0];
        const imgURL = URL.createObjectURL(imgFile);

        setMyInput({
            ...myInput,
            imgURL : imgFile
        })

        setPreview(imgURL)
    }

    const onClickPassword = async() =>{
        
        let res;
        try {
            res = await client.post(`/auth/${user._id}`, myInput)
        } catch (error) {
            console.log(error)
            alert('비밀번호가 틀렸습니다')
        }

        if(res.status === 200) {
            setMyPage(true)
        }
    }

    const onClickPutBtn = async () => {
        const { nickname, imgURL } = myInput;
        const formData = new FormData();

        formData.append("img", imgURL);
        formData.append("nickname", nickname);

        let res;
        try {
            res = await client.put(`/auth/${user._id}`, formData)
        } catch (error) {
            console.log('회원정보 업로드 실패>>>', error)
        }

        if(res.status === 200) {
            alert('회원정보 수정');
            navigate('/')
            setUser({
                ...user,
                nickname,
                imgURL : res.data.imgURL
            })
        }
    }
    return (
        <MyComponent
            user={user}
            myPage={myPage}
            preview={preview}
            imgRef={imgRef}
            myInput={myInput}
            onChangeImage={onChangeImage}
            onChangeInput={onChangeInput}
            onClickPutBtn={onClickPutBtn}
            onClickPassword={onClickPassword} />
    )
}

export default MyContainer
