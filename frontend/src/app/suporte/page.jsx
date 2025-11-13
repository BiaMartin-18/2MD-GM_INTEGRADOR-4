"use client";
import Head from "next/head";
import "./suporte.css";
import Navbar from "@/components/blocks/Navbar";


export default function SuportePage() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Contact Us</title>
      </Head>

      <div className="background-wrapper">
        {/* Vídeo de fundo */}
        <video autoPlay loop muted className="background-video">
          <source src="/imagens/fundologin.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>

        <div className="background-overlay"></div>

        <div className="form-container">
          <div className="form-left">
            <h1><strong>Não Consegue Entrar?</strong> Conte-nos o seu problema.</h1>
            <p>Estamos aqui para ajudar. Entre em contato com a nossa equipe de I.T pelo formulário ao lado e também pelo nosso email e telefone que estão logo abaixo!</p>
            <div className="contact-details">
              <img src="/imagens/iconemail.png" alt="Email" className="icon" />
              <p> I_T@gmail.com</p>
            </div>
            <div className="contact-item">
              <img src="/imagens/iconephone.png" alt="Telefone" className="icon" />
              <p>+123 456 7890</p>
            </div>
          </div>

          <div className="form-right">
            <h2><strong>Obtenha Solução</strong></h2>
            <form className="contact-form">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />

              <textarea placeholder="Mensagem" required></textarea>
              <button type="submit" className="submit-button">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
