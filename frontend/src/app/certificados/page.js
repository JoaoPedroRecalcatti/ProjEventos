import Header from "../components/Header";
import Botao from "../components/Botao";

export default function Certificados(){
    const certificados = [
        { evento: "Simpósio de Engenharia de Software", emissao: "05 out 2026", carga: "6 h", codigo: "CERT-2026-0417" },
        { evento: "Jornada de Dados e IA", emissao: "23 nov 2026", carga: "4 h", codigo: "CERT-2026-0912" },
        { evento: "Encontro de Sistemas de Informação", emissao: "11 nov 2026", carga: "8 h", codigo: "CERT-2026-0688" }
    ]
    return (
        <div>
            <Header ativo="Certificados" />
            <main className="mx-auto max-w-6xl px-7 pb-24 pt-12">
                <h1 className="text-4xl font-medium tracking-tighter">Meus certificados</h1>
                <p className="mt-3 max-w-2xl text-[17px] text-apagado">
                    Emitidos automaticamente após a validação de presença. Cada certificado tem um código verificável.
                </p>
                <div className="mt-8 overflow-x-auto rounded-2xl border border-borda bg-superficie">
                    <table className="w-full min-w-[640px] border-collapse text-sm">
                        <thead>
                            <tr className="border-b border-borda text-[11px] uppercase tracking-[0.1em] text-fraco">
                                <th className="px-5 py-3.5 text-left font-semibold">Evento</th>
                                <th className="px-5 py-3.5 text-left font-semibold">Emissão</th>
                                <th className="px-5 py-3.5 text-left font-semibold">Carga horária</th>
                                <th className="px-5 py-3.5 text-left font-semibold">Código de validação</th>
                                <th className="px-5 py-3.5"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {certificados.map((certificado, index) => (
                                <tr key={index} className="border-b border-borda-suave last:border-b-0 text-apagado">
                                    <td className="px-5 py-4 font-medium text-texto">{certificado.evento}</td>
                                    <td className="px-5 py-4">{certificado.emissao}</td>
                                    <td className="px-5 py-4 font-mono">{certificado.carga}</td>
                                    <td className="px-5 py-4 font-mono">{certificado.codigo}</td>
                                    <td className="px-5 py-4 text-right"><Botao texto="Baixar" variante="secundario" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}
