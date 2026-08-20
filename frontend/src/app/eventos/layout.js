import Header from "../components/Header";

export default function EventosLayout({ children }) {
  return (
    <div>
      <Header titulo={"Eventos"} />
      <div className="border-2 border-amber-500 rounded p-4 m-8">
        <h2 className="text-2xl">Área de Eventos</h2>
        {children}
      </div>
    </div>
  )
}
