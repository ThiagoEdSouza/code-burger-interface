import styled from 'styled-components'

export const Container = styled.div`
    height: 72px;
    background-color: #FFFFFF;
    box-shadow: 2px 3px 5px 0px #00000026;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`

export const ContainerLeft = styled.div`
    display: flex;
    gap: 30px;
`

export const PageLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${ props => props.isActive ? '#9758A6' : '#555555' } ;
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
`

export const PageLinkExit = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #9758A6;
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
`

export const ContainerRight = styled.div`
    display: flex;
    align-content: center;
    gap: 20px;
`

export const Line = styled.div`
    height: 35px;
    color: #BABABA;
    border: 0.5px solid #BABABA
`

export const ContainerText = styled.div`
    p {
        font-size: 14px;
        line-height: 16px;
        color: #555555;
    }
`
