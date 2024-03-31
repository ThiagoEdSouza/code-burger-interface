import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #373737;
  display: flex;
  
`

export const LoginImage = styled.img`
  height: 100vh;
`

export const ContainerItens = styled.div`
  height: 100vh;
  padding-left: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 30%;
  }
`

export const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: #ffffff;
  margin-top: 5%;
  margin-bottom: 1%;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${ props => props.error ? '2px solid #FFFF00' : 'none'};
  padding-left: 2%;
`

export const SignUpLink = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    color: #ffffff;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }
`