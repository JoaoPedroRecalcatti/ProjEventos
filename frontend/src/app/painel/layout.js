import Header from "../components/Header";

export default function PainelLayout({ children }) {
    return (
        <div>
            <Header ativo="Organizador" />
            <main className="mx-auto max-w-6xl px-7 pb-24 pt-12">{children}</main>
        </div>
    )
}
