export function Card({nomeEvento, dataLocal, corDeFundo}) {
    return (
        <div className={`border p-10 border-zinc-900 flex justify-between rounded-2xl ${corDeFundo}`}>
            <div className="space-y-16 px-2">
                <div>
                    <h3 className="font-semibold">{nomeEvento}</h3>
                    <p>{dataLocal}</p>
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                    <div className="flex w-10 h-10 rounded-full bg-zinc-900 text-white items-center justify-center ">⤤</div>
                    <span className="font-semibold md:inline">Ver Detalhes</span>
                </div>
            </div>
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center border border-dashed border-gray-400">
                [IMG]
            </div>
        </div>
    )
}
