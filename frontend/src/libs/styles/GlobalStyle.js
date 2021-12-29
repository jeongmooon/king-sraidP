import { createGlobalStyle } from "styled-components"
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}

    html {
        font-size: 10px;
    }

    body{
        padding-top: 6rem;
    }

    strong{
        font-weight: bolder;
    }

    em{
        font-style: italic;
    }
`


export default GlobalStyle;
