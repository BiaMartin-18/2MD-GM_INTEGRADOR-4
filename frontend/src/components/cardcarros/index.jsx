"use client";

import Link from "next/link";
import "./cardcarros.css";

export default function CardVeiculo({ veiculo }) {
    return (
        <div className="card-container">
            <div className="card-main">

                <h2 className="title">{veiculo.modelo}</h2>

                <div className="info">
                    <p><strong>Placa:</strong> {veiculo.placa}</p>
                    <p><strong>Defeito:</strong> {veiculo.defeito}</p>
                    <p><strong>Grau do defeito:</strong> {veiculo.grau_defeito}</p>
                    <p><strong>Status:</strong> {veiculo.status}</p>
                </div>

                <Link href={`/veiculos/${veiculo.id}`} className="add-btn">
                    Ver detalhes do veículo
                </Link>
            </div>
        </div>
    );
}
