"use client";

import { useState, useEffect } from "react";
import CardVeiculo from "@/components/cardcarros/index"; // IMPORTA O CARD CORRETO
import "./admin.css";
import Navbar from "@/components/blocks/Navbar";

export default function Admin() {
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
                    defeito: v.defeito,              // <-- ADICIONE ISSO
                    grau_defeito: v.grau_defeito,    // <-- E ISSO
                    imagem: "/placeholder.png",
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
<Navbar/>
        
        <div className="veiculos-container">
            <h1 className="titulo">Administrador</h1>

            {/* FILTROS */}
            <div className="filtros-container">
                <input
                    type="text"
                    placeholder="Buscar por modelo, placa ou status..."
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
                    <option value="Ativo">Ativo</option>
                    <option value="Manutenção">Manutenção</option>
                    <option value="Inativo">Inativo</option>
                </select>
            </div>

            <div className="cards-grid">
                {filtrados.map((v) => (
                    <CardVeiculo
                        key={v.id}
                        id={v.id}
                        modelo={v.modelo}
                        placa={v.placa}
                        status={v.status}
                        defeito={v.defeito}
                        grau_defeito={v.grau_defeito}
                        imagem={v.imagem}
                        onVerVeiculo={() => alert(`Veículo: ${v.placa}`)}
                    />
                ))}
            </div>
        </div>
        </>
    );
}

