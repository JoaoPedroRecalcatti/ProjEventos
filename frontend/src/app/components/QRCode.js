export default function QRCode({ tamanho }) {
    const blocos = [
        [12, 12, 26], [72, 12, 26], [12, 72, 26],
        [48, 48, 10], [62, 48, 10], [48, 62, 10], [76, 62, 10],
        [62, 76, 10], [86, 86, 10], [48, 86, 10], [76, 48, 10], [86, 72, 10]
    ]
    return (
        <svg width={tamanho} height={tamanho} viewBox="0 0 110 110" className="shrink-0 rounded-lg bg-white p-1">
            {blocos.map((bloco, index) => (
                <g key={index}>
                    <rect x={bloco[0]} y={bloco[1]} width={bloco[2]} height={bloco[2]} fill="#0A0A0A" />
                    {bloco[2] === 26 && <rect x={bloco[0] + 8} y={bloco[1] + 8} width="10" height="10" fill="#FFFFFF" />}
                </g>
            ))}
        </svg>
    )
}
