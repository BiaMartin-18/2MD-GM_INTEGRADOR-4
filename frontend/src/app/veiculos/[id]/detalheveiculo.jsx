"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./veiculo.css";

export default function DetalhesVeiculo() {
  const { id } = useParams();
  const [veiculo, setVeiculo] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const res = await fetch("http://localhost:3001/api/auditoriasveiculos");
        const lista = await res.json();

        const item = lista.find(v => v.part_number === id);
        setVeiculo(item || null);
      } catch (err) {
        console.error("Erro ao buscar veículo:", err);
      }
    }

    carregar();
  }, [id]);

  if (!veiculo) {
    return <p className="loading">Carregando...</p>;
  }

  return (
    <div className="detalhes-container">
      <div className="colunas">
        {/* Coluna Esquerda (Imagem Grande) */}
        <div className="imagem-area">
          <img
            src={`http://localhost:3001/uploads/${veiculo.imagem}`}
            className="imagem-principal"
            alt={veiculo.modelo}
          />
        </div>

        {/* Coluna Direita (Informações) */}
        <div className="infos-area">
          <h1 className="titulo">{veiculo.modelo}</h1>

          <p className="descricao-curta">
            {veiculo.descrição || "Sem descrição disponível."}
          </p>

          <div className="badges">
            <span className="badge">{veiculo.status_veiculo}</span>
            <span className="badge">{veiculo.grau_defeito}</span>
            <span className="badge">Part Number: {veiculo.part_number}</span>
          </div>

          <div className="box-info">
            <p><strong>Defeito:</strong> {veiculo.defeito}</p>
            <p><strong>Resultado:</strong> {veiculo.resultado}</p>
            <p><strong>Auditor:</strong> {veiculo.auditor_responsavel}</p>
            <p><strong>Data da auditoria:</strong> {veiculo.data_auditoria?.slice(0, 10)}</p>
          </div>
        </div>
      </div>

      <div className="accordion">
        <details>
          <summary>O que causou o defeito?</summary>
          <p>O defeito foi causado pelo desgaste natural do rolamento interno após longo período de uso, agravado pela falta de lubrificação adequada durante revisões anteriores.</p>
        </details>

        <details>
          <summary>Como será feita a manutenção?</summary>
          <p>Será realizada a substituição completa do rolamento e a limpeza da área afetada. Em seguida, aplicaremos nova lubrificação com material de alta performance e faremos o alinhamento final do eixo.</p>
        </details>

        <details>
          <summary>Tempo estimado</summary>
          <p>O tempo estimado para conclusão da manutenção é de aproximadamente 3 horas, considerando testes finais e ajustes complementares.</p>
        </details>

        <details>
          <summary>Peças necessárias</summary>
          <p>Rolamento interno modelo RBX-220, graxa sintética de alta performance, anel de vedação reforçado e parafusos de fixação novos.</p>
        </details>

        <details>
          <summary>Riscos se não corrigir</summary>
          <p>Continuar utilizando o veículo com esse problema pode causar danos à estrutura do eixo, aquecimento excessivo, ruídos mais intensos e risco de travamento durante o uso.</p>
        </details>

        <details>
          <summary>Observações do mecânico</summary>
          <p>Foi identificado um leve desalinhamento no conjunto, possivelmente decorrente de uso intenso. Recomendamos revisão preventiva a cada 6 meses para evitar reincidência.</p>
        </details>

        <details>
          <summary>Histórico de manutenções anteriores</summary>
          <p>Última manutenção realizada há 13 meses, onde foi feita apenas limpeza superficial sem substituição de componentes internos.</p>
        </details>
      </div>

    </div>
  );
}
