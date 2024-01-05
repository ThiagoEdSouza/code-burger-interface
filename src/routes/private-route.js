import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types' //Importamos os prop-types pois utilizaremos as props.

function PrivateRoute({ component, ...rest }) { //Indicamos os components utilizados das props.
    const user = localStorage.getItem('codeburger:userData') //Indicamos de onde pegamos a confirmação de login do usuário.

    if (!user) {
        return <Redirect to="/login" /> //Caso não haja informação de login do usuário será redirecionado a tela de login.
    }

    return <Route {...rest} component={component} /> //Caso haja informação, passa todas as props e reenderiza o componente.
}

export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
} //Indicamos qual o tipo de props utilizaremos na aplicação.