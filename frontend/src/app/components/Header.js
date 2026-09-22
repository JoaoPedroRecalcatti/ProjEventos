"use client";

import Botao from "./Botao";
import { useUsuario } from "../contexto/UsuarioContext";

export default function Header({ ativo }) {
    const { usuario } = useUsuario()
    const links = ["Descobrir", "Meus Ingressos", "Certificados"]
    if (usuario && usuario.tipo === "ORGANIZADOR") links.push("Organizador")
    return (
        <header className="sticky top-0 z-50 border-b border-borda-suave bg-fundo/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center gap-8 px-7 py-4">
                <div className="flex items-center gap-2.5">
                    <span className="flex flex-col gap-[3px]">
                        <span className="block h-[2.5px] w-[15px] rounded-sm bg-texto"></span>
                        <span className="block h-[2.5px] w-[10px] rounded-sm bg-texto"></span>
                        <span className="block h-[2.5px] w-[6px] rounded-sm bg-texto"></span>
                    </span>
                    <b className="text-[17px] font-semibold tracking-tight">ProjEventos</b>
                </div>
                <nav className="mr-auto hidden gap-7 md:flex">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            className={`cursor-pointer text-sm transition-colors hover:text-texto ${ativo === link ? "font-semibold text-texto" : "text-apagado"}`}
                        >
                            {link}
                        </a>
                    ))}
                </nav>
                <div className="ml-auto flex items-center gap-2.5 md:ml-0">
                    {usuario ? (
                        <span className="rounded-full border border-borda px-4 py-2 text-[13px] font-medium">{usuario.nome}</span>
                    ) : (
                        <>
                            <Botao texto="Entrar" variante="elevado" />
                            <Botao texto="Criar conta" variante="primario" />
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}
