"use client";

import Head from "next/head";
import Navbar from "@/components/blocks/Navbar";
import FinisherParticles from "../../components/FinisherParticles";
import { useState } from "react";
import { useRouter } from "next/navigation";

import "./login.css";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setErro("");

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (!data.sucesso) {
        setErro(data.mensagem || "Erro ao fazer login");
        return;
      }

      localStorage.setItem("token", data.dados.token);
      router.push("/auditor");
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

      {/* CONTAINER GERAL */}
      <div className="login-page">
        {/* COLUNA ESQUERDA */}
        <div className="login-left">
          <div className="form-box">
            <h2 className="title">
              {" "}
              <span className="big-text">Bem</span>Vindo(a)!
            </h2>

            {erro && <p className="erro-login">{erro}</p>}

            <form onSubmit={handleLogin}>
              {/* EMAIL */}
              <div className="form custom-form">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="input-border"></span>
              </div>

              {/* SENHA */}
              <div className="form custom-form">
                <input
                  className="input"
                  type="password"
                  placeholder="Senha"
                  required
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                <span className="input-border"></span>
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>

              <a className="forgot" href="/suporte">
                Problemas com Login?
              </a>
            </form>
          </div>
        </div>

        {/* COLUNA DIREITA – RECORTE + PARTÍCULAS */}
        <div className="login-right">
        
          <div className="particles-container">
            <FinisherParticles />
          </div>
        </div>
      </div>
    </>
  );
}
