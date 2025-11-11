"use client";
import Head from "next/head";
import "./suporte.css";


export default function SuportePage() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="background-wrapper">
        <div className="background-overlay"></div>

        <div className="login-box">
          {/* Lado esquerdo com imagem sem ofuscamento */}
          <div className="image-side"></div>

          {/* Lado direito com formulário */}
          <div className="form-side">
            <h2>Suporte</h2>
            <p>Entre utilizando seu cadastro adminstrativo dado pelo time de I.T</p>

            <form className="login-form">
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Senha" required />
              <a href="#" className="forgot-link">Dúvidas?</a>

              <button type="submit" className="login-button">Login</button>
              
            </form>

            <p className="signup-prompt">
              Problemas com o Login? <a href="/suporte">Contate o Suporte</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
