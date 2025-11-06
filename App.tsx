import React from 'react';

// Link de compra facilmente editável
const PURCHASE_LINK = "#";

// Reusable Button Component - agora é um link <a>
const BuyButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <a
    href={PURCHASE_LINK}
    className={`inline-block bg-[#a99985] text-white text-center font-bold py-4 px-10 rounded-md uppercase tracking-widest hover:bg-[#9a8a77] transition-colors duration-300 ${className}`}>
    Comprar Agora
  </a>
);

// Section 2: Pain Point
const PainPointSection: React.FC = () => (
    <section className="bg-[#a99985] text-white py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-left text-base md:text-[17px] leading-relaxed space-y-8">
            <p>São 2h37 da madrugada antes da viagem. Você está acordado. De novo. Checando pela quinta vez se salvou a confirmação do hotel. Se anotou todos os locais que vai visitar. Se salvou o número de emergência. Se a reserva do carro está confirmada mesmo.</p>
            <p>Mas você não tem certeza. Porque está tudo... <span className="font-bold">onde mesmo?</span> Gmail? Numa das 47 abertas do Chrome no notebook? Print na galeria do celular entre a foto do cachorro e a captura daquele meme? Nota solta no app de notas?</p>
            <p>E a pergunta que não sai da sua cabeça: e se algo der errado no aeroporto, no hotel, no passeio e você não achar a informação rápido? E se você não achar?</p>
            <p><span className="font-bold">Esse medo não é paranoia.</span> É experiência. Você já perdeu informações importantes. Já teve que fazer check-ins às pressas. Já passou por aquele momento constrangedor no balcão do hotel porque não achou o código de reserva. Já esqueceu seu remédio. Já perdeu uma atração que você queria muito por ter confundido o dia da reserva.</p>
            <p className="font-bold">A diferença entre viajantes confiantes e você não é coragem. São sistemas invisíveis.</p>
            <p>Você assiste aqueles vlogs do Estevam pelo Mundo e pensa: "Como ele consegue ser tão tranquilo no aeroporto?" Não é porque ele não tem ansiedade. É porque em algum lugar que a câmera não mostra, ele tem tudo mapeado. Documentos. Reservas. Planos B.</p>
            <p>O problema não é você não ser organizado. É você estar tentando segurar 47 abas do Chrome, 12 e-mails importantes, notas soltas no celular e uma planilha genérica que você não atualiza há semanas — tudo na memória RAM do seu cérebro.</p>
            <p>E ficar se internet no aeroporto é suficiente para derrubar o castelo de cartas inteiro.</p>
        </div>
    </section>
);

// Section 3: Info
const InfoSection: React.FC = () => (
  <section className="bg-white py-12 md:py-20 flex justify-center">
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="bg-[#4a4a4a] text-gray-100 rounded-xl shadow-xl p-8 md:p-12 lg:p-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
          O Travel Planner é a transferência completa do estresse de 'lembrar de tudo' para um segundo cérebro que nunca esquece, nunca entra em pânico, nunca perde um email importante e funciona perfeitamente offline quando você mais precisa.
        </h2>
        <div className="text-base md:text-lg space-y-4 text-gray-300">
          <p>Imagine abrir seu celular no aeroporto e encontrar tudo exatamente onde precisa estar. O código de confirmação do hotel. O endereço completo. O número de emergência. A lista do que já está na mala. O orçamento diário. Os horários. Os vouchers. As reservas. <span className="font-bold text-white">Tudo.</span></p>
          <p>Não em vinte lugares diferentes. Em um só lugar. Organizado. Acessível em três segundos. Online e offline.</p>
        </div>
      </div>
    </div>
  </section>
);


// Section 4: Solution
const SolutionSection: React.FC = () => (
  <section className="bg-white py-16 md:py-28">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="flex flex-col items-center text-center mb-12">
        <img src="https://picsum.photos/seed/travellogo/180/50" alt="Travel Planner Logo" className="h-auto w-48" />
      </div>
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-24 items-center">
        <div className="lg:col-span-3 text-center lg:text-left">
          <h1 className="text-[25px] md:text-[38px] font-bold text-[#4a4a4a] mb-6 leading-[1.1]">"Seu passaporte e a reserva do hotel, por favor"</h1>
          <p className="text-base md:text-[17px] text-gray-600 mb-4 leading-relaxed">A frase que te dá um gelo na espinha. E se, em vez de pânico, você sentisse controle?</p>
          <p className="text-base md:text-[17px] text-gray-600 mb-12 leading-relaxed">Pare de caçar informações na galeria de fotos e tenha tudo em 3 segundos, no <span className="font-bold">seu segundo cérebro de viagens</span>.</p>
          <BuyButton />
        </div>
        <div className="lg:col-span-2">
          <img 
            src="https://picsum.photos/seed/woman-travel/600/800" 
            alt="Woman looking at her phone while traveling" 
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  </section>
);


const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <main>
        <SolutionSection />
        <PainPointSection />
        <InfoSection />
      </main>
    </div>
  );
};

export default App;