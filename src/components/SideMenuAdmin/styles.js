import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    background: #3C3C3C;
    box-shadow: 0px 0px 14px 0px #00000026;
    width: 300px;
    top: 0;
    left: 0;

    hr{
        margin: 50px 15px;

    }
`

export const ItemContainer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    background: ${props => (props.isActive ? '#565656' : 'none')};
    border-radius: 2px;
    margin: 10px;
    padding-left: 20px;

    .icon{
        color: white;
        padding-right: 10px;
    }
`

export const ListLink = styled(Link)`
    font-size: 14px;
    line-height: 19px;
    font-weight: normal;
    color: white;
    text-decoration: none;
`