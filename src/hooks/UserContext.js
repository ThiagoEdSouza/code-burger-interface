import React, { createContext, useContext, useState, useEffect } from "react";  //Importamos o React  com os atributos de create e useContext.

import PropTypes from 'prop-types' //Como solicitado pelo react precisamos importar o prop-types

const UserContext = createContext({}) //Atribuímos o createContext da aplicação.

export const UserProvider = ({ children }) => { //Variável na qual atribuímos os dados. Precisamos indicar os props.
    const [userData, setUserData] = useState({}) // Dados de usuário em forma de estado

    const putUserData = async userInfo => { //Criada função para guardar novos dados do usuário.
        setUserData(userInfo)

        await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))
    }

    useEffect(() =>{

        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem('codeburger:userData')

            if (clientInfo) {
                setUserData(JSON.parse(clientInfo))
            }
        }

        loadUserData()
    }, [])

    return ( //No Provider precisamos de um return.
        <UserContext.Provider value={{ putUserData, userData }}>
            {children}
        </UserContext.Provider> // Return é feito em forma de props, pegando o children.
    )
}

export const useUser = () => { // Variável que pega as informações atribuída pelo useProvider
    const context = useContext(UserContext) //Indicamos de onde serão coletadas as informações.

    if (!context) {
        throw new Error('useUser must be used with UserContext')
    } // Importante atribuírmos um erro caso a informação coletada seja nula para identificarmos onde está o erro.

    return context
}


UserProvider.propTypes = {
    children: PropTypes.node
}

