"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500;

      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* 1. NAVBAR FIXA COM EFEITO SCROLLED */}
      <nav
        className={`navbar navbar-expand-lg fixed-top custom-navbar ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid d-flex align-items-center">
          <Link href="/" className="navbar-brand fw-bold">
            <img
              src="/imagens/logo/logo.png"
              alt="Controle PDI Logo"
              className="logo"
            />
          </Link>

          {/* BOTÃO TOGGLER (HAMBÚRGUER) - AGORA ACIONA O OFFCANVAS */}
          <button
            className="navbar-toggler d-lg-none" // d-lg-none: Oculta em telas grandes (desktop)
            type="button"
            data-bs-toggle="offcanvas" // Mudar para offcanvas
            data-bs-target="#offcanvasNavbar" // Mudar o target para o ID do Offcanvas
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 2. CONTEÚDO DA NAVBAR PARA DESKTOP (Telas >= lg) */}
          {/* Este bloco é o menu tradicional que SÓ aparece em telas grandes */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {/* Menu Desktop: Dropdowns de Hover */}
              <li className="nav-item dropdown dropdown-hover">
                <a
                  className="nav-link custom-link-color "
                  href="#"
                  id="homeDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Home
                  <i className="bi bi-chevron-down ms-1 custom-dropdown-icon"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                  <li>
                    <Link className="dropdown-item" href="/">
                      Início
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/veiculos">
                      Veículos
                    </Link>
                  </li>

                </ul>
              </li>

              <li className="nav-item dropdown dropdown-hover">
                <a
                  className="nav-link custom-link-color "
                  href="#"
                  id="painelDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Painel de Controle
                  <i className="bi bi-chevron-down ms-1 custom-dropdown-icon"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="painelDropdown">
                  <li>
                    <Link className="dropdown-item" href="/dashboard">
                      Dashboard Geral
                    </Link>
                  </li>
                 
                </ul>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <Link
                href="/suporte"
                className="btn btn-link me-2 custom-link-color"
              >
                Suporte
              </Link>
              <Link href="/login" className=" botao-login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. OFFCANVAS (MENU TELA CHEIA PARA MOBILE) */}
      <div
        className="offcanvas offcanvas-end custom-offcanvas" // offcanvas-end para vir da direita
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <button
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            {/* OFFCANVAS: Item Home (Dropdown expandido) */}
            <li className="nav-item">
              <span className="nav-link fw-medium custom-offcanvas-header">
                Home
                <i className="bi bi-arrow-up-right ms-2 custom-offcanvas-icon"></i>
              </span>
              <ul className="offcanvas-submenu">
                <li>
                  <Link className="nav-link" href="/">
                    Início
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/veiculos">
                    Veiculos
                  </Link>
                </li>
              </ul>
            </li>

            {/* OFFCANVAS: Item Painel de Controle (Dropdown expandido) */}
            <li className="nav-item">
              <span className="nav-link fw-medium custom-offcanvas-header">
                Painel de Controle
              </span>
              <ul className="offcanvas-submenu">
                <li>
                  <Link className="nav-link" href="/dashboard">
                    Dashboard Geral
                  </Link>
                </li>
              </ul>
            </li>

            <div className="d-flex align-items-center">
              <Link
                href="/suporte"
                className="nav-link"
              >
                Suporte
              </Link>
            <li className="nav-item mt-3">
              <Link href="/login" className=" botao-login-offcanvas">
                Login
              </Link>
            </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
