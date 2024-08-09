function Titulo(props) {
    const nome = props.nome;
    return (

        <h1>Olá {nome} {props.sobrenome}</h1>

    );
}

export default Titulo;
