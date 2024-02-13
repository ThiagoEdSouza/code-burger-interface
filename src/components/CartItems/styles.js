import styled from 'styled-components'

export const Container = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    padding: 10px;
    width: max-content;
`

export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    border-bottom: 1px solid #B5B5B5;
    text-align: center;

    p {
        font-size: 17px;
        font-weight: normal;
        line-height: 20px;
        color: #9A9A9D;
    }
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px 15px;
    padding: 10px;
    text-align: center;
    
    img {
        width: 120px;
        height: 120px;
        border-radius: 20px;
    }

    p {
        font-size: 18px;
        font-weight: bold;
        color: #000000;
    }

    .quantity-container {
        display: flex;
        gap: 10px;
        margin-left: 55px;

        button {
            height: 30px;
            background: transparent;
            border: none;
            border-radius: 10px;
            font-size: 24px;
            font-weight: bold;
            color: grey;
            cursor: pointer;
        }

        p{
            margin-top: 3px;
        }
    }
`

export const EmptyCart = styled.p`
    padding: 20px;
    text-align: center;
    font-weight: bold;
`