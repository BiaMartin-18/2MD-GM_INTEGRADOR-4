"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/blocks/Navbar";
import "./auditor.css";

// Funções para chamar o backend
async function createVeiculo(veiculo) {
  const resp = await fetch("http://localhost:3001/api/auditoriasveiculos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(veiculo),
  });
  return await resp.json();
}

async function updateVeiculo(veiculo) {
  const resp = await fetch(`http://localhost:3001/api/auditoriasveiculos/${veiculo.old_part_number}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(veiculo),
  });
  return await resp.json();
}

async function deleteVeiculo(id) {
  const resp = await fetch(`http://localhost:3001/api/auditoriasveiculos/${id}`, {
    method: "DELETE",
  });
  return await resp.json();
}

// HeroSectionCRUD (mantive igual)
const HeroSectionCRUD = () => (
  <section className="hero-frontier-style position-relative">
    <div className="container position-relative z-2 py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-1 text-white">
          <h1 className="hero-frontier-title fw-bold">
            Bem-vindo ao Controle PDI
          </h1>
          <p className="hero-frontier-description mb-4 p-3">
            Gerencie, audite e otimize sua frota de veículos com eficiência e
            precisão.
          </p>
          <div className="d-flex gap-3 justify-content-start">
            <button className="animated-button">
              <span className="text">Começar Agora</span>
              <span className="circle"></span>
            </button>
          </div>
        </div>
        <div className="col-lg-6 order-lg-2 position-relative d-flex justify-content-center">
          <Image
            src="/imagens/tracker-GM.jpg"
            alt="Gerenciamento de veículos"
            width={900}
            height={680}
            className="hero-image-frontier shadow-lg"
            priority
          />
          <div className="overlay-label-frontier top-right-label-frontier shadow-sm">
            <i className="bi bi-wrench icone"></i>
            <p className="label-text-frontier">Edição de Auditorias</p>
          </div>
          <div className="overlay-label-frontier middle-left-label-frontier shadow-sm">
            <i className="bi bi-wrench-adjustable icone"></i>
            <p className="label-text-frontier">Registro de Defeitos</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Formata ISO 8601 para "DD do M de YYYY, HhMM"
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

export default function VeiculosCRUD() {
  const [veiculos, setVeiculos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVeiculo, setCurrentVeiculo] = useState(null);

  // formulário com campos novos de data/hora separados
  const [form, setForm] = useState({
    id: null,
    placa: "",
    modelo: "",
    defeito: "",
    descrição: "",
    grau_defeito: "",
    status_veiculo: "",
    data_auditoria: "", // YYYY-MM-DD for input[type=date]
    hora_auditoria: "", // HH:MM for input[type=time]
    resultado: "",
    auditor_responsavel: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  // fetch function reutilizável
  async function fetchAuditorias() {
    try {
      const resp = await fetch("http://localhost:3001/api/auditoriasveiculos");
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();

      const veiculosTransformados = data.map((item) => ({
        id: item.part_number ?? `${Math.random().toString(36).slice(2, 9)}`,
        placa: item.part_number ?? "—",
        modelo: item.modelo ?? "—",
        defeito: item.defeito ?? "—",
        auditoria: {
          descrição: item.descrição ?? "—",
          grau: item.grau_defeito ?? "—",
          status: item.status_veiculo ?? "—",
          data: item.data_auditoria ?? null, // mantém ISO 8601
          resultado: item.resultado ?? "—",
          responsavel: item.auditor_responsavel ?? "—",
        },
      }));

      setVeiculos(veiculosTransformados);
    } catch (err) {
      console.error("Erro ao buscar auditorias:", err);
    }
  }

  useEffect(() => {
    fetchAuditorias();
  }, []);

  const openModal = (veiculo = null) => {
    if (veiculo) {
      const dbDateTime = veiculo.auditoria?.data ?? "";
      let datePart = "";
      let timePart = "";
      if (dbDateTime) {
        const date = new Date(dbDateTime);
        if (!isNaN(date)) {
          datePart = date.toISOString().slice(0, 10); // YYYY-MM-DD
          timePart = date.toTimeString().slice(0,5);  // HH:MM
        }
      }

      setCurrentVeiculo(veiculo);
      setForm({
        id: veiculo.id ?? null,
        placa: veiculo.placa ?? "",
        modelo: veiculo.modelo ?? "",
        defeito: veiculo.defeito ?? "",
        descrição: veiculo.auditoria?.descrição ?? "",
        grau_defeito: veiculo.auditoria?.grau ?? "",
        status_veiculo: veiculo.auditoria?.status ?? "",
        data_auditoria: datePart,
        hora_auditoria: timePart,
        resultado: veiculo.auditoria?.resultado ?? "",
        auditor_responsavel: veiculo.auditoria?.responsavel ?? "",
      });
    } else {
      setCurrentVeiculo(null);
      setForm({
        id: null,
        placa: "",
        modelo: "",
        defeito: "",
        descrição: "",
        grau_defeito: "",
        status_veiculo: "",
        data_auditoria: "",
        hora_auditoria: "",
        resultado: "",
        auditor_responsavel: "",
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVeiculo(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Salvar (POST ou PUT) — build data_auditoria as "YYYY-MM-DD HH:MM:SS"
  const handleSave = async (e) => {
    e.preventDefault();

    let dataAjustada = null;
    if (form.data_auditoria && form.hora_auditoria) {
      dataAjustada = `${form.data_auditoria} ${form.hora_auditoria}:00`;
    }

    const veiculoData = {
      part_number: form.placa,
      old_part_number: currentVeiculo?.placa,
      modelo: form.modelo,
      defeito: form.defeito,
      descrição: form.descrição,
      grau_defeito: form.grau_defeito,
      status_veiculo: form.status_veiculo,
      data_auditoria: dataAjustada,
      resultado: form.resultado,
      auditor_responsavel: form.auditor_responsavel,
    };

    try {
      if (currentVeiculo) {
        await updateVeiculo({ ...veiculoData, old_part_number: currentVeiculo.placa });
      } else {
        await createVeiculo(veiculoData);
      }
      await fetchAuditorias();
      closeModal();
    } catch (err) {
      console.error("Erro ao salvar veículo:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Tem certeza que deseja excluir este veículo?")) return;

    try {
      await deleteVeiculo(id);
      setVeiculos((prev) => prev.filter((v) => v.id !== id));
    } catch (err) {
      console.error("Erro ao deletar veículo:", err);
    }
  };

  const filteredVeiculos = veiculos.filter(
    (v) =>
      (v.placa && v.placa.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (v.modelo && v.modelo.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <Navbar />
      <HeroSectionCRUD />

      <section className="features-section veiculos-crud-section">
        <div className="crud-container">
          <h3 className="section-subtitle">VISÃO GERAL</h3>
          <h2 className="section-title">Painel de Controle de Veículos</h2>
          <p className="section-description">
            Utilize as ferramentas abaixo para gerenciar os veículos da sua frota.
          </p>

          <div className="crud-actions">
            <button
              className="botao-ferramenta create-button"
              onClick={() => openModal()}
            >
              <i className="bi bi-plus-lg"></i> Novo Veículo
            </button>

            <input
              type="text"
              placeholder="Buscar por Placa ou Modelo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="cards-grid crud-grid">
            {filteredVeiculos.length > 0 ? (
              filteredVeiculos.map((veiculo) => (
                <div
                  key={veiculo.id}
                  className="feature-card veiculo-card"
                  data-status={veiculo.defeito && veiculo.defeito !== "—" ? "pendente" : "ok"}
                >
                  <div className="card-header">
                    <h4 className="card-title">{veiculo.placa}</h4>
                    <i className="bi bi-car-front"></i>
                  </div>

                  <p className="card-text"><strong>Modelo:</strong> {veiculo.modelo}</p>
                  <p className="card-text"><strong>Defeito:</strong> {veiculo.defeito}</p>

                  <hr />
                  <p className="card-text"><strong>Descrição:</strong> {veiculo.auditoria?.descrição ?? "—"}</p>
                  <p className="card-text"><strong>Grau do Defeito:</strong> {veiculo.auditoria?.grau ?? "—"}</p>
                  <p className="card-text"><strong>Status:</strong> {veiculo.auditoria?.status ?? "—"}</p>
                  <p className="card-text"><strong>Data Auditoria:</strong> {formatDataParaCard(veiculo.auditoria?.data)}</p>
                  <p className="card-text"><strong>Resultado:</strong> {veiculo.auditoria?.resultado ?? "—"}</p>
                  <p className="card-text"><strong>Auditor:</strong> {veiculo.auditoria?.responsavel ?? "—"}</p>

                  <div className="card-actions">
                    <button className="edit-btn" onClick={() => openModal(veiculo)}>
                      <i className="bi bi-pencil-square"></i> Editar
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(veiculo.id)}>
                      <i className="bi bi-trash"></i> Excluir
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="section-description no-results">
                Nenhum veículo encontrado.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* --- Modal Atualizado --- */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div
            className="modal-content"
            style={{
              maxHeight: "90vh",
              overflowY: "auto",
              width: "90%",
              maxWidth: "520px",
              margin: "auto",
            }}
          >
            <h3 className="modal-title">
              {currentVeiculo ? "Editar Veículo" : "Novo Cadastro de Veículo"}
            </h3>

            <form onSubmit={handleSave}>
              {[{ label: "Placa", name: "placa" },
                { label: "Modelo", name: "modelo" },
                { label: "Defeito", name: "defeito" },
                { label: "Descrição", name: "descrição" },
                { label: "Grau do Defeito", name: "grau_defeito" },
                { label: "Status", name: "status_veiculo" },
                { label: "Resultado", name: "resultado" },
                { label: "Auditor", name: "auditor_responsavel" }
              ].map((field) => (
                <div className="form-group" key={field.name}>
                  <label>{field.label}:</label>
                  <input
                    type="text"
                    name={field.name}
                    value={form[field.name] || ""}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              ))}

              <div className="form-group">
                <label>Data da Auditoria:</label>
                <input
                  type="date"
                  name="data_auditoria"
                  value={form.data_auditoria || ""}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Hora da Auditoria:</label>
                <input
                  type="time"
                  name="hora_auditoria"
                  value={form.hora_auditoria || ""}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 12 }}>
                <button type="button" onClick={closeModal} className="cancel-btn">Cancelar</button>
                <button type="submit" className="save-btn">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
