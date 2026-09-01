export default function CabecalhoSecao({ titulo, acao }) {
    return (
        <div className="mb-6 flex items-baseline justify-between gap-5">
            <h2 className="text-xl font-semibold tracking-tight">{titulo}</h2>
            {acao && <span className="text-sm text-apagado">{acao}</span>}
        </div>
    )
}
