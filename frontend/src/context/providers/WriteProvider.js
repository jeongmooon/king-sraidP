import React, { useState } from 'react'
import WriteContext from '../WriteContext'

const WriteProvider = ({children}) => {
    const [ writeInfo, setWriteInfo ] = useState({
        title : "",
        contents : "",
        _id : "",
        imgURL : "",
        imgFile : null,
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
