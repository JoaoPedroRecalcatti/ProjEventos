import Tag from "./Tag";

export function Card({ nomeEvento, dataLocal, tipoIngresso, tomIngresso, corDeFundo }) {
    return (
        <div className="group cursor-pointer">
            <div className={`aspect-[4/3] rounded-xl ${corDeFundo}`}></div>
            <h3 className="mt-3.5 text-[17px] font-medium leading-snug tracking-tight group-hover:underline group-hover:underline-offset-4">
                {nomeEvento}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-[13.5px] text-apagado">
                <Tag texto={tipoIngresso} tom={tomIngresso} />
                <span>{dataLocal}</span>
            </div>
        </div>
    )
}
