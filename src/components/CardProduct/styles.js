import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 30px;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    background: #FFFFFF;
    display: flex;
    gap: 12px;
    padding: 16px;
    width: max-content;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const Image = styled.img`
    width: 150px;
    height: 140px;
    border-radius: 10px;
`

export const ProductName = styled.p`
    font-size: 16px;
    font-weight: normal;
    line-height: 19px;
    text-align: left;
    color: #000000;
`

export const ProductPrice = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    text-align: left;
    margin-top: 30px;
    color: #000000;
`