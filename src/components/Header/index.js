import React from 'react'
import { useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'

import Cart from '../../assets/cart-icon.svg'
import Person from '../../assets/profile-icon.svg'
import { 
    Container, 
    ContainerLeft, 
    ContainerRight, 
    PageLink, 
    PageLinkExit, 
    Line, 
    ContainerText 
} from './styles'

export function Header() {
    const { logout, userData } = useUser()
    const {
        push, 
        location: { pathname }
    } = useHistory()

    const logoutUser = () => {
        logout()
        push('/login')
    }

    return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => push('/')}
                isActive={pathname === '/'}
                >Home</PageLink>
                <PageLink onClick={() => push('/produtos')}
                isActive={pathname.includes('produtos')} // includes para quando o produto for acrescido do id.
                > Catálogo de Produtos</PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink onClick={() => push('/carrinho')}>
                    <img src={Cart} alt='Ícone do carrinho' />
                </PageLink>

                <Line>

                </Line>

                <PageLink>
                    <img src={Person} alt='Ícone do perfil' />
                </PageLink>

                <ContainerText>
                    <p>Olá, {userData.name}</p>
                    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>
        </Container>
    )
}
