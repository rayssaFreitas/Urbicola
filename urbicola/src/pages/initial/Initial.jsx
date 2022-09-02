import React from "react";
import { Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "@mui/material";
import "./initial.css";
import logoBanner from "../../assets/vectors/logo-banner.svg";

export function Initial() {
  return (
    <div className="initial-body">
      <header className="initial-header">
        <Link href="i" underline="none">
          Inicio
        </Link>
        <Link href="i" underline="none">
          Serviços
        </Link>
        <Link href="i" underline="none">
          Projetos
        </Link>
        <Link href="i" underline="none">
          Sobre Nós
        </Link>
        <Link href="i" underline="none">
          Contato
        </Link>
      </header>

      <img src={logoBanner} alt="Urbicola Arquitetura" className="logo" />

      <section className="initial-footer">
        <section className="initial-footer-contact">
          <p>(11) 9 5166-9911</p>
          <p>(11) 9 7607-9109</p>
          <p>(11) 9 4452-6077</p>
          <p>contato@urbicola.com.br</p>
          <Link href="https://www.instagram.com/urbicolaarquitetura/">
            <Instagram className="instagram" />
          </Link>
          <Link>
            <LinkedIn className="linkedin" />
          </Link>
        </section>
      </section>
    </div>
  );
}
