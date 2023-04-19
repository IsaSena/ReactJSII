import styled from "styled-components";

export const Container = styled.div`
    display: grid; //poderia ser flex
    grid-template-columns: repeat(3, 1fr) ;
    gap: 2rem;
    margin-top: -10rem;

    div{
        background: var(--shape); //fundo branco
        padding: 1.5rem, 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display: flex; //essa parte faz ficar menor que o desejado, mas n funciona separado
            align-items: center;
            justify-content: space-between;
        }
        strong {
            display: block ;
            margin-top: 1rem;
            font-size: 2rem; //32px
            font-weight: 500;
            line-height: 4rem; //mudei aqui pra alinhar melhor

        }
        &.highlight-background {
            background: var(--green);
            color: #FFF;
        }
    }

`;