export default function Campo({ rotulo, placeholder, tipo, auxiliar, linhas }) {
    const classes = "w-full rounded-xl border border-borda bg-transparent px-4 py-3.5 text-[15px] text-texto placeholder:text-fraco outline-none transition-colors hover:border-fraco focus:border-apagado"
    return (
        <div className="flex flex-col gap-2">
            {rotulo && <label className="text-[13px] font-medium">{rotulo}</label>}
            {linhas
                ? <textarea rows={linhas} placeholder={placeholder} className={`${classes} resize-y leading-relaxed`} />
                : <input type={tipo || "text"} placeholder={placeholder} className={classes} />}
            {auxiliar && <p className="text-xs text-fraco">{auxiliar}</p>}
        </div>
    )
}
