import "../assets/styles/Campo.css";
import Jogador from "./Jogador";

function Campo() {

    return (
        <div className="container">
            <div className="select__button">
                <div className="select_all_not">
                    <span>Selecione todos</span>
                    <span>Desmarque todos</span>
                </div>
                <div className="alert_critic">
                    <div id="alerta" >Alertas</div>
                    <div className="defaut-active" id="critica" >Críticas</div>
                </div>
            </div>
        </div>
    );
}

export default Campo;
