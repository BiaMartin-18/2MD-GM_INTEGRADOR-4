"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./veiculo.css";

export default function DetalhesVeiculo() {
    const params = useSearchParams();
    const id = params.get("id");

    const [veiculo, setVeiculo] = useState(null);

    useEffect(() => {
        if (!id) return;

        async function carregar() {
            try {
                const res = await fetch(`http://localhost:3000/veiculos/${id}`);
                const json = await res.json();

                setVeiculo({
                    id: json.part_number,
                    modelo: json.modelo,
                    placa: json.part_number,
                    status: json.status_veiculo,
                    defeito: json.defeito,
                    grau_defeito: json.grau_defeito,
                    imagens: json.imagens || ["/placeholder.png"],
                    detalhes: json.detalhes || {
                        causas: "Não informado",
                        procedimento: "Não informado",
                        tempo: "Não informado",
                    },
                });
            } catch (err) {
                console.error("Erro ao carregar veículo:", err);
            }
        }

        carregar();
    }, [id]);


    if (!veiculo) return <p className="carregando">Carregando...</p>;

    return (
        <div className="detalhes-container">
            
            {/* Esquerda (imagens) */}
            <div className="left">
                <div className="main-image">
                    <img src={veiculo.imagens[0]} alt={veiculo.modelo} />
                </div>

                <div className="thumbs">
                    {veiculo.imagens.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            onClick={() => {
                                document.querySelector(".main-image img").src = img;
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Direita (informações) */}
            <div className="right">
                <h1>{veiculo.modelo}</h1>
                <p className="placa">Placa: {veiculo.placa}</p>
                <p className="defeito">{veiculo.defeito}</p>

                <div className="badges">
                    <span>{veiculo.status}</span>
                    <span>Grau: {veiculo.grau_defeito}</span>
                </div>

                <div className="accordion">
                    <details>
                        <summary>O que causou o defeito?</summary>
                        <p>{veiculo.detalhes?.causas}</p>
                    </details>

                    <details>
                        <summary>Como será feita a manutenção?</summary>
                        <p>{veiculo.detalhes?.procedimento}</p>
                    </details>

                    <details>
                        <summary>Tempo estimado</summary>
                        <p>{veiculo.detalhes?.tempo}</p>
                    </details>
                </div>
            </div>
        </div>
    );
}