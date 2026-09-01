export default function Botao({ texto, variante, largura }) {
    const estilos = {
        primario: "bg-texto text-fundo hover:bg-white",
        secundario: "border border-borda text-texto hover:border-fraco",
        elevado: "bg-elevado text-texto hover:bg-borda"
    }
    const cor = estilos[variante] || estilos.primario
    return (
        <button className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${cor} ${largura ? "w-full" : ""}`}>
            {texto}
        </button>
    )
}
