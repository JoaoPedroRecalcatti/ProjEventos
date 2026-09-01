export default function Tag({ texto, tom }) {
    const tons = {
        gratuito: "bg-gratuito/15 text-gratuito",
        pago: "bg-pago/15 text-pago",
        vip: "bg-vip/15 text-vip",
        erro: "bg-erro/15 text-erro",
        neutro: "bg-texto/[0.07] text-apagado"
    }
    return (
        <span className={`rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.09em] ${tons[tom] || tons.neutro}`}>
            {texto}
        </span>
    )
}
