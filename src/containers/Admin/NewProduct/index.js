import React , {useEffect, useState} from 'react'

import { useForm, Controller } from 'react-hook-form'
import { Container, Label, Input, ButtonStyles, LabelUpload } from './styles'
import api from '../../../services/api'
import ReactSelect from 'react-select'
import { yupResolver } from "@hookform/resolvers/yup"
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import * as Yup from 'yup'
import { ErrorMessage } from '../../../components'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

function EditProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { push } = useHistory()
    
    const schema = Yup.object().shape({
        name: Yup.string().required('Nome do Produto é obrigatório'),
        price: Yup.string().required('Preço do Produto é obrigatório'),
        file: Yup.mixed()
            .test( 
                'required', 
                'Obrigatório carregar uma imagem para o produto',
                value => {
                    return value?.length > 0
                }) //Validação para verificar se há imagem carregada
                .test( 
                    'fileSize', 
                    'Tamanho máximo permitido de até 2MB',
                    value => {
                        return value[0]?.size <= 200000
                    }) //Validação para verificar se o tamanho da imagem excede 2MB
                    .test( 
                        'type', 
                        'Suportados somente formatos jpeg e png',
                        value => {
                            return (
                            (value[0]?.type === 'image/jpeg') ||
                            (value[0]?.type === 'image/png')
                            )
                        }) //Validação para verificar se a imagem carregada está nos formatos permitidos.
                    ,
        category: Yup.object().required('Categoria do Produto é obrigatória')
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

        await toast.promise( api.post('products', productDataFormData), {
            pending: 'Criando novo produto...',
            success: 'Produto criado com sucesso',
            error: 'Falha ao criar o produto. Tente novamente.'
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
                    <Input type='text' {...register('name')}/>
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <Label>Preço de Venda</Label>
                    <Input type='number' {...register('price')}/>
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
                    render={({ field}) => {
                        return(
                            <ReactSelect
                                {...field} 
                                options={categories}
                                getOptionLabel={cat => cat.name}
                                getOptionValue={cat => cat.id}
                                placeholder='Selecione a Categoria'
                            />
                        )
                    }}
                    ></Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>

                <ButtonStyles>Adicionar Produto</ButtonStyles>
           </form>
        </Container>
    )
}

export default EditProduct