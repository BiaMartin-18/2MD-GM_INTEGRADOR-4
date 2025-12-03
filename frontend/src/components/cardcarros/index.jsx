"use client";
import "./cardcarros.css"

export default function CardVeiculos({ veiculo }) {

    function formatDataParaCard(isoString) {
  if (!isoString) return "—";
  const date = new Date(isoString);
  if (isNaN(date)) return isoString;

  const dia = date.getDate().toString().padStart(2, "0");
  const mes = (date.getMonth() + 1).toString().padStart(2, "0"); // 0-11
  const ano = date.getFullYear();
  const horas = date.getHours().toString().padStart(2, "0");
  const minutos = date.getMinutes().toString().padStart(2, "0");

  return `${dia}/${mes}/${ano} às ${horas}:${minutos}`;
}

  return (
    <div
  className="feature-card veiculo-card"
  data-status={veiculo.status ? veiculo.status.toLowerCase() : ""}
  data-resultado={veiculo.resultado ? veiculo.resultado.toLowerCase() : ""}
>

      <div className="card-header">
        <h4 className="card-title">{veiculo.placa}</h4>
        <i className="bi bi-car-front"></i>
      </div>

      <p className="text-white"><strong>Modelo: </strong>{veiculo.modelo}</p>
      <p className="text-white"><strong>Defeito: </strong>{veiculo.defeito}</p>
      <p className="text-white"><strong>Descrição: </strong>{veiculo.descrição}</p>
      <p className="text-white"><strong>Grau do Defeito: </strong>{veiculo.grau_defeito}</p>
      <p className="status-text"><strong>Status: </strong>{veiculo.status}</p>
      <p className="text-white"><strong>Data da Auditoria: </strong>{formatDataParaCard(veiculo.data)}</p>
      <p className="text-white"><strong>Resultado: </strong>{veiculo.resultado ?? "—"}</p>
      <p className="text-white"><strong>Auditor: </strong>{veiculo.auditor}</p>
    </div>
  );
}
