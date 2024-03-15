import React , {useEffect, useState} from 'react'

import { Container, ProductImage, EditIconStyles } from './styles'
import api from '../../../services/api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import formatCurrency from '../../../utils/formatCurrency';

function ListProducts() {
    const [products, setProducts] = useState()
    useEffect(() => {
        async function loadOrders() { //Função que carrega os pedidos
            const { data } = await api.get('products')

            setProducts(data)
        }
        
        loadOrders()
    }, [])

    function isOffer(offerStatus){ //Função para verificar se o produto está ou não em oferta
        if(offerStatus){
           return <CheckIcon style={{color: 'chartreuse'}}/>
        } 
           return <ClearIcon style={{color: 'red'}}/>
    }
    
    return (
        <Container>
           <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Preço</TableCell>
                        <TableCell align='center'>Produto em Oferta</TableCell>
                        <TableCell align='center'>Imagem do Produto</TableCell>
                        <TableCell align='center'>Editar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products && 
                    products.map((product) => (
                    <TableRow
                        key={product.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                    <TableCell component="th" scope="row">
                        {product.name}
                    </TableCell>
                    <TableCell>{formatCurrency(product.price)}</TableCell>
                    <TableCell align='center'>{isOffer(product.offer)}</TableCell>
                    <TableCell align='center'>
                        <ProductImage src={product.url} alt='imagem-do-produto' />
                    </TableCell>
                    <TableCell align='center'>
                        <EditIconStyles />
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
             </Table>
            </TableContainer>
        </Container>
    )
}

export default ListProducts