import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
        --background: f0f2f5;
        --shape: #FFFFFF;

        --red: #E52E4D;
        --blue: #5429CC;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width:1080px){ //se estiver com uma tela ate esse tamanho
            font-size: 93.75%; //diminui o fontsize para 15px
        }
        @media(max-width:720px){// bom utilizar para o caso de o user config a fonte, é adaptável
            font-size: 87.5%; //14px
        }
    }

    body{
        background-color: var(--background) ;
        -webkit-font-smoothing: antialiased; //nitidez da fonte
    }
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif; //caso n baixe poppins vai a outra
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    button{
        cursor:pointer;

    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`