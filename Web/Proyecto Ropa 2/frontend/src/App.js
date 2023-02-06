import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from './components/layout/Footer';

import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>

        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='nosotros' element={<NosotrosPage />} />
            <Route path='novedades' element={<NovedadesPage />} />
            <Route path='contacto' element={<ContactPage />} />

          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </>
  );
}

export default App;
