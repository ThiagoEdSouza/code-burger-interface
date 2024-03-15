import React from 'react'

import PropTypes from 'prop-types'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'
import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
import paths from '../../constants/paths'
import NewProduct from './NewProduct'

export function Admin({ match: {path} }) {

    return (
        <Container>
            <SideMenuAdmin path={path}/>
            <ContainerItems>
                {path === paths.Orders && <Orders /> }
                {path === paths.ListProducts && <ListProducts /> }
                {path === paths.NewProduct && <NewProduct /> }
            </ContainerItems>
        </Container>
    )
}


Admin.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string
    })
}