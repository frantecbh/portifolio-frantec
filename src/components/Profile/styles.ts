import styled from "styled-components";

export const ContainerProrile = styled.div`

    width: 21rem;
    height: 16rem;
    border-radius: 8px;
    background: ${({ theme }) => theme['gray-600']};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 8rem;
        height: 8rem;
        border: 2px solid #00FF00;
        border-radius: 50%;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        margin-top: 1.5rem;

        h1{
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 1.8rem;
        }
        p{
            font-size: 0.8125rem;
        line-height: 1rem;
        }
    }


`