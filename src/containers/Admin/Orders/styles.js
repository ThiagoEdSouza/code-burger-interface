import styled from 'styled-components'
import ReactSelect from 'react-select'

export const Container = styled.div`
    background: #EFEFEF;
    min-height: 100vh;
    padding: 25px;
`

export const ProductsImg = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
    width: 250px;

    .css-13cymwt-control{
        cursor: pointer;
        border-radius: 5px;
    }
`

export const Menu = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    margin: 20px 0;
`

export const LinkMenu = styled.a`
    cursor: pointer;
    color: #323D5D;
    font-weight: ${ props => (props.isActiveStatus ? 'bold' : '400')};
    border-bottom: ${ props => (props.isActiveStatus ? '2px solid #9758A6' : 'none')};
    padding-bottom: 5px;
`