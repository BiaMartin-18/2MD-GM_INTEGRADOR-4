import Link from 'next/link'
import './cardcarros.css'

export default function CardVeiculo({ id, modelo, placa, status, imagem, onVerVeiculo }) {
    return (
        <div className="produto-card">
            <div className="produto-img">
                <span
                    className={`badge ${
                        status === "Ativo"
                            ? "ativo"
                            : status === "Em manutenção"
                            ? "manutencao"
                            : "inativo"
                        }`}
                >
                    {status}
                </span>
                <img src={imagem} alt={modelo} />
            </div>

            <div className="produto-info">
                <h2 className="produto-nome">{modelo}</h2>
                <p className="placa">Placa: {placa}</p>
                <a className="ver" href="#" onClick={onVerVeiculo}>Ver detalhes</a>
            </div>
        </div>
    )
}