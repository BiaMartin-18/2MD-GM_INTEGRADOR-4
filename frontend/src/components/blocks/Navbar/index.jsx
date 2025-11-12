"use client";


import React, { useState, useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.css';

export default function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(()=>{
    const handleScroll = () =>{
      const scrollThreshold = 500; 
      
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return()=>{
      window.removeEventListener('scroll',handleScroll)
    };

   },[])

  return (
    <nav className={`navbar navbar-expand-lg fixed-top custom-navbar ${isScrolled ? 'scrolled':''}`}>
      <div className="container-fluid">
        <Link href="/" className="navbar-brand fw-bold">
         <img src="/imagens/logo/logo.png" alt="" className="logo" />
        </Link>
       

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            
            {/* Primeiro Dropdown (Home) - Adicionado a classe 'dropdown-hover' */}
            <li className="nav-item dropdown dropdown-hover"> 
              <a
                className="nav-link custom-link-color"
                href="/"
                role="button"
                // data-bs-toggle="dropdown" REMOVIDO para hover funcionar
                aria-expanded="false"
              >
                Home
                <i className="bi bi-chevron-down ms-1 custom-dropdown-icon"></i>
              </a>
            
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="">
                    Painel do Operador
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="">
                    Painel de Administrador
                  </Link>
                </li>
              </ul>
            </li>

            {/* Segundo Dropdown (Painel de Controle) - Adicionado a classe 'dropdown-hover' */}
            <li className="nav-item dropdown dropdown-hover">
              <a
                className="nav-link custom-link-color"
                href="#"
                role="button"
                // data-bs-toggle="dropdown" REMOVIDO para hover funcionar
                aria-expanded="false"
              >
                Painel de Controle
                <i className="bi bi-chevron-down ms-1 custom-dropdown-icon"></i>
              </a>
            
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="">
                    Dashboard Geral
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/dashauditoria">
                    Painel do Admnistrador
                  </Link>
                </li>
              </ul>
            </li>

          </ul>

          <div className="d-flex">
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
  );
}