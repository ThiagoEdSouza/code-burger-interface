import styled from 'styled-components'

export const Container = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow{ //botão de rolagem carrossel
        background-color: #9758A6;
        color: #E7E7E7;
        filter: drop-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
        border: none;
    }

    .rec.rec-arrow:hover{ //hover do botão de rolagem carrossel
        border: 2px soid #9758A6;
        background-color: #E7E7E7;
        color: #9758A6;
    }

    .rec.rec-arrow:disabled{ //botão de rolagem carrossel desabilitado
        border: none;
        background-color: #BEBEBE;
        color: #E7E7E7;
    }
`

export const OfferImg = styled.img``

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;

    p {
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 120%;
        color: #424242;
    }
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-bottom: 16px;
`

export const Button = styled.button`
    margin-top: 16px;
    background: #9758A6;
    border-radius: 8px;
    
    width: 200px;
    height: 50px;
    border: none;
    
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    color: #FFFFFF;

    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }
`