import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

import TelaInicial from './pages/TelaInicial/TelaInicial';
import TelaDeJogos from './pages/TelaDeJogos/TelaDeJogos'

import JogoDaMemoria from './pages/Jogos/JogoDaMemoria/JogoDaMemoria';
import JogoDaForca from './pages/Jogos/JogoDaForca/JogoDaForca'
import Quiz from './pages/Jogos/Quiz/Quiz'
import Sudoku from './pages/Jogos/Sudoku/Sudoku'
import JogoDaVelha from './pages/Jogos/JogoDaVelha/JogoDaVelha'



function App() {
  return (
    // <TelaDeJogos />
    <Router>
      <Header />
{/* 
      <Link to="/">Tela Inicial</Link>
      <Link to="/JogoDaMemoria">Jogo Da Memoria</Link>
      <Link to="/TelaDeJogos">Jogo Da Memoria</Link>
  */}
      <Routes>
        <Route path='/' element={<TelaInicial />} />
        <Route path='/jogos' element={<TelaDeJogos />} />

        <Route path='/jogo-da-memoria' element={<JogoDaMemoria />} />
        <Route path='/joga-da-velha' element={<JogoDaVelha />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/sudoku' element={<Sudoku />} />
        <Route path='/jogo-da-forca' element={<JogoDaForca />} />
      </Routes>

      <Footer />
    </Router>
  );
  
      {/* <Header />

      <TelaInicial />
      
      <Footer /> */}
}

export default App;
