export default function Filtros({ opcoes }) {
    return (
        <div className="flex flex-wrap gap-2">
            {opcoes.map((opcao, index) => (
                <button
                    key={index}
                    className={`rounded-full border px-4 py-2 text-[13.5px] transition-colors ${index === 0 ? "border-texto bg-texto font-semibold text-fundo" : "border-borda text-apagado hover:border-fraco hover:text-texto"}`}
                >
                    {opcao}
                </button>
            ))}
        </div>
    )
}
