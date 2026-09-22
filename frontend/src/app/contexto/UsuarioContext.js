"use client";

import { createContext, useContext, useState } from "react";

const UsuarioContext = createContext(null)

export function UsuarioProvider({ children }) {
    const [usuario] = useState({ nome: "Joao Pedro", tipo: "ORGANIZADOR" })

    return (
        <UsuarioContext.Provider value={{ usuario }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export function useUsuario() {
    return useContext(UsuarioContext)
}
