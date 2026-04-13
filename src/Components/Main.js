import React from 'react';
import { useNavigate } from 'react-router-dom';



function Main() {
    const navigate = useNavigate();
  return (
    <>
    
        <header className="w-full h-20 flex items-center  bg-[var(--primary-color)]  lg:h-36 lg:justify-center lg:gap-4 p-4">
            <div className='w-[45%] lg:hidden'>
                <button onClick={() => navigate('/Menu')}>
                    <img src={'/assets/menuhamburger.svg'} alt="Menu Hamburger" className="h-10" />
                </button>
            </div>
            <div className='hidden lg:flex'>
                <button className='text-1xl font-bold text-[var(--secondary-color)] transition-transform duration-300 hover:scale-110' onClick={() => navigate('/Services')}>
                    <label className='text-1xl font-bold text-[var(--secondary-color)]' >SERVIÇOS</label>
                </button>
            </div>
            <div className='hidden lg:flex'> 
                <button className='text-1xl font-bold text-[var(--secondary-color)] transition-transform duration-300 hover:scale-110' onClick={() => navigate('/UserPage')}>
                    <label className='text-1xl font-bold text-[var(--secondary-color)]' >AGENDAMENTOS</label>
                </button>
            </div>    
            <div className='lg:justify-center flex justify-start'>
                <button onClick={() => navigate('/')}>
                    <img src={'/assets/LogoPerfil.png'} alt="Logo da Barbearia Perfil" className="h-14 lg:h-32" />
                </button>  
            </div>
            <div className='hidden lg:flex'> 
                <button className='text-1xl font-bold text-[var(--secondary-color)] transition-transform duration-300 hover:scale-110' onClick={() => navigate('/UserPage')}>
                    <label>HISTÓRICO</label>
                </button>
            </div>
            <div className='hidden lg:flex'> 
                <button className='text-1xl font-bold text-[var(--secondary-color)] transition-transform duration-300 hover:scale-110' onClick={() => navigate('/UserPage')}>
                    <label>EDITAR PERFIL</label>
                </button>
            </div> 
        </header>
        <main className='w-full h-screen'>
            <div className= "w-full h-80  bg-cover bg-center flex items-center justify-start lg:h-[80vh]" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/main-bg.jpg')`}}>
                <div className=' w-1/2 ml-4 flex flex-col items-start justify-center  gap-6'> 
                    <div>
                        <label className='text-3xl text-white font-bold mb-4 lg:text-9xl'>Bem-vindo à Barbearia Perfil</label>
                    </div>
                    <div>
                        <button className='bg-white hover:bg-[var(--secundary-color)] text-[var(--primary-color)] hover:text-white font-bold py-2 px-2 rounded lg:px-20 lg:py-8 text-3xl' onClick={() => navigate('/Auth')}>
                            Agendar
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col items-center justify-center bg-[var(--primary-color)] p-4'>
                <label className='text-2xl text-white font-bold'>Nossos Serviços</label>
            </div>
            <div className='w-full h-auto flex flex-col bg-[var(--secondary-color)] items-center justify-center p-4 gap-4 lg:flex-col lg:gap-6 overflow-hidden '>
                <div className='w-full h-60 lg:h-80 lg:w-1/3 bg-[var(--primary-color)] rounded-lg flex items-start justify-end p-3 bg-cover transition-transform duration-700 hover:scale-105' style={{ backgroundImage: `url('/assets/corte1.jpg')` }}>
                    <label className='text-2xl text-white font-bold'>Corte de Cabelo</label>
                </div>
                <div className='w-full h-60 lg:h-80 lg:w-1/3 bg-[var(--primary-color)] rounded-lg flex items-start justify-end p-3 bg-cover bg-center transition-transform duration-700 hover:scale-105'  style={{ backgroundImage: `url('/assets/barba1.jpg')` }}>
                    <label className='text-2xl text-white font-bold'>Barba</label>
                </div>
                <div className='w-full h-60 lg:h-80 lg:w-1/3 bg-[var(--primary-color)] rounded-lg flex  items-start justify-end  p-3 bg-cover bg-center transition-transform duration-700 hover:scale-105' style={{ backgroundImage: `url('/assets/wash.jpg')` }}>
                    <label className='text-2xl text-white font-bold'>Hidratação</label>
                </div>
            </div>
            <div className='w-full h-auto flex items-center justify-center bg-[var(--primary-color)] p-4'>
                <label className='text-2xl text-white font-bold'>Nossos Produtos</label>
            </div>
            <div className='w-full h-auto items-center bg-[var(--secondary-color)] justify-center overflow-hidden p-4 grid grid-cols-2 gap-x-2 md:flex lg:flex lg:flex-row'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={'/assets/produtos/produto1.png'} alt="Produto 1" className='w-full h-auto border-4 border-[var(--primary-color)] lg:w-auto  transition-transform duration-700 hover:scale-105'/>
                    <img src={'/assets/produtos/produto2.png'} alt="Produto 2" className='w-full h-auto border-4 border-[var(--primary-color)] lg:w-auto   transition-transform duration-700 hover:scale-105' />
                    <img src={'/assets/produtos/produto3.png'} alt="Produto 3" className='w-full h-auto border-4 border-[var(--primary-color)] lg:w-auto   transition-transform duration-700 hover:scale-105' />
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={'/assets/produtos/produto4.png'} alt="Produto 4" className='w-full h-auto border-4 border-[var(--primary-color)] lg:w-auto   transition-transform duration-700 hover:scale-105' />
                    <img src={'/assets/produtos/produto5.png'} alt="Produto 5" className='w-full h-auto border-4 border-[var(--primary-color)] lg:w-auto   transition-transform duration-700 hover:scale-105' />
                    <img src={'/assets/produtos/produto6.png'} alt="Produto 6" className='w-full h-auto border-4 border-[var(--primary-color)] lg:w-auto   transition-transform duration-700 hover:scale-105' />
                </div>
            </div>
            <div className='w-full h-auto flex flex-col items-center justify-center bg-[var(--primary-color)] p-4'>
                <label className='text-2xl text-white font-bold'>Onde nos encontrar?</label>
            </div>
            <div className='w-full h-auto flex items-center justify-center p-4 bg-[var(--secondary-color)]'> 
                <iframe className='w-full h-screen p-4 lg:w-1/2 lg:h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.419616281059!2d-49.989832123716!3d-29.678611714410064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95228052ae441adb%3A0xd2cbf81e05bebc25!2sBarbearia%20Perfil!5e0!3m2!1spt-BR!2sbr!4v1775673937833!5m2!1spt-BR!2sbr"
                 allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                 </iframe>
            </div>
            <footer className='w-full h-auto flex  items-center justify-center lg:justify-around bg-[var(--primary-color)] p-4'>
            <div>
                <img src={'/assets/LogoPerfil.png'} alt="Logo da Barbearia Perfil" className="w-20 h-14 lg:h-20 " />
            </div>
            <div>
                <p className='text-center text-sm text-gray-400 mb-4'>© 2024 Barbearia Perfil. Todos os direitos reservados.</p>
                <div className='flex items-center justify-center gap-4'>
                <img src={'/assets/whatsapp.svg'} alt="Logo da Barbearia Perfil" className="border border-white bg-[var(--secondary-color)] rounded-2xl p-1 w-8 h-8 lg:w-16 lg:h-16 lg:rounded-full lg:p-3" />
                <img src={'/assets/instagram.svg'} alt="Logo da Barbearia Perfil" className="border border-white bg-[var(--secondary-color)] rounded-2xl p-1 w-8 h-8 lg:w-16 lg:h-16 lg:rounded-full lg:p-3" />
                <img src={'/assets/facebook.svg'} alt="Logo da Barbearia Perfil" className="border border-white bg-[var(--secondary-color)] rounded-2xl p-1 w-8 h-8 lg:w-16 lg:h-16 lg:rounded-full lg:p-3" />
                </div>
            </div>
            <div>
                <img src={'/assets/LogoPerfil.png'} alt="Logo da Barbearia Perfil" className="w-20 h-14 lg:h-20 " /> 
            </div>
        </footer>
        </main>
        
    </>
  );
}

export default Main;