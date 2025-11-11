import React from 'react';
import './dashboard.css';

// Dados simulados para o componente DashboardUI
const mockDashboardData = {
    saudacao: "Good Morning, Dr. Anderson!",
    relatoriosPendentes: {
        total: 52,
        noReport: 12,
        data: [10, 5, 20, 8] // Dados de exemplo
    },
    tendenciaSaude: {
        percentual: "75%",
        aumento: 1.5,
        data: [50, 60, 70, 65] // Dados de exemplo
    },
    checkup: {
        proximo: "Routine Checkup - 10:00 AM",
        concluido: "Lab Results - 02/05/2025"
    },
    informacaoMedica: {
        paciente: "John Doe (ID: JD1985)",
        historico: "Hypertension, Asthma",
        medicamentos: "Lisinopril, Albuterol",
        alergias: "Penicillin",
        medicoPrimario: "Dr. L. Smith"
    },
    medicos: [
        { nome: "Dr. L. Smith", hospital: "City General", iniciais: "LS" },
        { nome: "Dr. E. Johnson", hospital: "St. Jude's", iniciais: "EJ" },
    ]
};

// Componente Placeholder para Link do Next.js
const DummyLink = ({ children, className }) => (
    <button className={`btn btn-sm btn-link ${className}`}>{children}</button>
);

// Componentes de Exemplo menores (Classes corrigidas)
const CardNoticias = () => (
  <div className="card cardNews text-white mb-4">
    <div className="card-body">
      <div className="newsIcon">
        <i className="bi bi-bell-fill fs-4"></i>
      </div>
      <h5 className="card-title fw-bold">News From The Doctor</h5>
      <p className="card-text small">Our process is designed to make booking appointments, consultations, and treatments easy and convenient for you.</p>
    </div>
  </div>
);

const GraficoTendencia = ({ percentual, aumento, data }) => (
  <div className="card shadow-sm mb-4 h-100 flex-grow-1">
    <div className="card-body">
      <h5 className="card-title fw-semibold">Health Trend Chart</h5>
      <div className="d-flex align-items-center mb-3">
        <h1 className="me-2 fw-bolder text-dark-emphasis">{percentual}</h1>
        <span className={`badge ${aumento > 0 ? 'bg-success' : 'bg-danger'} py-2`}>{aumento > 0 ? `+${aumento}%` : `${aumento}%`}</span>
      </div>
      <div className="chartPlaceholder">[Gráfico de Tendência: {data.join(', ')}]</div>
      <div className="d-flex justify-content-between small mt-2 text-muted">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span>
      </div>
    </div>
  </div>
);

const ProgressoCheckup = ({ checkup }) => (
  <div className="card shadow-sm mb-4 h-100">
    <div className="card-body">
      <h5 className="card-title fw-semibold">Checkup progress</h5>
      <div className="d-flex align-items-center mb-4">
        <div className="dateCircle bg-primary text-white">22</div>
        <div className="ms-3">
          <p className="mb-0 fw-bold">{checkup.proximo}</p>
          <small className="text-muted">Próximo</small>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="dateCircle bg-success text-white">16</div>
        <div className="ms-3">
          <p className="mb-0 fw-bold">{checkup.concluido}</p>
          <small className="text-muted">Concluído</small>
        </div>
      </div>
    </div>
  </div>
);


// ----------------------------------------------------------------------
// COMPONENTE PRINCIPAL (RENOMEADO PARA App ou mantenha DashboardUI se for a exportação)
// ----------------------------------------------------------------------

export default function DashboardUI({ data = mockDashboardData }) {
  const { 
    saudacao, 
    relatoriosPendentes, 
    tendenciaSaude, 
    checkup, 
    informacaoMedica, 
    medicos 
  } = data;

  return (
    <>
      {/* 1. CDN DO BOOTSTRAP E ÍCONES (Necessário para a estilização) */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

      

      <div className="container-fluid dashboardContainer">
        
        {/* Cabeçalho */}
        <header className="d-flex justify-content-between align-items-center pt-4 pb-3">
          <h1 className="text-dark-emphasis fw-light fs-3">{saudacao}</h1>
          <button className="btn btn-primary" style={{backgroundColor: '#4E5DE8', borderColor: '#4E5DE8'}}>
            <i className="bi bi-plus-circle-fill me-2"></i> + Check new
          </button>
        </header>

        {/* Barra de Ações (Filtros) */}
        <div className="d-flex flex-wrap align-items-center mb-4 gap-2">
          <button className="botao"><i className="class=bi bi-filter me-1"></i> Filter</button>
          <button className="btn btn-outline-secondary"><i className="bi bi-calendar me-1"></i> Monthly</button>
          <button className="btn btn-outline-secondary me-auto"><i className="bi bi-download me-1"></i> Download Data</button>
          <button className="btn btn-outline-secondary"><i className="bi bi-search me-1"></i> Search</button>
          <button className="btn btn-outline-secondary d-none d-md-block"><i className="bi bi-headset me-1"></i> Support</button>
          <button className="btn btn-outline-secondary d-none d-lg-block"><i className="bi bi-layout-text-sidebar-reverse me-1"></i> Content Layout</button>
        </div>

        {/* LINHA SUPERIOR (3 COLUNAS) */}
        <div className="row">
          
          {/* Coluna 1: Relatórios Pendentes (Gráfico Esquerdo) */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-semibold">Health Report Pending</h5>
                <div className="d-flex justify-content-start mb-3">
                  <span className="badge text-bg-secondary me-2">{relatoriosPendentes.total} Report</span>
                  <span className="badge bg-primary text-white" style={{backgroundColor: '#4E5DE8 !important'}}>{relatoriosPendentes.noReport} No Report</span>
                </div>
                <div className="lineChartPlaceholder">[Gráfico de Linha: {relatoriosPendentes.data.join(', ')}]</div>
                <div className="d-flex justify-content-between small mt-2 text-muted">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Notícias e Tendência */}
          <div className="col-lg-4 col-md-6 mb-4 d-flex flex-column">
            <CardNoticias />
            <GraficoTendencia 
              percentual={tendenciaSaude.percentual} 
              aumento={tendenciaSaude.aumento} 
              data={tendenciaSaude.data} 
            />
          </div>

          {/* Coluna 3: Progresso Checkup */}
          <div className="col-lg-4 col-md-12 mb-4">
            <ProgressoCheckup checkup={checkup} />
          </div>
        </div>

        {/* LINHA INFERIOR (3 COLUNAS) */}
        <div className="row mt-2">

          {/* Informações Médicas */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title fw-semibold">Medical Information</h5>
                  <DummyLink href="#">See Details</DummyLink>
                </div>
                <p className="text-primary fw-bold mb-1">{informacaoMedica.paciente}</p>
                <small className="text-muted">Pasien</small>
                <hr />
                <div className="row small">
                  <div className="col-6 mb-2">
                    <p className="mb-0 fw-bold">Medical History</p>
                    <p className="text-muted">{informacaoMedica.historico}</p>
                  </div>
                  <div className="col-6 mb-2">
                    <p className="mb-0 fw-bold">Current Medications</p>
                    <p className="text-muted">{informacaoMedica.medicamentos}</p>
                  </div>
                  <div className="col-6">
                    <p className="mb-0 fw-bold">Allergies</p>
                    <p className="text-muted">{informacaoMedica.alergias}</p>
                  </div>
                  <div className="col-6">
                    <p className="mb-0 fw-bold">Primary Physician</p>
                    <p className="text-muted">{informacaoMedica.medicoPrimario}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Relatório de Saúde do Paciente */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title fw-semibold">Patient health report</h5>
                  <DummyLink href="#">See Details</DummyLink>
                </div>
                <div className="barChartPlaceholder">[Gráfico de Barras]</div>
                 <div className="d-flex justify-content-between small mt-2 text-muted">
                   <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Meu Doutor */}
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title fw-semibold">My Doctor</h5>
                  <DummyLink href="#">See Details</DummyLink>
                </div>
                <ul className="list-group list-group-flush">
                  {medicos.map((medico, index) => (
                      <li key={index} className="list-group-item d-flex align-items-center border-0 p-0 py-2">
                        <div className="doctorAvatar">{medico.iniciais}</div>
                        <div className="ms-3">
                          <p className="mb-0 fw-bold">{medico.nome}</p>
                          <small className="text-muted">{medico.hospital}</small>
                        </div>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}