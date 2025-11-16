"use client";
import Head from "next/head";
import "./login.css";
// Certifique-se de que este caminho está correto
import Navbar from "@/components/blocks/Navbar";
// Caminho corrigido para o FinisherParticles
import FinisherParticles from "../../components/FinisherParticles";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Contêiner de Fundo ANIMADO (Fixo na viewport) */}
      <div className="login-background-animated">
        <div className="finisher-canvas-wrapper">
          <FinisherParticles />
        </div>
      </div>

      {/* 3. Contêiner PRINCIPAL de CONTEÚDO (Centraliza o formulário) */}
      <div className="login-wrapper-content">
        <div className="login-wrapper">
          <div className="login-container">
            <div className="form-content">
              <h2>
                <strong>Login Administrador</strong>
              </h2>
              <form className="login-form">
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Entre com seu email"
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Entre com sua senha"
                    required
                  />
                </div>

                <div className="options">
                  <a href="/suporte" className="forgot-password">
                    Problemas com Login?
                  </a>
                </div>

                <button type="submit" className="login-button">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
