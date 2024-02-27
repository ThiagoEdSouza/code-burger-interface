const formatDate = date => {
    return new Date(date).toLocaleDateString( //Garantimos que a célula esteja em formato de data
        'pt-Br', { // Definimos a linguagem
            month: 'short', // Abrevia nome do Mês
            day: '2-digit', // Qtd de dígitos do campo Dia
            hour: '2-digit', // Qtd de dígitos do campo Hora
            minute: '2-digit' // Qtd de dígitos do campo Minutos
        }

    ) 
}

export default formatDate