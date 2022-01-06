import React from 'react'

function MyComponent({user}) {
    console.log(user)
    return (
        <>
            <div>사진</div>
            <div>{user.userId}</div>
            <div>passwrod</div>
            <div>내가 쓴글</div>
        </>
    )
}

export default MyComponent
