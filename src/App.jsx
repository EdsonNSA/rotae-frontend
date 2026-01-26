import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout/Layout';
import Home from './pages/Home/Home';
import Roteiros from './pages/roteiros/Roteiros';
import Lugares from './pages/lugares/Lugares';
import DetalheLugar from './pages/DetalheLugar/DetalheLugar'; 
import DetalheRoteiro from './pages/roteiros/DetalheRoteiro'; 
import CriarRoteiro from './pages/roteiros/CriarRoteiro'; 
import Eventos from './pages/eventos/Eventos';
import './App.css';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}> 
        
        <Route index element={<Home />} /> 
        
        <Route path="roteiros" element={<Roteiros />} />
        <Route path="lugares" element={<Lugares />} />
        <Route path="eventos" element={<Eventos />} />
        
        <Route path="lugares/:id" element={<DetalheLugar />} />
        <Route path="roteiros/:id" element={<DetalheRoteiro />} /> 

        <Route path="criar-roteiro" element={<CriarRoteiro />} />

      </Route>
    </Routes>
  );
}

export default App;