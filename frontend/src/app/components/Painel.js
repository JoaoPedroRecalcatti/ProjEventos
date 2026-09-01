export default function Painel({ titulo, children }) {
    return (
        <div className="rounded-2xl border border-borda bg-superficie p-6">
            {titulo && <h3 className="mb-3 text-base font-semibold tracking-tight">{titulo}</h3>}
            {children}
        </div>
    )
}
