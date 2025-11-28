"use client";

import { useState, useEffect } from "react";
import CardVeiculos from "@/components/cardcarros";
import "./veiculos.css";
import Navbar from "@/components/blocks/Navbar";
import FinisherParticles from "@/components/FinisherParticles";

export default function Veiculos() {
    const [veiculos, setVeiculos] = useState([]);
    const [busca, setBusca] = useState("");
    const [filtroStatus, setFiltroStatus] = useState("Todos os status");
    const [filtroResultado, setFiltroResultado] = useState("Todos os resultados");

    useEffect(() => {
        async function carregar() {
            try {
                const res = await fetch("http://localhost:3001/api/auditoriasveiculos");
                const json = await res.json();

                // Sua API deve retornar uma lista direta ou algo como { sucesso: true, dados: [...] }
                const lista = json.dados || json.veiculos || json || [];

                // Converter para o formato que o front usa
                const convertidos = lista.map((v) => ({
                    id: v.part_number,
                    placa: v.part_number,
                    modelo: v.modelo,
                    descrição: v.descrição ?? "—",
                    defeito: v.defeito,
                    grau_defeito: v.grau_defeito ?? "—",
                    status: v.status_veiculo ?? "—",
                    data: v.data_auditoria ?? "—",
                    auditor: v.auditor_nome ?? "—",

                    resultado: v.resultado ?? "—",
                }));

                setVeiculos(convertidos);
            } catch (error) {
                console.error("Erro ao carregar veículos:", error);
            }
        }

        carregar();
    }, []);

    // FILTRO DE BUSCA + STATUS
    const filtrados = veiculos.filter((v) => {
        const textoBusca =
            v.modelo.toLowerCase().includes(busca.toLowerCase()) ||
            v.status.toLowerCase().includes(busca.toLowerCase()) ||
            v.placa.toLowerCase().includes(busca.toLowerCase());

        const statusOk = filtroStatus === "Todos os status" || v.status === filtroStatus;

        const resultadoOk = filtroResultado === "Todos os resultados" || v.resultado === filtroResultado;

        return textoBusca && statusOk && resultadoOk;
    });

    return (
        <>
            <div className="hero-wrapper">
                <Navbar />
                <section className="hero section">
                    <FinisherParticles />

                    <div className="heroContent">
                        <h1 className="titulo text-white fw-bold mb-5">
                            Veículos
                        </h1>

                        <div className="filtros-container mt-5">
                            <input
                                type="text"
                                placeholder="Modelo, placa ou status..."
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                                className="input-busca"
                            />

                            <select
                                value={filtroStatus}
                                onChange={(e) => setFiltroStatus(e.target.value)}
                                className="select-filtro"
                            >
                                <option value="Todos os status">Todos os status</option>
                                <option value="Manutenção">Manutenção</option>
                                <option value="Aguardando revisão">Aguardando revisão</option>
                            </select>

                            <select
                                value={filtroResultado}
                                onChange={(e) => setFiltroResultado(e.target.value)}
                                className="select-filtro"
                            >
                                <option value="Todos os resultados">Todos os resultados</option>
                                <option value="Aprovado">Aprovado</option>
                                <option value="Reprovado">Reprovado</option>
                            </select>
                        </div>
                    </div>
                </section>
            </div>

            <div className="cards-grid">
                {filtrados.map((v, index) => (
                    <CardVeiculos key={`${v.part_number}-${index}`} veiculo={v} />
                ))}

            </div>
        </>
    );
}
