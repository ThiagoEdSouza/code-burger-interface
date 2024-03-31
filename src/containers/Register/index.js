import React from 'react'
import { useForm } from 'react-hook-form'

import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'

import { Button, ErrorMessage } from '../../components'
import RegisterImg from '../../assets/image-sign-up.svg'
import Logo from '../../assets/logo-login.svg'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from './styles'

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .required('* O campo de nome é obrigatório.'),
    email: Yup.string()
      .email('Digite um email válido.')
      .required('O campo de email é obrigatório.'),
    password: Yup.string()
      .required('Campo de senha não pode ser nulo. Digite uma senha.')
      .min(8, 'A Senha deve conter no mínimo 8 caractéres.'),
      confirmPassword: Yup.string()
      .required('* Campo de confirmação de senha é obrigatório.')
      .oneOf([Yup.ref('password')], 'Senhas divergentes. Favor digite novamente.'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })


  const onSubmit = async clientData => {
    try{
      const { status } = await api.post('users', {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      },
      { validateStatus: () => true }
      )

      if( status === 201 || status === 200) {
        toast.success('Dados cadastrados com sucesso!')
      } else if( status === 409) {
        toast.error('Email já cadastrado! Efetue o Login para continuar.')
      } else {
        throw new Error()
      }
    } catch(err) {
      toast.error('Ops... Algo deu errado. Tente novamente mais tarde por favor.')
    }
    
  } 

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="sign-up-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-image" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome:</Label>
          <Input type="text" 
          {...register('name')}
          error={errors.name?.message} 
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          
          <Label>Email:</Label>
          <Input type="email" 
          {...register('email')}
          error={errors.email?.message} 
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha:</Label>
          <Input type="password" 
          {...register('password')}
          error={errors.password?.message}  
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label>Confirmar Senha:</Label>
          <Input type="password" 
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}  
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit"
            style={{
              marginTop: "4%",
              marginBottom: "4%"
            }}
          >Cadastrar</Button>
        </form>

        <SignInLink>
          Já é cadastrado? {' '}
          <Link to="/login">Faça seu Login.</Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

