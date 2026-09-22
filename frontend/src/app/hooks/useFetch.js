"use client";

import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [dados, setDados] = useState(null)
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        let ativo = true
        fetch(url)
            .then((resposta) => resposta.json())
            .then((json) => {
                if (ativo) {
                    setDados(json)
                    setCarregando(false)
                }
            })
            .catch(() => {
                if (ativo) setCarregando(false)
            })
        return () => {
            ativo = false
        }
    }, [url])

    return { dados, carregando }
}
