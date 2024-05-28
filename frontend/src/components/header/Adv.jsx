import React from 'react';
import BFM_Adv from "../../assets/images/header/BFM_Adv.png"


const Adv = () => {
  return (
    <main className='hidden md:block'>
      <div className="h-64 bg-black flex items-center justify-center flex-col">
        <img src={BFM_Adv} alt="AdVdeo"/>
        <div className="text-zinc-500 text-xs self-start mt-1 ml-33% pl-1">Publicité</div>
      </div>
    </main>
  );
}

export default Adv;