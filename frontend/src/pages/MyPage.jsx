import React from 'react'
import MyContainer from '../containers/user/MyContainer'

function MyPage({user}) {
    return (
        <MyContainer user={user} />
    )
}

export default MyPage
