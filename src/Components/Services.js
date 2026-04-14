import React from 'react';
import { useNavigate } from 'react-router-dom';


function Services() {
    const navigate = useNavigate();
    return (
        <>
            <header className="bg-[var(--primary-color)] w-full h-20 flex items-center p-4">
                <div className='w-[45%] flex justify-start'>
                    <button onClick={
                        () => navigate('/Menu')}>
                        <img  src={`${process.env.PUBLIC_URL}/assets/menuhamburger.svg`} alt="Menu Hamburger" className="h-10"/>
                    </button>
                </div>    
                    <div className='w-1/2 flex justify-start'>
                    <img src={`${process.env.PUBLIC_URL}/assets/LogoPerfil.png`} alt="Logo da Barbearia Perfil" className="h-14" />      
                </div>
            </header>
            <main>
                <div className='bg-[var(--secondary-color)] flex items-center justify-start p-4 border-b border-[var(--primary-color)]'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/assets/LogoPerfil.png`} alt="Corte de Cabelo" className='w-20'/>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-2 ml-4'>
                        <label className='text-2xl text-[var(--primary-color)] font-bold'>Corte</label>
                        <label className='text-lg'>R$ 0,00</label>
                    </div>
                </div>
                <div className='bg-[var(--secondary-color)] flex items-center justify-start p-4 border-b border-[var(--primary-color)]'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/assets/LogoPerfil.png`} alt="Corte de Cabelo" className='w-20'/>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-2 ml-4'>
                        <label className='text-2xl text-[var(--primary-color)] font-bold'>Barba</label>
                        <label className='text-lg'>R$ 0,00</label>
                    </div>
                </div>
                <div className='bg-[var(--secondary-color)] flex items-center justify-start p-4 border-b border-[var(--primary-color)]'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/assets/LogoPerfil.png`} alt="Corte de Cabelo" className='w-20'/>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-2 ml-4'>
                        <label className='text-2xl text-[var(--primary-color)] font-bold'>Hidratação</label>
                        <label className='text-lg'>R$ 0,00</label>
                    </div>
                </div>
            </main>
        </>
    );
}


export default Services;