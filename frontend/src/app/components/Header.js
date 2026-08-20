export default function Header({titulo}){
    return (
        <header className="flex items-center justify-between py-8 px-8 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-3xl text-zinc-900">✦</span>
                <span className="text-3xl font-bold tracking-tighter text-zinc-900">{titulo}</span>
            </div>
            <nav className="hidden lg:flex items-center gap-8 font-medium">
                <a className="hover:bg-[#BFDBFE] px-2 rounded-md transition-colors">Descobrir Eventos</a>
                <a className="hover:bg-[#BFDBFE] px-2 rounded-md transition-colors">Meus Ingressos</a>
                <a className="hover:bg-[#BFDBFE] px-2 rounded-md transition-colors">Criar Evento</a>
                <a className="hover:bg-[#BFDBFE] px-2 rounded-md transition-colors">Painel do Organizador</a>
            </nav>
        </header>
    )
}
