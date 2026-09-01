export default function ValidarPresenca(){
    return (
        <div className="mx-auto max-w-md text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-fraco">Congresso de Tecnologia 2026</p>
            <h1 className="mt-2.5 text-4xl font-medium tracking-tighter">Validar presença</h1>
            <p className="mt-3 text-[17px] text-apagado">Aponte a câmera para o QR Code do participante.</p>

            <div className="relative mt-7 grid aspect-square place-items-center overflow-hidden rounded-3xl border border-borda bg-superficie">
                <div className="relative aspect-square w-[58%]">
                    <span className="absolute left-0 top-0 h-8 w-8 rounded-tl-xl border-l-2 border-t-2 border-texto"></span>
                    <span className="absolute right-0 top-0 h-8 w-8 rounded-tr-xl border-r-2 border-t-2 border-texto"></span>
                    <span className="absolute bottom-0 left-0 h-8 w-8 rounded-bl-xl border-b-2 border-l-2 border-texto"></span>
                    <span className="absolute bottom-0 right-0 h-8 w-8 rounded-br-xl border-b-2 border-r-2 border-texto"></span>
                </div>
                <span className="absolute left-[8%] right-[8%] top-1/2 h-0.5 bg-gratuito"></span>
            </div>

            <div className="mt-5 flex items-center gap-3.5 rounded-2xl border border-gratuito/40 bg-gratuito/10 px-4 py-4 text-left">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gratuito font-bold text-fundo">✓</span>
                <span>
                    <b className="block text-[15px] font-medium">Maria Alves — presença validada</b>
                    <span className="font-mono text-xs text-apagado">QR-8F3A-C219-K470 · 09:14</span>
                </span>
            </div>

            <p className="mt-4 text-xs text-fraco">132 de 184 inscritos validados</p>
        </div>
    )
}
