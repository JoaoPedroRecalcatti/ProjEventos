"use client";

import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Busca from "../components/Busca";
import Filtros from "../components/Filtros";
import { Card } from "../components/Cards";

const API_EVENTOS = "http://localhost:3001/eventos"

const fundos = [
    "bg-gradient-to-br from-indigo-900 to-slate-950",
    "bg-gradient-to-br from-teal-900 to-slate-950",
    "bg-gradient-to-br from-amber-900 to-slate-950",
    "bg-gradient-to-br from-rose-900 to-slate-950",
    "bg-gradient-to-br from-sky-900 to-slate-950",
    "bg-gradient-to-br from-violet-900 to-slate-950"
]

export default function Eventos(){
    const { dados, carregando } = useFetch(API_EVENTOS)
    const [termo, setTermo] = useState("")
    const [filtro, setFiltro] = useState("Todos")

    const eventos = dados || []
    const visiveis = eventos.filter((evento) => {
        const casaBusca = evento.nome.toLowerCase().includes(termo.toLowerCase())
        if (filtro === "Presencial") return casaBusca && !evento.is_online
        if (filtro === "Online") return casaBusca && evento.is_online
        if (filtro === "Aceita submissão") return casaBusca && evento.permite_submissao
        return casaBusca
    })

    const formatarData = (valor) => new Date(valor).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })

    return (
        <div>
            <h1 className="text-4xl font-medium tracking-tighter">Todos os eventos</h1>
            <p className="mt-3 text-[17px] text-apagado">
                {carregando ? "Carregando eventos..." : `${visiveis.length} evento(s) encontrado(s).`}
            </p>
            <div className="mt-7">
                <Busca placeholder="Buscar evento" aoBuscar={setTermo} />
            </div>
            <div className="mt-5">
                <Filtros opcoes={["Todos", "Presencial", "Online", "Aceita submissão"]} aoSelecionar={setFiltro} />
            </div>

            {!carregando && visiveis.length === 0 && (
                <p className="mt-10 text-[15px] text-apagado">
                    Nenhum evento para exibir. Confira se a API está em execução, conforme o README.
                </p>
            )}

            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {visiveis.map((evento, index) => (
                    <Card
                        key={evento._id}
                        nomeEvento={evento.nome}
                        dataLocal={`${formatarData(evento.data)} · ${evento.is_online ? "Online" : evento.local}`}
                        tipoIngresso={evento.status === "open" ? "Aberto" : "Encerrado"}
                        tomIngresso={evento.status === "open" ? "gratuito" : "neutro"}
                        corDeFundo={fundos[index % fundos.length]}
                    />
                ))}
            </div>
        </div>
    )
}
