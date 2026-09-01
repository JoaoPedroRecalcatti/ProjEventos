import Campo from "../components/Campo";
import Botao from "../components/Botao";

export default function Cadastro(){
    return (
        <div className="flex min-h-screen flex-col px-6 py-8">
            <span className="text-[19px] font-semibold tracking-tight">ProjEventos</span>
            <div className="flex flex-1 items-center justify-center py-14">
                <div className="w-full max-w-sm">
                    <h1 className="text-center text-3xl font-medium tracking-tighter">Crie sua conta</h1>
                    <p className="mt-2.5 text-center text-[15px] text-apagado">Leva menos de um minuto.</p>
                    <form className="mt-8 flex flex-col gap-3">
                        <Campo rotulo="Nome completo" placeholder="Seu nome" />
                        <Campo rotulo="E-mail" tipo="email" placeholder="voce@exemplo.com" />
                        <Campo rotulo="Senha" tipo="password" placeholder="mínimo 6 caracteres" />
                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] font-medium">Tipo de conta</label>
                            <div className="grid grid-cols-2 gap-2.5">
                                <button type="button" className="rounded-xl border border-texto bg-texto/5 py-3 text-sm font-semibold">Participante</button>
                                <button type="button" className="rounded-xl border border-borda py-3 text-sm text-apagado hover:border-fraco">Organizador</button>
                            </div>
                        </div>
                        <Botao texto="Criar conta" variante="primario" largura />
                    </form>
                    <p className="mt-6 text-center text-sm text-apagado">
                        Já tem conta? <span className="cursor-pointer font-medium text-texto hover:underline">Entrar</span>
                    </p>
                </div>
            </div>
            <div className="flex justify-center gap-3.5 text-xs text-fraco">
                <span>Termos de uso</span>
                <span>·</span>
                <span>Política de privacidade</span>
            </div>
        </div>
    )
}
