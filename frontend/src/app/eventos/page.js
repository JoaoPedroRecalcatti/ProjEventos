import Busca from "../components/Busca";
import Filtros from "../components/Filtros";
import { Card } from "../components/Cards";

export default function Eventos(){
    const eventos = [
        { nome: "Congresso de Tecnologia 2026", dataLocal: "22 set 2026 · Dourados/MS", tipo: "Gratuito", tom: "gratuito", bg: "bg-gradient-to-br from-indigo-900 to-slate-950" },
        { nome: "Simpósio de Engenharia de Software", dataLocal: "03 out 2026 · Online", tipo: "Pago", tom: "pago", bg: "bg-gradient-to-br from-teal-900 to-slate-950" },
        { nome: "Workshop de UX e Acessibilidade", dataLocal: "15 out 2026 · Campo Grande/MS", tipo: "VIP", tom: "vip", bg: "bg-gradient-to-br from-amber-900 to-slate-950" },
        { nome: "Simpósio de Iniciação Científica", dataLocal: "28 out 2026 · Dourados/MS", tipo: "Gratuito", tom: "gratuito", bg: "bg-gradient-to-br from-rose-900 to-slate-950" }
    ]
    return (
        <div>
            <h1 className="text-4xl font-medium tracking-tighter">Todos os eventos</h1>
            <p className="mt-3 text-[17px] text-apagado">4 eventos com inscrições abertas.</p>
            <div className="mt-7">
                <Busca placeholder="Buscar evento" />
            </div>
            <div className="mt-5">
                <Filtros opcoes={["Todos", "Presencial", "Online", "Gratuito"]} />
            </div>
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {eventos.map((evento, index) => (
                    <Card
                        key={index}
                        nomeEvento={evento.nome}
                        dataLocal={evento.dataLocal}
                        tipoIngresso={evento.tipo}
                        tomIngresso={evento.tom}
                        corDeFundo={evento.bg}
                    />
                ))}
            </div>
        </div>
    )
}
