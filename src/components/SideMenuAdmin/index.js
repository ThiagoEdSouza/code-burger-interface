import React from 'react'

import PropTypes from 'prop-types';
import LogoutIcon from '@mui/icons-material/Logout';
import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'
import { Logout } from '@mui/icons-material';

export function SideMenuAdmin({path}) {
    const {logout} = useUser()
    return (
        <Container>
            <hr></hr>
            {listLinks.map( item => ( // Fazemos um map para iterar todos os links citados no menu-list.
            <ItemContainer key={item.id} isActive={path === item.link}> 
                <item.icon className='icon'/>
                <ListLink to={item.link}>{item.label}</ListLink> 
            </ItemContainer>
            ))}
            <hr></hr>
            <ItemContainer style={{ position: 'fixed', bottom: '30px'}}>
                <LogoutIcon className='icon'/>
                <ListLink to='./Login' onClick={logout}>Sair</ListLink>
            </ItemContainer>
        </Container>
    )
}

SideMenuAdmin.propTypes = {
    path: PropTypes.string
}