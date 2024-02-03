import React, { createContext, useContext, useState, useEffect } from "react";  //Importamos o React  com os atributos de create e useContext.

import PropTypes from 'prop-types' //Como solicitado pelo react precisamos importar o prop-types

const CartContext = createContext({}) //Atribuímos o createContext da aplicação.

export const CartProvider = ({ children }) => { //Variável na qual atribuímos os dados. Precisamos indicar os props.
    const [cartProducts, setCartProducts] = useState([]) // Dados de produtos em forma de array.

    const putProductInCart = async product => { //Criada função para guardar novos dados de produtos dentro do carrinho.
        const cartIndex = cartProducts.findIndex( prd => prd.id === product.id ) //Lógica para verificar se encontra algum produto já adicionado no carrinho.

        let newCartProducts = []

        if(cartIndex >= 0) { //Caso o produto seja repetido deve adicionar apenas por quantidade sem duplicar o produto.
            newCartProducts = cartProducts

            newCartProducts[cartIndex].quantity = 
                newCartProducts[cartIndex].quantity + 1

            setCartProducts(newCartProducts)
        }
        else { //Caso o produto não conste na lista seja adicionado como ítem ao carrinho.
            product.quantity = 1
            newCartProducts = [... cartProducts, product]
            setCartProducts(newCartProducts)
        }

        await localStorage.setItem(
            'codeburger:cartInfo', 
            JSON.stringify(newCartProducts)
            ) //Adiciona o produto novo ao local storage.
    }

    useEffect(() =>{

        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('codeburger:cartInfo')

            if (clientCartData) {
                setCartProducts(JSON.parse(clientCartData))
            }
        }

        loadUserData()
    }, []) // Lógica responsável por salvar os dados do carrinho no local storage.

    return ( //No Provider precisamos de um return.
        <CartContext.Provider value={{ putProductInCart, cartProducts }}>
            {children}
        </CartContext.Provider> // Return é feito em forma de props, pegando o children.
    )
}

export const useCart = () => { // Variável que pega as informações atribuída pelo useProvider
    const context = useContext(CartContext) //Indicamos de onde serão coletadas as informações.

    if (!context) {
        throw new Error('useCart must be used with UserContext')
    } // Importante atribuírmos um erro caso a informação coletada seja nula para identificarmos onde está o erro.

    return context
}


CartProvider.propTypes = {
    children: PropTypes.node
}

