import axios from "axios";

const apiCodeBurger = axios.create({
    baseURL: 'https://code-burger-project-production.up.railway.app/'
})

apiCodeBurger.interceptors.request.use( async config => { // Definimos quais os dados a serem acessados
    const userData = await localStorage.getItem('codeburger:userData') //Refinamos o caminho onde está a variável que queremos
    const token = userData && JSON.parse(userData).token //Indicamos somente o arquivo que queremos e o convertemos para o formato de objeto
    config.headers.authorization = `Bearer ${token}` //Atribuímos o token aos header de autorização e formatamos o mesmo ao formato padrão.
    return config
})

export default apiCodeBurger