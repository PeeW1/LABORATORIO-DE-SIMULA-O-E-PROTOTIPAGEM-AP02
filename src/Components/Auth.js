import React from 'react';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();
  return (
    <>
    <main className='overflow-hidden w-full h-screen flex flex-col'>
      <header className="bg-[var(--primary-color)] w-full h-20 flex items-center p-4">
        <div className='w-[45%] flex justify-start'>
          <button onClick={() => navigate('/')}>
            <img src={`${process.env.PUBLIC_URL}/assets/arrowback.svg`} alt="Seta Voltar" className="h-10" />
          </button>
        </div>
        <div className='w-1/2 flex justify-start'>
          <img src={`${process.env.PUBLIC_URL}/assets/LogoPerfil.png`} alt="Logo da Barbearia Perfil" className="h-14" />      
        </div>
      </header>
      <main className='w-full h-screen flex items-center justify-center'>
        <div className=' w-full h-auto  m-[15%] flex flex-col gap-5 rounded-lg'>
          <div className='w-full flex justify-center'>
            <label className='text-4xl mb-4'>Acesse sua conta</label>
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-2xl'>Usuário:</label>
            <input  className=' text-xl bg-[var(--secondary-color)] p-4 rounded-lg border border-[var(--primary-color)]' ></input>
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-2xl'>Senha:</label  >
            <input  className='text-xl bg-[var(--secondary-color)] p-4 rounded-lg border border-[var(--primary-color)]'></input>
          </div>
          <div className='w-full  flex justify-center mt-4'>
            <button className='w-1/2 bg-[var(--primary-color)] text-white px-4 py-4 rounded-lg '>Entrar</button>
          </div>
          <div className='w-full flex justify-center mt-2'>
            <label className='text-xl'>Ainda não tem uma conta? <a href="#" className='text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]'>Criar</a></label>
          </div>
        </div>
      </main>
    </main>
    </>
  );
}

export default Auth;
