import React from 'react';
import { useNavigate } from 'react-router-dom';



function UserPage() {
    const navigate = useNavigate();
    return (
        <>
        <header className="bg-[var(--primary-color)] w-full h-20 flex items-center p-4">
            <div className='w-[45%] flex justify-start'>
                <button onClick={
                    () => navigate('/')}>
                    <img  src={`${process.env.PUBLIC_URL}/assets/menuhamburger.svg`} alt="Menu Hamburger" className="h-10"/>
                </button>
            </div>    
                <div className='w-1/2 flex justify-start'>
                <img src={`${process.env.PUBLIC_URL}/assets/LogoPerfil.png`} alt="Logo da Barbearia Perfil" className="h-14" />      
            </div>
        </header>
        <main className='w-full h-screen flex flex-col py-4'>
            <div className='border-b-2 border-[var(--primary-color)] flex items-center justify-center text-4xl p-4'>
                <label>Bem-vindo, nome do usuário!</label>
            </div>
            <div className='w-full h-auto border-b-2 border-[var(--primary-color)] flex flex-col items-center justify-start p-4 gap-4'>
                <label>Próximos agendamentos:</label>
                <div className='bg-[var(--primary-color)] px-5 py-2   rounded-2xl'><label className='text-white'>Corte | 10/02 | 09:00 | Guilherme</label></div>
            </div>
            <div className='w-full h-auto border-b-2 border-[var(--primary-color)] flex flex-col items-center justify-start p-4 gap-4'>
                <label>Histórico de agendamentos:</label>
                <div className='bg-[var(--primary-color)] px-5 py-2   rounded-2xl'><label className='text-white'>Corte | 10/02 | 09:00 | Guilherme</label></div>
                <div className='bg-[var(--primary-color)] px-5 py-2   rounded-2xl'><label className='text-white'>Barba | 12/02 | 10:00 | Guilherme</label></div>
                <div className='bg-[var(--primary-color)] px-5 py-2   rounded-2xl'><label className='text-white'>Corte | 01/03 | 17:00 | Guilherme</label></div>
                <button className='bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg mt-4' onClick={() => navigate('/Menu')}>
                    +
                </button>
            </div>
            <div className='w-full h-auto flex flex-col items-center justify-start p-4 gap-4'>
                <button className='bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg mt-4' onClick={() => navigate('/')}>
                    Editar Perfil
                </button>
            </div>
        </main>
        </>
    );

};

export default UserPage;