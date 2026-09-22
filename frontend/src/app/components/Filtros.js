"use client";

import { useState } from "react";

export default function Filtros({ opcoes, aoSelecionar }) {
    const [selecionada, setSelecionada] = useState(opcoes[0])

    const escolher = (opcao) => {
        setSelecionada(opcao)
        if (aoSelecionar) aoSelecionar(opcao)
    }

    return (
        <div className="flex flex-wrap gap-2">
            {opcoes.map((opcao, index) => (
                <button
                    key={index}
                    onClick={() => escolher(opcao)}
                    className={`rounded-full border px-4 py-2 text-[13.5px] transition-colors ${selecionada === opcao ? "border-texto bg-texto font-semibold text-fundo" : "border-borda text-apagado hover:border-fraco hover:text-texto"}`}
                >
                    {opcao}
                </button>
            ))}
        </div>
    )
}
