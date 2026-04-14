import React from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
    const navigate = useNavigate();
    return (
        <>
        <header className="bg-[var(--primary-color)] w-full h-20 flex items-center p-4">
            <div className='w-[45%] flex justify-start'>
                <button onClick={
                    () => navigate('/')}>
                    <img  src={`${process.env.PUBLIC_URL}/assets/menuhamburger.svg`} alt="Menu Hamburger" className="h-10 rotate-90" />
                </button>
            </div>    
                <div className='w-1/2 flex justify-start'>
                <img src={`${process.env.PUBLIC_URL}/assets/LogoPerfil.png`} alt="Logo da Barbearia Perfil" className="h-14" />      
            </div>
        </header>
        <main className="w-full h-screen flex flex-col items-center justify-start gap-40 bg-[var(--primary-color)]">
            <div className="w-full h-auto m-10 flex flex-col items-center justify-center gap-10">
                <div className="">
                    <button onClick={() => navigate('/Services')}>
                        <label className="text-2xl text-[var(--text-color)] border-b border-[var(--text-color)]">SERVIÇOS</label>
                    </button>
                </div>
                <div>
                    <label className="text-2xl text-[var(--text-color)] border-b border-[var(--text-color)]">MEUS AGENDAMENTOS</label>
                </div>
                <div>
                    <label className="text-2xl text-[var(--text-color)] border-b border-[var(--text-color)]">HISTÓRICO</label>
                </div>
                <div>
                    <button onClick={() => navigate('/UserPage')}>
                        <label className="text-2xl text-[var(--text-color)] border-b border-[var(--text-color)]">EDITAR PERFIL</label>
                    </button>
                </div>
            </div>
            <div>
                <a className=" text-2xl text-[var(--text-color)] border-b border-[var(--text-color)]" onClick={() => navigate('/')}>
                    DESCONECTAR
                </a>
            </div>
        </main>
        </>
    );
}

export default Menu;