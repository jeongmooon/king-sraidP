import { createGlobalStyle } from "styled-components"
import reset from 'styled-reset'

const GlobalStlye = createGlobalStyle`
    ${reset}

    html {
        font-size: 10px;
    }

    body{
        padding-left: 6rem;
    }

    strong{
        font-weight: bolder;
    }

    em{
        font-style: italic;
    }

`