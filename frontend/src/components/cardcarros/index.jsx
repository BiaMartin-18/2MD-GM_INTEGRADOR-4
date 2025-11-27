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
      data-status={veiculo.status}
      data-resultado={veiculo.resultado}
    >
      <div className="card-header">
        <h4 className="card-title">{veiculo.placa}</h4>
        <i className="bi bi-car-front"></i>
      </div>

      <p><strong>Modelo: </strong>{veiculo.modelo}</p>
      <p><strong>Defeito: </strong>{veiculo.defeito}</p>
      <p><strong>Descrição: </strong>{veiculo.descrição}</p>
      <p><strong>Grau do Defeito: </strong>{veiculo.grau_defeito}</p>
      <p className="status-text"><strong>Status: </strong>{veiculo.status}</p>
      <p><strong>Data da Auditoria: </strong>{formatDataParaCard(veiculo.data)}</p>
      <p><strong>Resultado: </strong>{veiculo.resultado ?? "—"}</p>
      <p><strong>Auditor: </strong>{veiculo.auditor}</p>
    </div>
  );
}
