"use client";

import Head from 'next/head';
import "./login.css";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className="container">
        <div className="left-panel">
          <h1>Fast, Efficient and Productive</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
          <div className="language">
            <img src="/us-flag.png" alt="English" />
            <span>English</span>
          </div>
          <div className="links">
            <a href="#">Terms</a>
            <a href="#">Price</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        <div className="right-panel">
          <h2>Login </h2>
          <p>Somente Administradores</p>
          <form className="form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Senha" required />
            <small>Senha criada pelo I.T</small>
            <input type="password" placeholder="Repetir Senha" required />
            <label className="checkbox">
              <input type="checkbox" required />
              Aceito os Termos de Serviço e a Política de Privacidade.
            </label>
            <button type="submit" className="signup-btn">Login</button>
          </form>
          <p className="signin-link">
            Problemas com o Login? <a href="#">Contate o Suporte
            </a>
          </p>
          
        </div>
      </div>
    </>
  );
}
