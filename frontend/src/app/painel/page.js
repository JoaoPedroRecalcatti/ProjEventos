import Tag from "../components/Tag";
import Botao from "../components/Botao";
import CabecalhoSecao from "../components/CabecalhoSecao";

export default function Painel(){
    const numeros = [
        { valor: "3", rotulo: "Eventos ativos" },
        { valor: "247", rotulo: "Inscrições" },
        { valor: "18", rotulo: "Trabalhos submetidos" },
        { valor: "132", rotulo: "Presenças validadas" }
    ]
    const eventos = [
        { nome: "Congresso de Tecnologia 2026", data: "22 set 2026", inscritos: "184", status: "Aberto", tom: "gratuito" },
        { nome: "Simpósio de Iniciação Científica", data: "28 out 2026", inscritos: "51", status: "Aberto", tom: "gratuito" },
        { nome: "Workshop de UX e Acessibilidade", data: "15 mar 2026", inscritos: "12", status: "Encerrado", tom: "neutro" }
    ]
    const trabalhos = [
        { titulo: "Detecção de anomalias em séries temporais", autores: "M. Alves, R. Souza", status: "Pendente ajustes", tom: "pago" },
        { titulo: "Acessibilidade em interfaces governamentais", autores: "C. Menezes", status: "Aprovado", tom: "gratuito" },
        { titulo: "Escalonamento de contêineres em borda", autores: "J. Recalcatti, A. Ribeiro", status: "Reprovado", tom: "erro" }
    ]
    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-5">
                <div>
                    <h1 className="text-4xl font-medium tracking-tighter">Painel do organizador</h1>
                    <p className="mt-2.5 text-[17px] text-apagado">Seus eventos, inscrições e submissões.</p>
                </div>
                <Botao texto="Criar evento" variante="primario" />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
                {numeros.map((numero, index) => (
                    <div key={index} className="rounded-2xl border border-borda bg-superficie p-5">
                        <b className="block text-3xl font-semibold tracking-tighter tabular-nums">{numero.valor}</b>
                        <span className="mt-1 block text-[13px] text-apagado">{numero.rotulo}</span>
                    </div>
                ))}
            </div>

            <section className="mt-11">
                <CabecalhoSecao titulo="Meus eventos" acao="Validar presença" />
                <div className="overflow-x-auto rounded-2xl border border-borda bg-superficie">
                    <table className="w-full min-w-[640px] border-collapse text-sm">
                        <thead>
                            <tr className="border-b border-borda text-[11px] uppercase tracking-[0.1em] text-fraco">
                                <th className="px-5 py-3.5 text-left font-semibold">Evento</th>
                                <th className="px-5 py-3.5 text-left font-semibold">Data</th>
                                <th className="px-5 py-3.5 text-left font-semibold">Inscritos</th>
                                <th className="px-5 py-3.5 text-left font-semibold">Status</th>
                                <th className="px-5 py-3.5"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventos.map((evento, index) => (
                                <tr key={index} className="border-b border-borda-suave text-apagado last:border-b-0">
                                    <td className="px-5 py-4 font-medium text-texto">{evento.nome}</td>
                                    <td className="px-5 py-4">{evento.data}</td>
                                    <td className="px-5 py-4 font-mono">{evento.inscritos}</td>
                                    <td className="px-5 py-4"><Tag texto={evento.status} tom={evento.tom} /></td>
                                    <td className="px-5 py-4 text-right"><Botao texto="Editar" variante="secundario" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mt-12">
                <CabecalhoSecao titulo="Trabalhos aguardando avaliação" acao="Ver todos" />
                <div className="overflow-x-auto rounded-2xl border border-borda bg-superficie">
                    <table className="w-full min-w-[640px] border-collapse text-sm">
                        <thead>
                            <tr className="border-b border-borda text-[11px] uppercase tracking-[0.1em] text-fraco">
                                <th className="px-5 py-3.5 text-left font-semibold">Título</th>
                                <th className="px-5 py-3.5 text-left font-semibold">Autores</th>
                                <th className="px-5 py-3.5 text-left font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trabalhos.map((trabalho, index) => (
                                <tr key={index} className="border-b border-borda-suave text-apagado last:border-b-0">
                                    <td className="px-5 py-4 font-medium text-texto">{trabalho.titulo}</td>
                                    <td className="px-5 py-4">{trabalho.autores}</td>
                                    <td className="px-5 py-4"><Tag texto={trabalho.status} tom={trabalho.tom} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}
