import { Card } from "./components/Cards";
import Header from "./components/Header";

export default function Home() {
  const eventos = [
    {nome: "Festival de Música", dataLocal: "15 Ago - São Paulo", bg: "bg-blue-200"},
    {nome: "Congresso de Tecnologia", dataLocal: "22 Set - Dourados", bg: "bg-sky-200"},
    {nome: "Workshop de Design", dataLocal: "03 Out - Campo Grande", bg: "bg-indigo-200"}
  ]
  return (
    <div>
      <Header titulo={"Gestão de Eventos"} />
      <main>
        <section>
          <div className="px-8">
            <h2 className="text-2xl font-bold">Eventos em destaque</h2>
            <p>Plataforma de gestão de eventos corporativos e acadêmicos</p>
          </div>
          <div className="px-4 py-4 grid grid-cols-1 gap-8 md:grid-cols-2 ">
            {eventos.map((item, index) => (
              <Card nomeEvento={item.nome} dataLocal={item.dataLocal} corDeFundo={item.bg} key={index}/>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
