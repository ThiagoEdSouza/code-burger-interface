import React from 'react'
import ReactSelect from 'react-select'

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import status from './order-status'
import api from '../../../services/api'
import { ProductsImg } from './styles'

function Row({ row }) {
    const [open, setOpen] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    async function setNewStatus(id, status) {
      setIsLoading(true)
      try{
        await api.put(`orders/${id}`, { status })
      } catch(err){
        console.error(err)
      } finally {
        setIsLoading(false)
      }

  }
    
      return (
        <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
              {row.orderId}
            </TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>
              <ReactSelect 
              options={status} // Importamos de onde queremos buscar as opções
              menuPortalTarget={document.body} // Permitimos que o select se sobreponha sobre as demilitações da tabela.
              placeholder='Situação do Pedido' // Determinamos o label do select.
              defaultValue={
                status.find(option => option.value === row.status) || null
              } //Definimos um valor padrão para o nosso status.
              onChange={ newStatus => {
                setNewStatus(row.orderId, newStatus.value)
              }} // Altera no back-end o valor de status do pedido.
              isLoading={isLoading} // Atribuímos o loading na troca de status.
              />       
            </TableCell>  
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    Pedido
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Produto</TableCell>
                        <TableCell>Categoria</TableCell>
                        <TableCell>Quantidade</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {row.products.map((productRow) => (
                        <TableRow key={productRow.id}>
                          <TableCell>
                            <ProductsImg 
                              src={productRow.url} 
                              alt="imagem-do-produto" />
                          </TableCell>
                          <TableCell>{productRow.name}</TableCell>
                          <TableCell>{productRow.category}</TableCell>
                          <TableCell component="th" scope="row">
                            {productRow.quantity}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      );
    }
    
    Row.propTypes = {
      row: PropTypes.shape({
        name: PropTypes.string.isRequired,
        orderId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(
          PropTypes.shape({
            quantity: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
          }),
        ).isRequired,
        
      }).isRequired
}

export default Row