import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext' //Importando o useCart onde os produtos do nosso carrinho são guardados.
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container } from './styles'
import { Button } from '../Button'

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0) //Definida variável que somará o valor total iniciando zerada.
    const [deliveryTax] = useState(5) //Definida variável que somará o valor da taxa de entrega iniciando como R$5,00. O valor da taxa à principio é fixo, porém se no futuro houver a necessidade de alterar o valor dinâmicamente, a lógica esta pré-configurada.
    
    const { cartProducts } = useCart()

    useEffect(() => {

        const sumAllItems = cartProducts.reduce( (acc, current) => {
            return current.price * current.quantity + acc //Pega o valor do produto, multiplica pela quantidade e soma ao valor atual 
        }, 0) // Valor inicial zerado

        setFinalPrice(sumAllItems) //Preço Final definido pela soma realizada anteriormente.
    }, [cartProducts]) // Baseado nos produtos do carrinho.

    const submitOrder = async () => {
        const order = cartProducts.map(product => {
            return { 
                id: product.id,
                quantity: product.quantity
            } // Mapeamos o nosso carrinho e enviamos apenas as informações de id e quantidades dos produtos do mesmo.
        })

        await toast.promise(api.post('orders', { products: order }), {
            pending: 'Realizando o Seu Pedido...',
            success: 'Pedido Realizado Com Sucesso!',
            error: 'Falha Ao Tentar Realizar Seu Pedido, Tente Novamnte.'
        })

    }

    return (
        <div>
            <Container>
                <div className='container-top'>
                    <h2 className='title'>Resumo do Pedido</h2>
                    <p className='items'>Itens</p>
                    <p className='items-price'>{formatCurrency(finalPrice)}</p>
                    <p className='delivery-tax'>Taxa de Entrega</p>
                    <p className='delivery-tax-price'>{formatCurrency(deliveryTax)}</p>
                </div>
                <div className='container-bottom'>
                    <p className='subtotal-title'>Total</p>
                    <p className='total-price'>{formatCurrency(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button style={{ width: '100%' , marginTop: 30 }}
            onclick={submitOrder}
            >Finalizar Pedido
            </Button>
        </div>
    )
}
