import "./carddefeitos.css"

export default function CardDefeito({id, modelo, placa, status, imagem, titulo, data, onVerDefeito}) {
    return (
        <div className="defeito-card">
            <div className="defeito-img">
                <img src={imagem} alt={modelo} />
            </div>

            <div className="defeito-info">
                <h3 className="defeito-nome">{modelo}</h3>
                <p className="placa">Placa: {placa}</p>
                <p className="defeito-titulo">{titulo}</p>
                <span
                    className={`status ${status.replace("", "-")}`}
                >
                    {status}
                </span>
                <p className="data">Registrado em: {data}</p>
                <a className="ver" href="#" onClick={onVerDefeito}>Ver detalhes do defeito</a>
            </div>
        </div>
    )
}