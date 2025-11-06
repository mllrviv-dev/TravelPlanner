
import React from 'react';
import { NotionIcon, YouTubeIcon, PlayIcon, TravelPlannerLogo } from './components/Icons';

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


// Section 1: Hero
const HeroSection: React.FC = () => (
  <section className="bg-white py-12 md:py-20 flex flex-col items-center">
    <div className="w-full max-w-6xl px-4">
      <div className="relative rounded-xl overflow-hidden shadow-2xl">
        <img src="https://picsum.photos/seed/travel-airport/1280/720" alt="Man at airport" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-6">
          
          <div className="flex justify-between items-start text-white">
            <div className="flex items-center gap-2">
              <img src="https://picsum.photos/seed/avatar/40/40" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white"/>
              <p className="font-semibold hidden sm:block">Travel Planner | Tour pela Dashboard Principal</p>
            </div>
            <button className="flex items-center gap-2 bg-black/50 px-3 py-2 rounded-lg text-sm hover:bg-black/70">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" /></svg>
              <span>Compartilhar</span>
            </button>
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <div className="mb-4">
                <TravelPlannerLogo />
              </div>
              <p className="text-lg md:text-xl tracking-widest">TUTORIAIS DE BASE</p>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter my-2" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>Dashboard Principal</h1>
              <div className="flex items-center gap-2 mt-4">
                <NotionIcon />
                <span className="font-bold text-2xl">Notion</span>
              </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="bg-black/50 px-3 py-2 rounded-lg text-sm hover:bg-black/70 flex items-center gap-2">
              <YouTubeIcon />
              Assistir no
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              youtube
            </button>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
            <button className="text-white transform transition-transform duration-300 hover:scale-110" aria-label="Play video">
                <PlayIcon />
            </button>
        </div>
      </div>
    </div>
    <div className="mt-12">
      <BuyButton />
    </div>
  </section>
);

// Section 2: Info
const InfoSection: React.FC = () => (
  <section className="bg-white py-12 md:py-20 flex justify-center">
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="bg-[#4a4a4a] text-gray-100 rounded-xl shadow-xl p-8 md:p-12 lg:p-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="md:border-r md:border-gray-500 md:pr-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              O Travel Planner é a transferência completa do estresse de 'lembrar de tudo' para um segundo cérebro que nunca esquece, nunca entra em pânico, nunca perde um email importante e funciona perfeitamente offline quando você mais precisa.
            </h2>
          </div>
          <div className="text-base md:text-lg space-y-4 text-gray-300">
            <p>Imagine abrir seu celular no aeroporto e encontrar tudo exatamente onde precisa estar. O código de confirmação do hotel. O endereço completo. O número de emergência. A lista do que já está na mala. O orçamento diário. Os horários. Os vouchers. As reservas. <span className="font-bold text-white">Tudo.</span></p>
            <p>Não em vinte lugares diferentes. Em um só lugar. Organizado. Acessível em três segundos. Online e offline.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Section 3: Pain Point
const PainPointSection: React.FC = () => (
    <section className="bg-[#a99985] text-white py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center text-xl md:text-2xl leading-relaxed space-y-8">
            <p>São 2h37 da madrugada antes da viagem. Você está acordado. De novo. Checando pela quinta vez se salvou a confirmação do hotel. Se anotou todos os locais que vai visitar. Se salvou o número de emergência. Se a reserva do carro está confirmada mesmo.</p>
            <p>Mas você não tem certeza. Porque está tudo... <span className="font-bold">onde mesmo?</span> Gmail? Numa das 47 abertas do Chrome no notebook? Print na galeria do celular entre a foto do cachorro e a captura daquele meme? Nota solta no app de notas?</p>
            <p>E a pergunta que não sai da sua cabeça: e se algo der errado no aeroporto, no hotel, no passeio e você não achar a informação rápido? E se você não achar?</p>
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
        <HeroSection />
      </main>
      <footer className="bg-gray-100 p-4 text-center text-gray-500 text-sm">
        <p>Feito com ❤️ por Hotmart Pages</p>
      </footer>
    </div>
  );
};

export default App;
