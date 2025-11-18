"use client";

import Head from "next/head";
import "./login.css";
import Navbar from "@/components/blocks/Navbar";
import FinisherParticles from "../../components/FinisherParticles";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  // Estados para capturar email, senha e erros
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  // Função do submit
  async function handleLogin(e) {
    e.preventDefault();
    setErro(""); // Limpa erros anteriores

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
      });

      const data = await response.json();

      if (!data.sucesso) {
        setErro(data.mensagem || "Erro ao fazer login");
        return;
      }

      // Salvar token
      localStorage.setItem("token", data.dados.token);

      // Redirecionar para admin
      router.push("/admin");
    } catch (error) {
      setErro("Erro ao conectar ao servidor.");
      console.error(error);
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Navbar />

      <div className="login-background-animated">
        <div className="finisher-canvas-wrapper">
          <FinisherParticles />
        </div>
      </div>

      <div className="login-wrapper-content">
        <div className="login-wrapper">
          <div className="login-container">
            <div className="form-content">
              <h2><strong>Login Administrador</strong></h2>

              {/* Exibir erro se existir */}
              {erro && <p className="erro-login">{erro}</p>}

              <form className="login-form" onSubmit={handleLogin}>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Entre com seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Entre com sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
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
