import React, { useState } from 'react'
import BoardContext from '../BoardContext'

function BoardProvider({children}) {
    const [boardInfo, setBoardInfo] = useState([])
    
    return (
        <BoardContext.Provider value={{boardInfo, setBoardInfo}}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardProvider
