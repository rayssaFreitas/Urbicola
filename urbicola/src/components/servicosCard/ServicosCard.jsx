import React from "react";
import "./servicosCard.css";
import teste from "../../assets/images/projetoInteriores.png";

export const ServicosCard = (props) => {

    return (
        <section className="servico-card-body" key={props.id}>
            <img src={teste} alt={props.titulo} className="servico-banner"/>
            <div className="servico-info">
                <p className="servico-info-title">{props.titulo}</p>
                <span className="servico-info-resume">{props.resumo}</span>
            </div>
        </section>
    )
}