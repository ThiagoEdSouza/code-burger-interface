import React from 'react';

import { useCart } from '../../hooks/CartContext'; //Importando o useCart onde os produtos do nosso carrinho são guardados.
import { Body, Container, Header, EmptyCart } from './styles'
import formatCurrency from '../../utils/formatCurrency'; //Importando o utilitáro de formatação de valores.

export function CartItems() {
    const { cartProducts, increaseProducts, decreaseProducts } = useCart() //Informamos quais os dados queremos do useCart.
    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map( product => ( //Criamos a lógica para listar os produtos através do map
                    <Body key={product.id}>
                        <img src={product.url} />
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <div className='quantity-container'>
                            <button onClick={() => decreaseProducts(product.id)}>-</button>
                                <p>{product.quantity}</p>
                            <button onClick={() => increaseProducts(product.id)}>+</button>
                        </div>
                        <p>{formatCurrency(product.quantity * product.price)}</p>
                    </Body>
                ))
            ) : (
              <EmptyCart>Seu Carrinho ainda está vazio.</EmptyCart>
            )}
        </Container>
    )
}
