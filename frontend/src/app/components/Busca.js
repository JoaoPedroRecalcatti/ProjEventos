export default function Busca({ placeholder }) {
    return (
        <div className="flex max-w-xl items-center gap-2.5 rounded-full border border-borda bg-superficie py-1.5 pl-5 pr-1.5 focus-within:border-fraco">
            <input
                placeholder={placeholder}
                className="min-w-0 flex-1 bg-transparent text-[15px] text-texto placeholder:text-fraco outline-none"
            />
            <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-elevado text-apagado transition-colors hover:bg-texto hover:text-fundo">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-3.6-3.6" />
                </svg>
            </button>
        </div>
    )
}
