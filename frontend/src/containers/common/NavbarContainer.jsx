import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarComponent from '../../components/common/NavbarComponent'
import UserContext from '../../context/UserContext';
import client from '../../libs/api/client'

function NavbarContainer() {
    const navigate = useNavigate();
    const {isLoggendIn, setIsLoggedIn, user, setUser} = useContext(UserContext);

    const logoClick = ()=>{
        navigate('/')
    }

    const onClickSignIn = ()=>{
        navigate('/signin')
    }

    const onClickSignUp =()=>{
        navigate('/signup')
    }

    const onClickWrite =() =>{
        navigate('/write')
    }

    const onClickMypage = () =>{
        navigate('/mypage')
    }

    const onClickLogout = async() => {
        localStorage.removeItem("accessToken");
        client.defaults.headers["Autorization"] ="";
        setIsLoggedIn(false);
        setUser(null);
        navigate("/");
        alert("로그아웃완료")
    }

    return (
        <NavbarComponent
            user={user}
            isLoggendIn={isLoggendIn}
            onClickLogout={onClickLogout}
            onClickSignUp={onClickSignUp}
            onClickSignIn={onClickSignIn}
            logoClick={logoClick}
            onClickWrite={onClickWrite}
            onClickMypage={onClickMypage} />
    )
}

export default NavbarContainer
