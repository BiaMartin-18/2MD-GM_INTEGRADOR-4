"use client"

import { useState, useEffect } from "react"
import CardDefeito from "@/components/carddefeitos"
import "./defeitos.css"

export default function Defeitos() {
    const [defeitos, setDefeitos] = useState([])
    const [busca, setBusca] = useState("")
    const [filtro, setFiltro] = useState("Todos")

    {/* FILTRAGEM */}
    const filtrados = defeitos.filter((d) => {
        const textoBusca = 
            d.modelo.toLowerCase().includes(busca.toLowerCase()) ||
            d.placa.toLowerCase().includes(busca.toLowerCase()) ||
            d.descricao.toLowerCase().includes(busca.toLowerCase()) ||
            d.status.toLowerCase().includes(busca.toLowerCase())
        
        const statusOk = filtro === "Todos" || d.status === filtro

        return textoBusca && statusOk
    })

    return (
        <div className="defeitos-container">
            <h1 className="titulo">Defeitos</h1>

            {/* FILTROS */}
            <div className="filtros-container">
                <input 
                    type="text"
                    placeholder="Buscar por modelo, placa ou descrição..."
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
                    <option value="Aberto">Aberto</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Resolvido">Resolvido</option>
                </select>
            </div>

            {/* CARDS */}
            <div className="cards-grid">
                {filtrados.map((d) => (
                    <CardDefeito
                        key={d.id}
                        modelo={d.modelo}
                        placa={d.placa}
                        titulo={d.titulo}
                        status={d.status}
                        data={d.data}
                    />
                ))}
            </div>
        </div>
    )
}