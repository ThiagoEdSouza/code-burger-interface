import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout';
import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'
import { Logout } from '@mui/icons-material';

export function SideMenuAdmin() {
    const {logout} = useUser()
    return (
        <Container>
            <hr></hr>
            {listLinks.map( item => ( // Fazemos um map para iterar todos os links citados no menu-list.
            <ItemContainer key={item.id} isActive={true}> 
                <item.icon className='icon'/>
                <ListLink to={item.link}>{item.label}</ListLink> 
            </ItemContainer>
            ))}
            <hr></hr>
            <ItemContainer style={{ position: 'absolute', bottom: '30px'}}>
                <LogoutIcon className='icon'/>
                <ListLink to='./Login' onClick={logout}>Sair</ListLink>
            </ItemContainer>
        </Container>
    )
}
