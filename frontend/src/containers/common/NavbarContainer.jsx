import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarComponent from '../../components/common/NavbarComponent'

function NavbarContainer({isLogined}) {
    const navigate = useNavigate();

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

    return (
        <NavbarComponent
            isLogined={isLogined}
            onClickSignUp={onClickSignUp}
            onClickSignIn={onClickSignIn}
            logoClick={logoClick}
            onClickWrite={onClickWrite} />
    )
}

export default NavbarContainer
