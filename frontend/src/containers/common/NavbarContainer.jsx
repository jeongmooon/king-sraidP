import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarComponent from '../../components/common/NavbarComponent'
import UserContext from '../../context/UserContext';

function NavbarContainer() {
    const navigate = useNavigate();
    const {isLoggendIn} = useContext(UserContext);

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

    return (
        <NavbarComponent
            isLoggendIn={isLoggendIn}
            onClickSignUp={onClickSignUp}
            onClickSignIn={onClickSignIn}
            logoClick={logoClick}
            onClickWrite={onClickWrite}
            onClickMypage={onClickMypage} />
    )
}

export default NavbarContainer
