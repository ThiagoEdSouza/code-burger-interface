import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types' //Importamos os prop-types pois utilizaremos as props.
import { Header } from '../components'

function PrivateRoute({ component, isAdmin, ...rest }) { //Indicamos os components utilizados das props.
    const user = localStorage.getItem('codeburger:userData') //Indicamos de onde pegamos a confirmação de login do usuário.

    if (!user) {
        return <Redirect to="/login" /> //Caso não haja informação de login do usuário será redirecionado a tela de login.
    }

    if(isAdmin && !JSON.parse(user).admin){ // Na tela de admin, se o usuário não for admin, vamos criar o redirecionamento para a tela de home. Criando assim o bloqueio.
        return <Redirect to="/" /> //
    }
    return( 
        <>
        { !isAdmin && <Header /> } 
        <Route {...rest} component={component} />
        </> // Caso o isAdmin seja falso, mostra o Header.
    )
}

export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool
} //Indicamos qual o tipo de props utilizaremos na aplicação.