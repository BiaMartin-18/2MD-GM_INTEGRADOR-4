"use client";
import Head from "next/head";
import "./login.css";
import Navbar from "@/components/blocks/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Login</title>
      </Head>

      <div className="background-wrapper">
        {/* Vídeo de fundo */}
        <video autoPlay loop muted className="background-video">
          <source src="/imagens/fundologin.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>

        <div className="login-wrapper">
        <div className="login-container">
          <div className="form-content">
            <h2><strong>Login Administrador</strong></h2>
            <form className="login-form">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Entre com seu email" required />
              </div>
              <div className="input-group">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Entre com sua senha" required />
              </div>

              <div className="options">
                
                <a href="/suporte" className="forgot-password">Problemas com Login?</a>
              </div>

              <button type="submit" className="login-button">Login</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
