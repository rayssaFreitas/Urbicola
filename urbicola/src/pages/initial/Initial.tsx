import React from "react";
//import { Instagram, YouTube, Facebook, LinkedIn, Twitter } from "@material-ui/icons";

export function Initial(){
    return(
        <>
        <header>
        <ul>
        <li><a>Inicio</a></li>
        <li><a>Serviços</a></li>
        <li><a>Projetos</a></li>
        <li><a>Sobre Nós</a></li>
        <li><a>Contato</a></li>
        </ul>
        </header>
        <main>
        <img src="../../assets/vectors/logo_text.svg"></img>

        <section id="footer">
        <ul>
        <li>(11) 9 5166-9911</li>
        <li>(11) 9 7607-9109</li>
        <li>(11) 9 4452-6077</li>
        <li>contato@urbicola.com.br</li>
        </ul>
        {/* <ul>
        <li><Instagram/></li>
        <li><YouTube/></li>
        <li><Facebook/></li>
        <li><LinkedIn/></li>
        <li><Twitter/></li>
        </ul> */}
        </section>
        </main>
        </>
    )
}