import Campo from "../components/Campo";
import Botao from "../components/Botao";

export default function Login(){
    return (
        <div className="flex min-h-screen flex-col px-6 py-8">
            <span className="text-[19px] font-semibold tracking-tight">ProjEventos</span>
            <div className="flex flex-1 items-center justify-center py-14">
                <div className="w-full max-w-sm">
                    <h1 className="text-center text-3xl font-medium tracking-tighter">Entre ou cadastre-se</h1>
                    <p className="mt-2.5 text-center text-[15px] text-apagado">
                        Acompanhe suas inscrições, ingressos e certificados.
                    </p>
                    <form className="mt-8 flex flex-col gap-3">
                        <Campo rotulo="E-mail" tipo="email" placeholder="voce@exemplo.com" />
                        <Campo rotulo="Senha" tipo="password" placeholder="••••••••••" />
                        <Botao texto="Continuar" variante="primario" largura />
                    </form>
                    <p className="mt-6 text-center text-sm text-apagado">
                        Ainda não tem conta? <span className="cursor-pointer font-medium text-texto hover:underline">Criar conta</span>
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
