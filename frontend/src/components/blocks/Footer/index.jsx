"use client";
import Link from "next/link";
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna Esquerda */}
        <div className="footer-left">
          <img src="" alt="" className="logo" />
          <p className="rights">&copy; {new Date().getFullYear()} GM | Todos os direitos reservados</p>
        </div>

        {/* Coluna Central (Links) */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Home</h4>
            <Link href="#"></Link>
            <Link href="#"></Link>
            <Link href="#"></Link>
          </div>

          <div className="footer-column">
            <h4>Navigation</h4>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="">Veículos</Link>
          </div>

          <div className="footer-column">
            <h4>Redes Sociais</h4>
            <Link>LinkedIn</Link>
            <Link>Instagram</Link>
            <h4>Termos</h4>
            <Link>Política de Privacidade</Link>
            <Link>Termos de Uso</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Feito para os auditores e engenheiros da Planta de São Caetano</p>
      </div>
    </footer>
  );
}
