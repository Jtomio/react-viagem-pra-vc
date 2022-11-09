import React from "react";
import { GoCommentDiscussion } from "react-icons/go";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>O melhor Family Resort da América do Sul</h2>
          <p className="py-4">
            Com estrutura completa de lazer, mais de 200 hectares de área verde
            e construção em formato de vilas americanas, o Wish Foz do Iguaçu
            foi eleito, por 2 anos, o Melhor Family Resort da América do Sul
            pela World Travel Awards, uma das mais respeitadas premiações do
            turismo mundial.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <GoCommentDiscussion size={50} />
            </button>
            <div>
              <h3 className="py-2">Dúvidas?</h3>
              <p className="py-1">Estamos a disposição para auxiliar.</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">Serviços</h3>
              <p className="py-1">All inclusive</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center ">
          <p className="pt-2">Destinos com descontos</p>
          <p className="py-4">Poucos pacotes</p>
          <p className="bg-gray-800 text-gray-200 py-2">Faça sua Reserva</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destino:</label>
            <select className="border rounded-md p-2">
              <option value="">Gramado - RS</option>
              <option value="">Foz do Iguaçu - PR</option>
              <option value="">Natal - RN</option>
              <option value="">Salvador - BA</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-in</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4">Verificar disponibilidades</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
