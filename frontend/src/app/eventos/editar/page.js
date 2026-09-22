"use client";

import { useState } from "react";
import Campo from "../../components/Campo";
import Botao from "../../components/Botao";

export default function EditarEvento(){
    const [online, setOnline] = useState(false)
    const [aceitaSubmissao, setAceitaSubmissao] = useState(true)

    const chave = (ligado) => (
        <span className={`relative h-[22px] w-[38px] shrink-0 rounded-full transition-colors ${ligado ? "bg-texto" : "bg-elevado"}`}>
            <span className={`absolute top-[3px] h-4 w-4 rounded-full transition-all ${ligado ? "left-[19px] bg-fundo" : "left-[3px] bg-fraco"}`}></span>
        </span>
    )

    return (
        <div className="mx-auto max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-fraco">Organizador</p>
            <h1 className="mt-2.5 text-4xl font-medium tracking-tighter">Criar evento</h1>

            <form className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <Campo rotulo="Nome do evento" placeholder="Congresso de Tecnologia 2026" />
                </div>
                <Campo rotulo="Data" placeholder="22/09/2026" />
                <Campo rotulo="Local" placeholder={online ? "Evento sem local fisico" : "Dourados/MS"} />
                <Campo rotulo="Palestrante" placeholder="Dra. Ana Ribeiro" />
                <Campo rotulo="Carga horária" placeholder="8" auxiliar="Em horas. Usada na emissão dos certificados." />
                <div className="sm:col-span-2">
                    <Campo rotulo="Descrição" linhas={4} placeholder="O que acontece no evento, para quem é e o que o participante leva." />
                </div>
                <button
                    type="button"
                    onClick={() => setOnline(!online)}
                    className="flex items-center gap-3 rounded-xl border border-borda px-4 py-3.5 text-left transition-colors hover:border-fraco"
                >
                    {chave(online)}
                    <span>
                        <b className="block text-sm font-medium">Evento online</b>
                        <span className="text-xs text-apagado">Sem local físico</span>
                    </span>
                </button>
                <button
                    type="button"
                    onClick={() => setAceitaSubmissao(!aceitaSubmissao)}
                    className="flex items-center gap-3 rounded-xl border border-borda px-4 py-3.5 text-left transition-colors hover:border-fraco"
                >
                    {chave(aceitaSubmissao)}
                    <span>
                        <b className="block text-sm font-medium">Aceitar submissões</b>
                        <span className="text-xs text-apagado">Artigos, resumos e pôsteres</span>
                    </span>
                </button>
                <div className="sm:col-span-2">
                    <Campo rotulo="Status das inscrições" placeholder="Abertas" />
                </div>
            </form>

            <div className="mt-7 flex justify-end gap-2.5 border-t border-borda-suave pt-6">
                <Botao texto="Cancelar" variante="secundario" />
                <Botao texto="Salvar evento" variante="primario" />
            </div>
        </div>
    )
}
