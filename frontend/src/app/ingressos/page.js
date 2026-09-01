import Header from "../components/Header";
import Tag from "../components/Tag";
import Botao from "../components/Botao";
import QRCode from "../components/QRCode";

export default function Ingressos(){
    const inscricoes = [
        { evento: "Congresso de Tecnologia 2026", tipo: "Gratuito", tom: "gratuito", meta: "22 set 2026 · Dourados/MS · inscrito em 14 ago 2026", codigo: "QR-8F3A-C219-K470", validado: false },
        { evento: "Simpósio de Engenharia de Software", tipo: "Pago", tom: "pago", meta: "03 out 2026 · Online · inscrito em 02 ago 2026", codigo: "QR-5D71-B004-M882", validado: true }
    ]
    return (
        <div>
            <Header ativo="Meus Ingressos" />
            <main className="mx-auto max-w-6xl px-7 pb-24 pt-12">
                <h1 className="text-4xl font-medium tracking-tighter">Meus ingressos</h1>
                <p className="mt-3 text-[17px] text-apagado">
                    Apresente o QR Code na entrada do evento para validar sua presença.
                </p>
                <div className="mt-8 flex flex-col gap-3.5">
                    {inscricoes.map((inscricao, index) => (
                        <article key={index} className="flex flex-col items-start gap-5 rounded-2xl border border-borda bg-superficie p-5 sm:flex-row sm:items-center">
                            <QRCode tamanho={92} />
                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap gap-2">
                                    <Tag texto={inscricao.tipo} tom={inscricao.tom} />
                                    {inscricao.validado && <Tag texto="Presença validada" tom="neutro" />}
                                </div>
                                <h3 className="mt-2.5 text-[16.5px] font-medium tracking-tight">{inscricao.evento}</h3>
                                <p className="mt-1 text-[13.5px] text-apagado">{inscricao.meta}</p>
                                <p className="mt-2 font-mono text-xs text-apagado">{inscricao.codigo}</p>
                            </div>
                            <Botao texto={inscricao.validado ? "Ver certificado" : "Ver evento"} variante="secundario" />
                        </article>
                    ))}
                </div>
            </main>
        </div>
    )
}
