import React , {useEffect, useState} from 'react'

import { useForm, Controller } from 'react-hook-form'
import { 
    Container, 
    Label, 
    Input, 
    ButtonStyles, 
    LabelUpload, 
    ContainerInput 
} from './styles'

import api from '../../../services/api'
import ReactSelect from 'react-select'
import { yupResolver } from "@hookform/resolvers/yup"
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import * as Yup from 'yup'
import { ErrorMessage } from '../../../components'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { 
        push,
        location: {
            state: {product}
        }     
    } = useHistory()
    
    const schema = Yup.object().shape({
        name: Yup.string().required('Nome do Produto é obrigatório'),
        price: Yup.string().required('Preço do Produto é obrigatório'),
        category: Yup.object().required('Categoria do Produto é obrigatória'),
        offer: Yup.bool()
    })

    const { register, 
        handleSubmit, 
        control, 
        formState: { errors },
        } = useForm({
        resolver: yupResolver(schema)
        })

    const onSubmit = async data => {
        const productDataFormData = new FormData() //Cria a variável e indica que a mesma é do tipo FormData.

        productDataFormData.append('name', data.name)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
        productDataFormData.append('file', data.file[0]) //Definidas as nossas informações em forma de FormData
        productDataFormData.append('offer', data.offer)

        await toast.promise( api.put(`products/${product.id}`, productDataFormData), {
            pending: 'Efetuando as edições do produto...',
            success: 'Produto editado com sucesso',
            error: 'Falha ao editar o produto. Tente novamente.'
        })
        
        setTimeout(() =>{
            push('/listar-produtos')
        }, 3000)
    }

    useEffect(() => {
        async function loadCategories() { //Função que carrega as categorias
            const { data } = await api.get('categories')

            setCategories(data)
        }
        loadCategories()
    }, [])
    
    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Nome</Label>
                    <Input type='text' {...register('name')}
                    defaultValue={product.name}
                    />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <Label>Preço de Venda</Label>
                    <Input type='number' {...register('price')}
                    defaultValue={product.price}
                    />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>

                <div>
                    <LabelUpload>
                        {fileName || (
                            <>
                                <CloudUploadIcon />
                                Carregar a Imagem do Produto
                            </>
                        )}  

                        <input type='file' 
                        id='image-input'
                        accept='image/png, image/jpeg'
                        {...register('file')}
                        onChange = {value => {
                            setFileName(value.target.files[0]?.name)
                        }}/>
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </div>

                <div>        
                    <Controller 
                    name='category' 
                    control={control}
                    defaultValue={product.category}
                    render={({ field}) => {
                        return(
                            <ReactSelect
                                {...field} 
                                options={categories}
                                getOptionLabel={cat => cat.name}
                                getOptionValue={cat => cat.id}
                                placeholder='Selecione a Categoria'
                                defaultValue={product.category}
                            />
                        )
                    }}
                    ></Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>

                <ContainerInput>
                    <input 
                        type='checkbox' 
                        {...register('offer')} 
                        defaultChecked={product.offer}
                    />
                    <Label>Produto em Oferta?</Label>
                </ContainerInput>

                <ButtonStyles>Editar Produto</ButtonStyles>
           </form>
        </Container>
    )
}

export default NewProduct