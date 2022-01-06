import React from 'react'
import MyComponent from '../../components/user/MyComponent'

function MyContainer({user}) {
    return (
        <MyComponent user={user} />
    )
}

export default MyContainer
