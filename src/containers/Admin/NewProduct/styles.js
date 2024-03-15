import styled from 'styled-components'
import { Button } from '../../../components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        background: #565656;
        border-radius: 10px;
        padding: 30px;
    }
`

export const Label = styled.p`
    font-size: 14px;
    color: #FFFFFF;
    margin-bottom: 3px;
`

export const Input = styled.input`
    height: 40px;
    border-radius: 8px;
    box-shadow: p 4px 14px rgba(0, 0, 0, 0.1);
    border: none;
    margin-bottom: 25px;
    width: 100%;
    min-width: 280px;
`

export const ButtonStyles = styled(Button)`
    width: 100%;
    margin-top: 25px;
`

export const LabelUpload = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px dashed #FFFFFF;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
    color: #FFFFFF;
    justify-content: center;
    gap: 5px;

    input {
        opacity: 0;
        width: 1px;
    }
`