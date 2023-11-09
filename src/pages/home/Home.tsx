
function Home() {
    return (
        <>
            <div className="bg-indigo-300 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                        Drogaria Kero
                        </h2>
                        <p className='text-xl'>
                        Entrega rápida e preço popular!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center w-[39.5rem]">
                        <img
                            src="https://i.pinimg.com/originals/c7/2b/a8/c72ba8413d173e9fda9755287639744e.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
