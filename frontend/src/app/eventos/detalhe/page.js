"use client";

import { useState } from "react";
import Tag from "../../components/Tag";
import Painel from "../../components/Painel";
import Botao from "../../components/Botao";

export default function DetalheEvento(){
    const programacao = [
        { horario: "08:30", titulo: "Credenciamento e abertura" },
        { horario: "09:00", titulo: "Palestra: IA aplicada à indústria" },
        { horario: "10:30", titulo: "Workshop: Testes automatizados" },
        { horario: "13:30", titulo: "Sessão de apresentação de trabalhos" },
        { horario: "16:00", titulo: "Mesa redonda e encerramento" }
    ]
    const ingressos = [
        { tipo: "Gratuito", preco: "R$ 0,00" },
        { tipo: "Pago", preco: "R$ 80,00" },
        { tipo: "VIP", preco: "R$ 150,00" }
    ]
    const [escolhido, setEscolhido] = useState(ingressos[0].tipo)

    return (
        <div>
            <div className="h-52 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-950"></div>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px]">
                <div>
                    <div className="flex flex-wrap gap-2">
                        <Tag texto="Inscrições abertas" tom="gratuito" />
                        <Tag texto="Presencial" tom="neutro" />
                        <Tag texto="Aceita submissão" tom="neutro" />
                    </div>
                    <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tighter">Congresso de Tecnologia 2026</h1>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-apagado">
                        <span>22 de setembro de 2026</span>
                        <span>Dourados/MS</span>
                        <span>8 horas</span>
                        <span>Dra. Ana Ribeiro</span>
                    </div>

                    <div className="mt-7">
                        <Painel titulo="Sobre o evento">
                            <p className="text-[14.5px] leading-relaxed text-apagado">
                                Encontro anual que reúne pesquisadores, estudantes e profissionais para discutir avanços em engenharia de software, inteligência artificial e sistemas distribuídos. Inclui palestras, workshops e sessão de apresentação de trabalhos científicos.
                            </p>
                        </Painel>
                    </div>

                    <div className="mt-4 overflow-hidden rounded-2xl border border-borda bg-superficie">
                        <h3 className="px-6 pb-3 pt-6 text-base font-semibold tracking-tight">Programação</h3>
                        <div>
                            {programacao.map((item, index) => (
                                <div key={index} className="flex items-center gap-5 border-t border-borda-suave px-6 py-3.5">
                                    <time className="w-12 shrink-0 font-mono text-[13px]">{item.horario}</time>
                                    <span className="text-[14.5px] text-apagado">{item.titulo}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <aside>
                    <Painel titulo="Ingressos">
                        <div className="flex flex-col gap-2.5">
                            {ingressos.map((ingresso, index) => (
                                <button
                                    key={index}
                                    onClick={() => setEscolhido(ingresso.tipo)}
                                    className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-[14.5px] transition-colors ${escolhido === ingresso.tipo ? "border-texto bg-texto/5" : "border-borda hover:border-fraco"}`}
                                >
                                    <span className="font-medium">{ingresso.tipo}</span>
                                    <span className={`font-mono text-sm ${escolhido === ingresso.tipo ? "text-texto" : "text-apagado"}`}>{ingresso.preco}</span>
                                </button>
                            ))}
                        </div>
                        <div className="mt-4">
                            <Botao texto="Inscrever-se" variante="primario" largura />
                        </div>
                        <p className="mt-3 text-xs leading-relaxed text-fraco">
                            Você recebe um QR Code de acesso assim que a inscrição é confirmada. A presença é validada por leitura desse código na entrada.
                        </p>
                    </Painel>
                </aside>
            </div>
        </div>
    )
}
