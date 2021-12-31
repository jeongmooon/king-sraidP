import React, { useState } from 'react'
import WriteContext from '../WriteContext'

function WriteProvider({children}) {
    const [ writeInfo, setWriteInfo ] = useState({
        title : "",
        contents : "",
        _id : "",
        imgURL : "",
    })

    return (
        <WriteContext.Provider
            value={{
                writeInfo,
                setWriteInfo,
            }}
        >
            {children}
        </WriteContext.Provider>
    )
}

export default WriteProvider
