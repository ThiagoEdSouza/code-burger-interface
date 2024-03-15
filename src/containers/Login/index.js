import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'

import paths from '../../constants/paths'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Button } from '../../components';
import LoginImg from '../../assets/image-sign-in.svg'
import Logo from '../../assets/logo-login.svg'
import { useUser } from '../../hooks/UserContext';
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  ErrorMessage,
  SignUpLink
} from './styles'

export function Login() {
  const history = useHistory()
  const { putUserData, userData } = useUser()

  console.log(userData)

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido.')
      .required('O campo de email é obrigatório.'),
    password: Yup.string()
      .required('Campo de senha não pode ser nulo. Digite uma senha.')
      .min(6, 'A Senha deve conter no mínimo 6 caractéres.'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })


  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Aguarde, Login em Andamento.',
        success: 'Login efetuado com sucesso!',
        error: 'Ops... Algo deu errado, verifique se o email e a senha estão corretos.'
      }
    )

    putUserData(data)

    setTimeout(() =>{
      if(data.admin){
        history.push(paths.Orders) // Caso o usuário seja adm, será direcionado para a página de pedidos
      } else {
        history.push(paths.Home) // Caso não seja adm, será direcionado para a tela home.
      }      
    }, 1000);

  } 

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-image" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
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

          <Button type="submit"
            style={{
              marginTop: "10%",
              marginBottom: "10%"
            }}
          >Entrar</Button>
        </form>

        <SignUpLink>
          Ainda não tem uma conta? {' '} 
          <Link to="/cadastro">Cadastre-se</Link>
        </SignUpLink>
      </ContainerItens>
    </Container>
  )
}

