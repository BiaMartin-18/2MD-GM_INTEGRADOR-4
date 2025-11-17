import "./cardcarros.css";

export default function CardVeiculo({
    id,
    modelo,
    placa,
    status,
    imagem,
    defeito,
    grau_defeito,
    onVerVeiculo
}) {
    return (
        <div className="produto-card">
            <div className="produto-img">
                <span
                    className={`badge ${
                        status === "Ativo"
                            ? "ativo"
                            : status === "Manutenção"
                            ? "manutencao"
                            : "inativo"
                    }`}
                >
                    {status}
                </span>

                <img
                    src={imagem || "/placeholder.png"}
                    alt={modelo}
                />
            </div>

            <div className="produto-info">
                <h2 className="produto-nome">{modelo}</h2>

                <p className="placa">Part Number: {placa}</p>

                <p className="defeito">
                    <strong>Defeito:</strong> {defeito}
                </p>

                <p className="grau-defeito">
                    <strong>Grau:</strong> {grau_defeito}
                </p>

                <button className="ver" onClick={onVerVeiculo}>
                    Ver detalhes
                </button>
            </div>
        </div>
    );
}
