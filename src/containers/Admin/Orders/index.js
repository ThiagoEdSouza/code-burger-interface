import React, { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import api from '../../../services/api'
import Row from './row'
import { Container } from './styles'
import formatDate from '../../../utils/formatDate';

function Orders() {
    const [orders, setOrders] = useState([])
    const [rows, setRows] = useState([])

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('orders')

            setOrders(data)
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
        const newRows = orders.map(ord => createData(ord)) // Mapeamos os pedidos e atribuímos em nova organiação.
        setRows(newRows)
      }, [orders]) // Reestruturamos os nossos Rows para que a informação possa chegar de forma mais organizada.


    return (
        <Container>
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
                <Row key={row.orderId} row={row} /> // Pegamos pelo id
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
    )
}

export default Orders