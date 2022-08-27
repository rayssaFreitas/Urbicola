import { Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "@mui/material";
import React from "react";

export function Initial() {
  return (
    <>
      <header>
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
      <main>
        <img
          className="logo"
          alt=""
          src=""
        ></img>

        <section id="footer">
          <section className="footer-contact">
            <p>(11) 9 5166-9911</p>
            <p>(11) 9 7607-9109</p>
            <p>(11) 9 4452-6077</p>
            <p>contato@urbicola.com.br</p>
          </section>
          {
            <section className="footer-social">
              <Link>
                <Instagram />
              </Link>
              <Link>
                <LinkedIn />
              </Link>
            </section>
          }
        </section>
      </main>
    </>
  );
}