function HighLights() {
  const specs = [
    {
      value: "48MP",
      label: "Principal",
      text: "Sensor quad-pixel com foco automático",
      color: "text-blue-600",
    },
    {
      value: "12MP",
      label: "Ultra Wide",
      text: "Campo de visão de 120° com modo noturno",
      color: "text-orange-500",
    },
    {
      value: "12MP",
      label: "Telefoto 5x",
      text: "Zoom óptico de 5x com estabilização",
      color: "text-blue-600",
    },
  ];

  return (
    <section className=" bg-black py-20 px-6" id="design">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Design revolucionários</h2>
          <p className="text-xl text-gray-400">
            Cada detalhe foi pensado para criar a melhor experiência
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="bg-gray-900 rounded-3xl p-8">
            <div className="flex justify-center items-center">
              <img
                className="w-10% rounded-2xl mb-4"
                src="../../public/img/titanio.jpg"
                alt="iphone-titaneo"
              ></img>
            </div>
            <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
            <p className="text-gray-300">
              Estrutura em titânio de grau aeroespacial. O smartphone mais forte
              e leve.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8">
            <div className="flex justify-center items-center">
              <img
                className="w-10% rounded-2xl mb-4"
                src="../../public/img/chip.jpg"
                alt="ios 2025"
              ></img>
            </div>
            <h3 className="font-bold mb-2 text-3xl">iOS 26</h3>
            <p>O sistema operacional mais avançado do mundo com IA integrada</p>
          </div>
        </div>
      </div>

      <div
        className="mx-auto max-w-4xl bg-gray-900 rounded-3xl p-12 mb-16"
        id="performance"
      >
        <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
        <p className="text-gray-300 mb-6">
          O chip mais poderoso em um smartphone
        </p>
        <div className="flex justify-center items-center">
          <img
            className="max-w-full rounded-2xl mb-4"
            src="../../public/img/a18.jpg"
            alt="chip a18"
          ></img>
        </div>
        <ul className="space-y-3 text-gray-300">
          <li>CPU 20% mais rápida</li>
          <li>GPU 25% mais eficiente</li>
          <li>Neural Engine com 16 núcleos</li>
          <li>Ray tracing acelerado por hardware</li>
        </ul>
      </div>

      <div className="mx-auto max-w-3xl grid grid-cols-2 md:grid-cols-3 gap-6">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="rounded-2xl bg-gray-900 hover:bg-gray-800 p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <p className={`text-3xl font-bold ${spec.color}`}>{spec.value}</p>
            <p className="text-xl text-white">{spec.label}</p>
            <p className="font-bold text-sm text-gray-300 mt-2">{spec.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HighLights;
