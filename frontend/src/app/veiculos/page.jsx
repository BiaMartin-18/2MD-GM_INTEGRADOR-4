"use client"

import { useState, useEffect } from "react"
import CardVeiculo from "@/components/cardcarros"
import "./veiculos.css"

export default function Veiculos() {
    const [veiculos, setVeiculos] = useState([])
    const [busca, setBusca] = useState("")
    const [filtro, setFiltro] = useState("Todos")

    const filtrados = veiculos.filter((v) => {
        const textoBusca = 
            v.modelo.toLowerCase().includes(busca.toLowerCase()) ||
            v.status.toLowerCase().includes(busca.toLowerCase()) ||
            v.placa.toLowerCase().includes(busca.toLowerCase())
        
        const statusOk = filtro === "Todos" || v.status === filtro
        return textoBusca && statusOk
    })

    return (
        <div className="veiculos-container">
            <h1 className="titulo">Veículos</h1>

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
                    <option value="Em Manutenção">Em Manutenção</option>
                    <option value="Fora de Uso">Fora de Uso</option>
                </select>
            </div>

            <div className="cards-grid">
                {filtrados.map((v) => (
                    <CardVeiculo
                        key={v.id}
                        modelo={v.modelo}
                        placa={v.placa}
                        status={v.status}
                        imagem={v.imagem}
                    />
                ))}
            </div>
        </div>
    )
}