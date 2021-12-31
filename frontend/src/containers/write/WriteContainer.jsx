import React, { useState } from 'react'
import WriteComponent from '../../components/write/WriteComponent'
import WriteContext from '../../context/WriteContext'

function WriteContainer() {
    const { wirteInfo, setWriteInfo } = useState(WriteContext);
    return (
        <WriteComponent />
    )
}

export default WriteContainer
