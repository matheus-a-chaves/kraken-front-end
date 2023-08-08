import "../assets/styles/Jogador.css";

function Jogador() {
    const imagem = require('../assets/img/escalacao.jpg');
    return (
        <div className="jogador">
            <img className="imagem" src={imagem} />
            <span className="nome">Matheus</span>
        </div>
    );
}

export default Jogador;
