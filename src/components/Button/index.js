import React from "react";

import PropTypes from "prop-types";
import { ContainerButton } from "./styles";
export function Button({ children, ...rest }) {
    return <ContainerButton {...rest}>{children}</ContainerButton>
}

Button.proptypes = {
    children: PropTypes.string
}