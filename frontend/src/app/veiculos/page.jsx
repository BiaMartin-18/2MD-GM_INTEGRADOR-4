"use client";

import { useState, useEffect } from "react";
import CardVeiculo from "@/components/cardcarros/index";
import "./veiculos.css";
import Navbar from "@/components/blocks/Navbar";
import FinisherParticles from "@/components/FinisherParticles";

export default function Veiculos() {
    const [veiculos, setVeiculos] = useState([]);
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState("Todos");

    useEffect(() => {
        async function carregar() {
            try {
                const res = await fetch("http://localhost:3001/veiculos");
                const json = await res.json();

                // Sua API retorna: { sucesso: true, veiculos: [...] }
                const lista = json.veiculos || [];

                // Ajustar nomes para o frontend
                const convertidos = lista.map((v) => ({
                    id: v.part_number,
                    modelo: v.modelo,
                    placa: v.part_number,
                    status: v.status_veiculo,
                    defeito: v.defeito,              
                    grau_defeito: v.grau_defeito,    
                    //imagem: "/placeholder.png",
                }));

                setVeiculos(convertidos);
            } catch (error) {
                console.error("Erro ao carregar veículos:", error);
            }
        }

        carregar();
    }, []);

    // FILTRAR + BUSCAR
    const filtrados = veiculos.filter((v) => {
        const textoBusca =
            v.modelo.toLowerCase().includes(busca.toLowerCase()) ||
            v.status.toLowerCase().includes(busca.toLowerCase()) ||
            v.placa.toLowerCase().includes(busca.toLowerCase());

        const statusOk = filtro === "Todos" || v.status === filtro;

        return textoBusca && statusOk;
    });

    return (
        <>
            <div className="hero-wrapper">
                <Navbar />
                <section className="hero section">
                    <FinisherParticles />
                    {/* Conteúdo do Hero - Deve ficar acima do FinisherParticles */}
                    <div className="heroContent">
                        {/* Título */}
                        <h1 className="titulo text-white fw-bold mb-5">
                            Veículos
                        </h1>
                        {/* Filtro */}
                        <div className="filtros-container mt-5">
                            <input
                                type="text"
                                placeholder="Modelo, placa ou status..."
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                                className="input-busca"
                            />

                            <select
                                value={filtro}
                                onChange={(e) => setFiltro(e.target.value)}
                                className="select-filtro"
                            >
                                <option value="Todos">Todos</option>
                                <option value="Manutenção">Manutenção</option>
                                <option value="Inativo">Aguardando revisão</option>
                            </select>
                        </div>
                    </div>
                </section>
            </div>

            <div className="cards-grid">
                {filtrados.map((v) => (
                    <CardVeiculo
                        key={v.id}
                        veiculo={v}
                    />
                ))}
            </div>
        </>
    );
}

