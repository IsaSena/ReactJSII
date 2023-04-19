import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
        --background: #F0F2F5;
        --shape: #FFFFFF;

        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;

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
    .react-modal-overlay{
        background: rgba(0,0,0,0.5); //como usar o opacity
        position: fixed;
        top:0;
        bottom:0;
        right:0;
        left:0; //vai ocupar tudo
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width:100%;
        max-width: 576px;
        background: var(--background) ;
        padding: 3rem ; //originalmente 3
        position: relative; //pq vai posicionar coisas depois de forma absoluta
        border-radius: 0.24rem; //4px desktop
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter(0.2s);

        &:hover{
            filter: brightness(0.8);
        }
    }
`