"use client";
import Link from "next/link";
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna Esquerda */}
        <div className="footer-left">
          <img src="/imagens/logo/logo.png" alt="" className="logo" />
        </div>

        {/* Colunas Direita (Links) */}
        <div className="footer-right">
          <div className="footer-column">
            <h4>Home</h4>
            <Link href="#">Sobre</Link>
            <Link href="#">Painel do Operador</Link>
            <Link href="#">Painel do Administrador</Link>
          </div>

          <div className="footer-column">
            <h4>Painel de Controle</h4>
            <Link href="#">Dashboard Geral</Link>
            <Link href="#">Painel do Administrador</Link>
          </div>

          <div className="footer-column">
            <h4>Navigation</h4>
            <Link href="/">Home</Link>
            <Link href="/admin">Painel de Controle</Link>
            <Link href="/veiculos">Veículos</Link>
            <Link href="/login">Login</Link>
            <Link href="/cadastro">Agendamento</Link>
          </div>

          <div className="footer-column">
            <h4>Redes Sociais</h4>
            <Link href="https://www.linkedin.com">LinkedIn</Link>
            <Link href="https://www.instagram.com">Instagram</Link>
            <h4>Termos</h4>
            <a>Política de Privacidade</a>
            <a>Termos de Uso</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left-text">
          <p className="rights">&copy; {new Date().getFullYear()} GM | Todos os direitos reservados</p>
        </div>
        <div className="footer-right-text">
          <p>Feito para os auditores e engenheiros da Planta de São Caetano</p>
        </div>
      </div>
    </footer>
  );
}
