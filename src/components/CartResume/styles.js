import styled from 'styled-components'

export const Container = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .container-top {
        display: grid;
        grid-gap: 10px 50px;
        grid-template-areas: 
        'title title'
        'items items-price'
        'delivery-tax delivery-tax-price';
    }

    .title {
        grid-area: title;
        margin-bottom: 20px;
        font-family: Roboto;
        font-size: 14px;
        font-weight: bold;
        line-height: 16px;
        border-bottom: 1px solid #B5B5B5;
        padding: 10px;

        .items {
            grid-area: items;
        }

        .items-price {
            grid-area: items-price;
        }

        .delivery-tax {
            grid-area: delivery-tax;
        }

        .delivery-tax-price {
            grid-area: delivery-tax-price;
        }

    }
    
    .container-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 24px;
        font-weight: bold;
        margin-top: 50px;
    }
`

