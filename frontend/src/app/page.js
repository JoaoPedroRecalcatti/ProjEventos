"use client";

import { useState } from "react";
import Header from "./components/Header";
import Busca from "./components/Busca";
import Filtros from "./components/Filtros";
import CabecalhoSecao from "./components/CabecalhoSecao";
import { Card } from "./components/Cards";

export default function Home() {
    const eventos = [
        { nome: "Congresso de Tecnologia 2026", dataLocal: "22 set 2026 · Dourados/MS", tipo: "Gratuito", tom: "gratuito", online: false, submissao: true, destaque: true, bg: "bg-gradient-to-br from-indigo-900 to-slate-950" },
        { nome: "Simpósio de Engenharia de Software", dataLocal: "03 out 2026 · Online", tipo: "Pago", tom: "pago", online: true, submissao: false, destaque: true, bg: "bg-gradient-to-br from-teal-900 to-slate-950" },
        { nome: "Workshop de UX e Acessibilidade", dataLocal: "15 out 2026 · Campo Grande/MS", tipo: "VIP", tom: "vip", online: false, submissao: false, destaque: true, bg: "bg-gradient-to-br from-amber-900 to-slate-950" },
        { nome: "Simpósio de Iniciação Científica", dataLocal: "28 out 2026 · Dourados/MS", tipo: "Gratuito", tom: "gratuito", online: false, submissao: true, destaque: false, bg: "bg-gradient-to-br from-rose-900 to-slate-950" },
        { nome: "Encontro de Sistemas de Informação", dataLocal: "09 nov 2026 · Online", tipo: "Pago", tom: "pago", online: true, submissao: true, destaque: false, bg: "bg-gradient-to-br from-sky-900 to-slate-950" },
        { nome: "Jornada de Dados e IA", dataLocal: "21 nov 2026 · Três Lagoas/MS", tipo: "Gratuito", tom: "gratuito", online: false, submissao: true, destaque: false, bg: "bg-gradient-to-br from-violet-900 to-slate-950" }
    ]

    const [termo, setTermo] = useState("")
    const [filtro, setFiltro] = useState("Todos")

    const passaNoFiltro = (evento) => {
        if (!evento.nome.toLowerCase().includes(termo.toLowerCase())) return false
        if (filtro === "Presencial") return !evento.online
        if (filtro === "Online") return evento.online
        if (filtro === "Gratuito") return evento.tipo === "Gratuito"
        if (filtro === "Aceita submissão") return evento.submissao
        return true
    }

    const proximos = eventos.filter((evento) => evento.destaque && passaNoFiltro(evento))
    const comSubmissao = eventos.filter((evento) => !evento.destaque && passaNoFiltro(evento))

    const grade = (lista) => (
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {lista.map((evento, index) => (
                <Card
                    key={index}
                    nomeEvento={evento.nome}
                    dataLocal={evento.dataLocal}
                    tipoIngresso={evento.tipo}
                    tomIngresso={evento.tom}
                    corDeFundo={evento.bg}
                />
            ))}
        </div>
    )

    return (
        <div>
            <Header ativo="Descobrir" />
            <main className="mx-auto max-w-6xl px-7 pb-24 pt-16">
                <h1 className="text-5xl font-medium tracking-tighter">Descubra eventos</h1>
                <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-apagado">
                    Congressos, simpósios e workshops — inscrição, ingresso e certificado no mesmo lugar.
                </p>
                <div className="mt-8">
                    <Busca placeholder="Buscar por nome, local ou palestrante" aoBuscar={setTermo} />
                </div>
                <div className="mt-5">
                    <Filtros opcoes={["Todos", "Presencial", "Online", "Gratuito", "Aceita submissão"]} aoSelecionar={setFiltro} />
                </div>

                {proximos.length > 0 && (
                    <section className="mt-16">
                        <CabecalhoSecao titulo="Próximos eventos" acao="Ver todos" />
                        {grade(proximos)}
                    </section>
                )}

                {comSubmissao.length > 0 && (
                    <section className="mt-14">
                        <CabecalhoSecao titulo="Aceitando submissão de trabalhos" acao="Ver todos" />
                        {grade(comSubmissao)}
                    </section>
                )}

                {proximos.length === 0 && comSubmissao.length === 0 && (
                    <p className="mt-16 text-[15px] text-apagado">Nenhum evento corresponde à busca.</p>
                )}
            </main>
        </div>
    )
}
