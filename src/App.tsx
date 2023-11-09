import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategorias from './components/categoria/listacategoria/listaCategorias';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';



function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <div className='min-h-[80vh]'>
                    <Routes>
                        
                        <Route path="/home" element={<Home />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/categorias" element={<ListaCategorias />} />
                        <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                        <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                        <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                        
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </ AuthProvider>
    );
}

export default App;