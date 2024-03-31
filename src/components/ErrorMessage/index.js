import React from 'react'

import PropTypes from "prop-types";

import { 
    ErrorMessageStyles
} from './styles'

export function ErrorMessage({ children }) {
    
    return (
        <ErrorMessageStyles>{children}</ErrorMessageStyles>
    )
}

ErrorMessage.proptypes = {
    children: PropTypes.string
}