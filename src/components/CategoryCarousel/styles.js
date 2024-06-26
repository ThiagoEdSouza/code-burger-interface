import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    background-color: #E7E7E7;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow{ //botão de rolagem carrossel
        background-color: #9758A6;
        color: #E7E7E7;
        box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
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

export const CategoryImg = styled.img``

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
`

export const Button = styled(Link)`
    margin-top: 16px;
    background: #9758A6;
    border-radius: 8px;
    
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

    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`