import React, { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import status from './order-status';
import api from '../../../services/api'
import Row from './row'
import { Container, Menu, LinkMenu } from './styles'
import formatDate from '../../../utils/formatDate';

function Orders() {
    const [orders, setOrders] = useState([]) // Variável que guarda todos os pedidos.
    const [filteredOrders, setFilteredOrders] = useState([]) //Variável que guarda apenas os pedidos filtrados.
    const [activeStatus, setActiveStatus] = useState([1]) // Variável que guarda todos os pedidos com status ativo.
    const [rows, setRows] = useState([]) // Variável que guarda todas as linhas da tabela.

    useEffect(() => {
        async function loadOrders() { //Função que carrega os pedidos
            const { data } = await api.get('orders')

            setOrders(data)
            setFilteredOrders(data)
        }
        
        loadOrders()
    }, [])

    function createData(order) {
        return {
          name: order.user.name,
          orderId: order._id,
          date: formatDate(order.createdAt),
          status: order.status,
          products: order.products        
        }; // Definidas as informações a serem exibidas na nossa tabela.
      }

      useEffect(() => {
        const newRows = filteredOrders.map(ord => createData(ord)) // Mapeamos os pedidos e atribuímos em nova organiação.
        setRows(newRows)
      }, [filteredOrders]) // Reestruturamos os nossos Rows para que a informação possa chegar de forma mais organizada.

      useEffect(() => {
        if(activeStatus === 1) {
          setFilteredOrders(orders) // Se o status ativo for o Todos mostra todos os produtos.
        } else {
          const statusIndex = 
            status.findIndex(sts => sts.id === activeStatus) //Criamos uma variável que itera os status e busca o status que está ativo.
          const newFilteredOrders = orders.filter(
            order => order.status === [statusIndex].value
          ) //Pegamos todos os pedidos e fazemos um filter neles para busque os pedidos que os status estejam ativos.
          setFilteredOrders(newFilteredOrders) // Quando os ítens estiverem filtrados atribuímos o valor ao newFilteredOrders.
        }
      }, [orders])

      function handleStatus(status){
        if(status.id === 1){
        setFilteredOrders(orders) // Se o status for "Todos", exibimos todos os pedidos.
        } else {
          const newOrders = orders.filter( order => order.status === status.value)
          setFilteredOrders(newOrders) // Caso o status seja diferente de Todos, ele itera e indica o status na variável newOrders.
        }
        setActiveStatus(status.id) // Guarda o id do status que está ativo.
      }

    return (
        <Container>
          <Menu>
            {status && 
              status.map(status => ( // Se status exitir, iteramos status por status
                <LinkMenu 
                  key={status.id}
                  onClick={() => handleStatus(status)}
                  isActiveStatus={activeStatus === status.id} // Verificamos se o id de status recebido é o mesmo do status ativo.
                >
                {status.label}
              </LinkMenu>
            ))}
          </Menu>

          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Pedido</TableCell>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Data do Pedido</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => ( // Mapeamos as linhas
                <Row 
                  key={row.orderId} 
                  row={row}
                  setOrders={setOrders}
                  orders={orders}   
                /> // Pegamos pelo id
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
    )
}

export default Orders