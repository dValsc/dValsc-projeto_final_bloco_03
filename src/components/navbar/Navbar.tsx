
function Navbar() {
    return (
        <>
            <div className='w-full  bg-blue-200 text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                    Farmácia

                    <div className='flex gap-4'>
                        Produtos
                        Categorias
                        Cadastrar categoria
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar