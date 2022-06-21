const alteraDados = (number, name) => {
    return ({
        type: 'ALTERAR_DADOS',
        number,
        name,
    });
}

export default alteraDados;