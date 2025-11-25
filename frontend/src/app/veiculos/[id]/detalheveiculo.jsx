"use client";

import { useEffect, useState } from "react";

export default function DetalhesVeiculo({ vehicleId }) {
  const [veiculo, setVeiculo] = useState(null);

  useEffect(() => {
    if (!vehicleId) return;

    async function carregar() {
      try {
        const res = await fetch(`http://localhost:3001/api/veiculos/${vehicleId}`);
        const json = await res.json();

        if (json.veiculos && json.veiculos.length > 0) {
          setVeiculo(json.veiculos[0]);    // 👈 AGORA FUNCIONA!
        } else {
          console.error("Nenhum veículo encontrado");
        }

      } catch (err) {
        console.error("Erro ao carregar veículo:", err);
      }
    }

    carregar();
  }, [vehicleId]);

  if (!veiculo) return <p style={{ color: "white" }}>Carregando...</p>;

  return (
    <div style={{ padding: 20, color: "white" }}>
      <h1>{veiculo.modelo}</h1>
      <p><strong>Placa:</strong> {veiculo.part_number}</p>
      <p><strong>Status:</strong> {veiculo.status_veiculo}</p>
      <p><strong>Defeito:</strong> {veiculo.defeito}</p>
      <p><strong>Grau:</strong> {veiculo.grau_defeito}</p>

      <hr />

      <h3>Detalhes</h3>
      <p>{veiculo.descrição || "Sem descrição"}</p>
    </div>
  );
}
