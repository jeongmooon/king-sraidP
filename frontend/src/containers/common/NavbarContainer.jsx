import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarComponent from '../../components/common/NavbarComponent'

function NavbarContainer() {
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
    return (
        <NavbarComponent onClickSignUp={onClickSignUp} onClickSignIn={onClickSignIn} logoClick={logoClick} />
    )
}

export default NavbarContainer
