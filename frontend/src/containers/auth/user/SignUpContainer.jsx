import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SignUpComponent from '../../../components/auth/user/SignUpComponent'
import client from '../../../libs/api/client'

function SignUpContainer() {
    const navigate = useNavigate();

    // 회원가입 정보
    const [ userInfo, setUserInfo ] = useState({
        userId : "",
        email : "",
        password : "",
        passwordConfirm : "",
    })

    // 회원가입 정보 넣기
    const onChangeInput = (e) =>{
        const { name, value } = e.target;

        setUserInfo({
            ...userInfo,
            [name] : value,
        })
    }

    const onClickSubmit = async(e)=>{
        const { userId, email, password, passwordConfirm } = userInfo;

        if (password !== passwordConfirm) {
          return alert("비밀번호가 서로 일치하지 않습니다");
        } else if (userId === "") {
          return alert("아이디를 입력하세요");
        } else if (email === "") {
          return alert("이메일을 입력하세요");
        } else if (password === "") {
          return alert("비밀번호를 입력하세요");
        } else if (passwordConfirm === "") {
          return alert("비밀번호 확인 입력하세요");
        } else {
        const data = {
            userId,
            email,
            password,
        };
    
        try {
            
           const response = await client.post("/auth/signup", data);

            if (response.status === 200) {
              alert("회원가입 완료");
              navigate("/");
            }
        } catch (error) {
            if (error.response.status === 400) {
              alert("이미 존재하는 회원 입니다");
            }
            console.log("회원가입 오류>>>>>", error);
          }
        }
    };

    return (
        <SignUpComponent
            onChangeInput={onChangeInput}
            onClickSubmit={onClickSubmit}
            userInfo={userInfo}
        />
    )
}

export default SignUpContainer
