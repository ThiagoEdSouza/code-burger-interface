import styled from 'styled-components'

export const Container = styled.div`
    background: #E5E5E5;
    min-height: calc(100vh - 72px);
`

export const ProductsImg = styled.img`
    height: 30%;
    width: 100%;
`

export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 20px;
`

export const CategoryButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: ${ props => (props.isActiveCategory && '2px solid #9758A6')};;
    color: ${ props => (props.isActiveCategory ? '#9758A6' : '#9A9A9D')};
    padding-bottom: 5px;
    font-size: 17px;
    line-height: 19.95px;
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 40px;
    justify-items: center;
    margin-top: 20px;
`